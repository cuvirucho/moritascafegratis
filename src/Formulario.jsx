import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "./Alert";

const Formulario = () => {
  const { register, handleSubmit, reset } = useForm();

  const API_KEY = 'AIzaSyD4R2eAYoa0AvU_FQEMzjncLC-6Tvqicxg';
  const SPREADSHEET_ID = '1YNR_1P5v8nw0wYbdcptVuO_mUZPGXNCSeWybvXoOdb4';
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwWhHlPs6t6Tmo4seGTG-1U0Tez68GyF4sDMy8vAzSAZbPnqaNazQfpiJt3ecqnUu_x/exec", {
        method: 'POST',
        mode: 'no-cors',  // Evita el error de CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: data.nombre,
          email: data.email,
          number: data.number,
          comentarios: data.comentarios,
        }),
      });
  
      // Aunque 'no-cors' limita la visibilidad de la respuesta, puedes mostrar un mensaje al usuario
      const result = await response.text();
      console.log(result);
      setAlertMessage("Gracias disfruta de tu café");
      setShowAlert(true);
      reset();
    } catch (error) {
      console.error('Error ', error);
      setAlertMessage("Hubo un error 005");
      setShowAlert(true);
    }
  };
  /*alerta*/
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  
  
  return (
    <section className='conteformumax'>
      <div className="contevideo">
        <h2>Tomate un café gratis</h2>
      </div>

      <div className="contfomu">
        <div className="conteimg">
          <h3>Tu opinión es importante y en Moritas te premiamos con un café muy especial</h3>
          <img src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731124196/Que_esperas_._938_x_781_px_zgge24.gif" alt=""/>
        </div>
      {showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
        
        <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" placeholder="Escribe tu nombre" {...register("nombre", { required: true })} />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" placeholder="Escribe tu email" {...register("email", { required: true })} />

          <label htmlFor="number">Número:</label>
          <input type="text" id="number" placeholder="Escribe tu número" {...register("number", { required: true })} />

          <label htmlFor="comentarios">Comentarios:</label>
          <textarea id="comentarios" rows="4" placeholder="Escribe tus comentarios aquí" {...register("comentarios", { required: true })}></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
