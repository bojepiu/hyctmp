import * as openpgp from 'openpgp'
import  fernet from 'fernet'

export const generateKeys = (userName, email,passPhrase)=>{
  try {
    return new Promise((resolve, reject) => {
      openpgp.generateKey({   
        type: 'ecc',
        curve:'p521',
        passphrase: passPhrase,
        userIDs: 
        [{ name: userName, email: email, comment: 'Only use hermes'}] 
      })
      .then(res =>{ 
        resolve(res);
      })
      .catch(rej=>{
        reject(rej)
      })
    })
  } catch (error) {
    return (error)
  } 
}

export function createFernetKey(pass){
  try {
    var password=pass.length==32?pass:pass+'*'.repeat(32-pass.length)
    console.log(password)
    var base64data=Buffer.from(password).toString('base64')
    var secret = new fernet.Secret(base64data)
    return {secret:base64data}  
  } catch (error) {
    return ({error:error})
  }  
}

// var token = new fernet.Token({
//   secret: secret,
//   time: Date.parse(1),
//   iv: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// })
// var x=token.encode("HABIA UNA VEZ")
// console.log(x)

// var token = new fernet.Token({
// secret: secret,
// token: x,
// ttl: 0
// })
// var y=token.decode();
// console.log(y)
// /**Agregar el poder generar el pass de fernet que es la contraseña del usuario hasta llegar a los 256 bits
//  * NOTA hacer la prueba de descifrado desde el lado del cliente :o 
//  */