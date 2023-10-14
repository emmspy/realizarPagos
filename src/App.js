import React from 'react';
import './App.css';
//funcion que me permite traer stripe y cargar la conexion a la plataforma
import {loadStripe} from '@stripe/stripe-js'
//componenete que me engloba otros para que tengan acceso a stripe 
import {Elements, CardElement} from '@stripe/react-stripe-js'


//forma de conectarme a Stripe --> clave publica 
const stripePromise = loadStripe(
  "pk_test_51O0aeRIn1ZsJM9qC58kM3UUFn8jHA31roz7cdYLwGS2wvEuFO1pShvwLD6TRjQkRgHvIP2DHNuHZDxqEQUykApXx00defro1bW"
);
//metodo que recibe un evento de chechoutForm
const handleSubmit = (e) =>{
  e.preventDefault();
}

const CheckoutForm = () => {
  //el componenete de CardElement ya me valida el input 
  return <form onSubmit={handleSubmit}>
    <CardElement/>
    <button>
      comprar
    </button>
  </form>
}

function App() {
  return (
    //con el elements le paso la conexion a los componenetes hijos 
    <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
  );
}

export default App;
