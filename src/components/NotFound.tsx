import Error  from "./icons/Error";
export default function NotFound() {
  return (
    <div className="grid min-h-full place-items-center">
      <div className="mx-auto max-w-5xl">
        <main className="grid grid-cols-12 gap-4 rounded-md bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="col-span-12 md:col-span-4">
            <Error className="mx-auto h-32 w-32" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-base font-semibold text-santander/80">
              ERROR 404
            </h2>
            <h1 className="relative mt-4 mb-8 inline-block w-full pb-4 text-3xl leading-10 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-10 after:bg-santander">
              Lo sentimos, no encontramos la página que buscás.
            </h1>
            <p className="pb-4 text-base">
              Esto puede ocurrir por dos motivos:
            </p>
            <ul className="mb-6 ml-4 list-disc pl-6 marker:text-santander">
              <li className="relative pl-2 text-base leading-7">
                La direccion URL que escribiste es erronea.
              </li>
              <li className="relative pl-2 text-base leading-7">
                La página que buscas fue eliminada o cambiada de lugar.
              </li>
            </ul>
            <a
              href="/"
              className="group inline-flex items-center text-sm uppercase text-santander"
            >
              Volver a la página de inicio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-6 w-6 transition group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
