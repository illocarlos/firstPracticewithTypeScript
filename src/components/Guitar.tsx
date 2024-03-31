// aqui llamamos ese archivo donde tenemos centralizado algunos tipado
import type { Guitar } from '../types/types'

// forma de tipado para delcarar  en typescript esta type y interface vamos a colocar la otra como seria 
// como norma no se suele usar pero yo lo hare si usas type al final de como llamamos el type le colocaremos una T  y si usamos interface
//le colocamos una I
//aqui marcamos que las dos props que le pasamos a la funcion de que tipo seran 
//la primera es de un objeto que tenemos centralizado en types y llamamos Guitar y la otra es una funcion



/* interface GuitarProps{
guitar: Guitar,
 addToCart: (item: Guitar) => void
}*/

type GuitarProps = {
    guitar: Guitar,
    addToCart: (item: Guitar) => void
}

export default function Guitar({ guitar, addToCart }: GuitarProps) {

    const { name, image, description, price } = guitar

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
