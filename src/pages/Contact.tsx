import React, { useEffect, useState } from "react";
import { readLocalStorage } from "../helpers/helper";

import FeatureContact from "../features/Contact";

export default function Contact() {
  const [listContacts, setListContacts] = useState([]);

  useEffect(() => {
    setListContacts(readLocalStorage("contact"));
  }, []);


  return (
    <>
        <FeatureContact/>
      
      <div>
        {listContacts.length ? (
          <h2 className="font-bold mt-5 mb-2">Últimos comentarios enviados:</h2>
        ) : (
          <h2 className="font-bold mt-5">No hay comentarios aún.</h2>
        )}

        {listContacts != null &&
          listContacts.map((contact: any) => {
            return (
              <article
                className="md:w-2/4 mb-1
               bg-gray-100 rounded-lg p-2"
                key={contact.id}
              >
                <span className="font-bold">{contact.name}</span>
                <p>{contact.message}</p>
              </article>
            );
          })}
      </div>
    </>
  );
}
