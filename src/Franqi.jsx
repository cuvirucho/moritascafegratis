import React from 'react'

function Franqi() {

  /*mesaje sde wasp*/

 // Define el número de teléfono y el mensaje
 let phoneNumber = "+593963200325"; // Reemplaza con el número de WhatsApp al que quieras enviar el mensaje
 let message = "¡Hola! Me gustaría agendar una reunion para una franquisia de moritas.";

 // Función que genera el enlace de WhatsApp
 const sendMessage = () => {
   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
   window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
 };

  return (
    <article className='contefraniqmax'>
        
        <section className='item1fran' > 
     <h3></h3>
        </section>
        
        <section className='item2fran' >
            <h2>Ten tu propio negocio</h2>
            <p>¡Conviertete en empresario al ser dueño de tu propio moritas que esperas para alcanzar el éxito!</p>
        <button onClick={sendMessage} >Mas info</button>
        </section>
    
    </article>
  )
}

export default Franqi