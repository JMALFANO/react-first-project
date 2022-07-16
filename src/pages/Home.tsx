import { useContext } from "react";
import { Context } from "../context/Context";

export const Home = () => {
  const { setPage } = useContext(Context);
  setPage("Inicio");

  return (
    <div className="my-16">
      <p className="md:text-3xl">
        ¡Hola! Soy <strong>Juan Martín ALFANO</strong>.
        <br />
      </p>
      <p className="md:text-2xl mt-10">
        <strong>Licenciado en Tecnología de la Información</strong> recibido en
        la&nbsp;
        <strong>Universidad de Palermo</strong>.
      </p>
      <br />
      <p className="md:text-xl my-5">
        Actualmente trabajo para el <strong>Banco Santander</strong> como&nbsp;
        <strong>Desarrollador FullStack</strong> con las tecnologías&nbsp;
        <strong>React 18</strong> y <strong>.NetCore 6</strong>.
      </p>
      <p className="text-lg">
        <span className="font-bold text-xl">Conocimientos</span>
      </p>
      <ul>
        <li>-ASP.NET MVC, .NET Framework, .NET Core.</li>
        <li>-Angular, Node.js.</li>
        <li>-TypeScript, JavaScript.</li>
        <li>-SQL, Oracle SQL & MySQL.</li>
        <li>-Git & TFS.</li>
        <li>-IoT.</li>
      </ul>
    </div>
  );
};
