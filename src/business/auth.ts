import { selectByCredentials, selectByEmail } from "../access/user"
import { DecryptRSA } from "../core/encrypt"

export const ValidateUser = async (Credentials: string) => {
    const credentials_decrypted = DecryptRSA(Credentials)
    if(!credentials_decrypted){ return }
    const values = credentials_decrypted.split('|')
    if(!(values && values.length > 1)){ return }

    const username = values[0]
    const password = values[1]

    return await selectByCredentials(username, password)
}

export const VerifyEmail = async (Email: string) => {
    return await selectByEmail(Email)
}