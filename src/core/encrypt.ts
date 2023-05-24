import crypto from 'crypto'
import { privateKey } from "./keys"

export const DecryptRSA = (value: string): string => {
    const rsaPrivateKey = {
        key: privateKey,
        passphrase: '',
        padding: crypto.constants.RSA_PKCS1_PADDING,
      };

      const decryptedMessage = crypto.privateDecrypt(
        rsaPrivateKey,
        Buffer.from(value, 'base64'),
      );

      return decryptedMessage.toString('utf8');
}

export const GenerateHash = (value: string): string => {
    //Generate a hash code
    return value
}

export const CompareHash = (value: string): boolean => {
    //compare hash
    return true
}