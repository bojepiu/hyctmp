import  fernet from 'fernet'

var base64data=Buffer.from("pumpitup************************").toString('base64')
var secret = new fernet.Secret(base64data)
console.log(secret)
var token = new fernet.Token({
    secret: secret,
    time: Date.parse(1),
    iv: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
})
var x=token.encode("HABIA UNA VEZ")
console.log(x)

var token = new fernet.Token({
secret: secret,
token: x,
ttl: 0
})
var y=token.decode();
console.log(y)
/**Agregar el poder generar el pass de fernet que es la contraseña del usuario hasta llegar a los 256 bits
 * NOTA hacer la prueba de descifrado desde el lado del cliente :o 
 */