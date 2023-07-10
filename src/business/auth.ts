import { selectByCredentials, selectByEmail, updateRowPass } from "../access/user"
import { insertRow, updateRow } from '../access/session'
import { DecryptRSA } from "../core/encrypt"
import { generatorToken } from "../core/generator"

const defaultTimeSession = 90

export const ValidateUser = async (Credentials: string, keepSessionOpen: boolean) => {
    const credentials_decrypted = DecryptRSA(Credentials)
    if(!credentials_decrypted){ return }
    const values = credentials_decrypted.split('|')
    if(!(values && values.length > 1)){ return }

    const username = values[0]
    const password = values[1]

    let userResponse = null
    const userGetted = await selectByCredentials(username, password)
    if(userGetted && userGetted.Sesiones){
        let sessiones: any = []
        if(userGetted.Sesiones.length > 0 && userGetted.Sesiones[0].Token){
            const session_exists = {
                Id: userGetted.Sesiones[0].Id,
                Token: userGetted.Sesiones[0].Token,
                Duracion: !!keepSessionOpen? 0 : defaultTimeSession
            }
            const session_updated = await updateRow(session_exists)
            sessiones = [ session_updated ]
        }
        else{
            const session_new = {
                Id_Usuario: userGetted.Id,
                Token: generatorToken(),
                Duracion: !!keepSessionOpen? 0 : defaultTimeSession
            }
            const session_created = await insertRow(session_new)
            sessiones = [ session_created ]
        }
        userResponse = userGetted
        userResponse.Sesiones = sessiones
    }
    return userResponse
}

export const VerifyEmail = async (Email: string) => {
    return await selectByEmail(Email)
}

export const updatePasswordRow = async (Item: any) => {
    return await updateRowPass(Item)
}