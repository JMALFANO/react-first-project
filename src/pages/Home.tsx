import React from "react";
import useSWR from 'swr'

export const Home = () => {




  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('https://reqres.in/api/users/2', fetcher)

  if (error) return <div>Error al cargar la onfirmación solicitada</div>

  if (!data) return <div>Cargando...</div>

  return (
    <>
    <h1>Nombre: {data.data.first_name}</h1>
    <h1> Description: {data.data.email}</h1>
      <p className="md:text-2xl">
              ¡Hola! Soy <strong>Juan Martín ALFANO</strong>.
        <br />
        <strong>Licenciado en Tecnología de la Información</strong> recibido en
        la&nbsp;
        <strong>Universidad de Palermo</strong>.
      </p>
      <br />
      <p className="md:text-xl">
        Actualmente trabajo para el <strong>Banco Santander</strong> como&nbsp;
        <strong>Desarrollador FullStack</strong> con las tecnologías&nbsp;
        <strong>React 18</strong> y <strong>.NetCore 6</strong>.
      </p>
    </>
  );
};
