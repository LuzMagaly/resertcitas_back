import { selectAll, selectById, selectByUsername, insertRow, updateRow, deleteRow } from "../access/user";
import { DecryptRSA } from "../core/encrypt";




export const ValidateUser = async (Credentials: string) => {
    //Descrypt credentials and build username and password
    const credentials_decrypted = DecryptRSA(Credentials);
    if(!credentials_decrypted){ return }
    const values = credentials_decrypted.split('|');
    if(!(values && values.length > 1)){ return }

    const username = values[0];
    const password = values[1];
    
    const res = await selectByUsername(username, password);
    return res;
}

export const RegisterUser = async (Item: string) => {
    const item = {
        //Create the struct to insert!
    }

    return await insertRow(item);
}

export const GetAll = async () => {
    return await selectAll();
}

export const GetOne = async (Id:any) => {
    return await selectById(Id);
}

export const Save = async (Item: any, Type: number) => {
    let result = null;
    switch (Type) {
        case 1:
            result = await insertRow(Item);
            break;
        case 2:
            result = await updateRow(Item);
            break;
        case 3:
            result = await deleteRow(Item);
            break;
    }
    return result;
}