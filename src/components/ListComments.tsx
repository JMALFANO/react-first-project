import React, { useEffect, useState } from "react";
import { readLocalStorage } from "../helpers/helper";

export default function ListComments(props: any) {

  useEffect(() => {
    props.setLstState(readLocalStorage(props.loadData));
  }, []);

  return (
    <div>
      {props.lstState.length ? (
        <h2 className="font-bold mt-5 mb-2">Últimos comentarios enviados:</h2>
      ) : (
        <h2 className="font-bold mt-5">No hay comentarios aún.</h2>
      )}

      {props.lstState != null &&
        props.lstState.map((data: any) => {
          return (
            <article
              className="md:w-2/4 mb-1
               bg-gray-100 rounded-lg p-2"
              key={data.id}
            >
              <span className="font-bold">{data.name}</span>
              <p>{data.message}</p>
            </article>
          );
        })}
    </div>
  );
}
