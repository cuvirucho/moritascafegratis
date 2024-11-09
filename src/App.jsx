import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PromotionsCarousel from './PromotionsCarousel'
import Formulario from './Formulario'
import Franqi from './Franqi'

function App() {


  return (
    <>
      <section className='contepagina1'  >
    <div className='contelogoheder' ><img className='imglogogeders' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731124196/Que_esperas_._dqfhgg.png" alt="" /></div>
        

        <article className='contepromciones' >


<PromotionsCarousel/>
       
       
        </article>
     
     <div className='linea'>
      a
     </div>
     <article>
     <Formulario/>
     </article>
      

     
     <article className='espcip'>
     -------------------------
     </article>
     
     <article className='espcip'>
     -------------------------
     </article>
     
     <article className='espcip'>
     -------------------------
     </article>
     
     <article className='espcip'>
     -------------------------
     </article>
     
    
     

     <article className='contefran'> 
   <Franqi/>
     </article>
     
     
  <div className='piedepagina' >https://publibros.netlify.app/#/marketig
    <p>SI QUIERES UNA PÁGINA para Tu negosio en PUBLIBROS te ayudamos vista nuestra web </p>
    <a href="https://publibros.netlify.app/">
    GO

    </a>
  </div>
      </section>



    </>
  )
}

export default App
