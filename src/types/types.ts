
// aqui generamos el tipado de la bd como typescript de forma obligatoria debes definir de que tipo de dato deben ser las variables o constantes
//aqui centralizamo algunas ya se que se usaran en toda la aplicacion 
//forma de uso=> simplemente importamos en el archivo que queremos usar ese objeto 

//objeto de la tienda que se debe propagar por toda la app
export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}
//objeto de la tienda que se debe propagar por toda la app
//aqui hacemos que herede guitar el typado de arriba y aparte quantity
//como comentamos hay dos formas de crear typado con type y interface vamos a crear las dos pero la que vamos a usar es de type
//el signo de ampersan lo usamos para conectar los dos type 

// si queremos Pasarle valores concreto del typado que conectamos usamos la palabra reservada Pick y se usaria como vamos a realizar 
// uso de pick
/*
export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
    quantity: number
}
*/



// si queremos QUITARLE valores concreto del typado que conectamos usamos la palabra reservada Pick y se usaria como vamos a realizar 
// uso de Omit
/*
export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
    quantity: number
}
*/

// 1 TANTO OMIT COMO PICK SE ESTRUCTURA IGUAL SALVO SU PALABRA RESERVADA
// 2 HAY QUE LLAMAR CADA KEY ENTRE COMILLA SIMPLE
//3 UNA VEZ LLAMAMOS A UNA Y QUEREMOS LLAMAR OTRA DEBEMOS DE USAR EL SIMBOLO => '|' ESTO CONECTA CADA KEY NOMBRADA 
//4 FINALMENTE CERRAMOS LA ETIQUETA Y USAMOS AMPERSAN & ARA CONECTARLO CON LOS VALORES QUE QUEREMOS CREAR EN ESTE NUEVO TIPO

export type CartItem = Guitar & {
    quantity: number
}







/* forma de usar con interface=> es muy parecido a type solo que en el typado basico se usa interface y se elimina el simbolo de igual
y el typado encadenado usamos extends en lugar de igual y eliminamos el ampersan 

export interface GuitarI {
    id: number
    name: string
    image: string
    description: string
    price: number
}
export interface CartItem extends GuitarI {
    quantity: number
}
*/


// GENERAMOS UN TYPE PARA USARLO RECOGIENDO EL ID DE GUITAR  HAY VARIAS FORMA UNA SERIA ASI (LO VEO MUY BIEN )

export type GuitarId = Pick<CartItem, 'id'>;


// FORMA LOOK UP
/*
export type GuitarId = Guitar['id']

*/