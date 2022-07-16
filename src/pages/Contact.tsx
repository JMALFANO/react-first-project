import { useState, useContext } from "react";
import ListComments from "../components/ListComments";
import FeatureContact from "../features/Contact";
import { Context } from "../context/Context";
export default function Contact() {
  const [lstState, setLstState] = useState([]);

  const { setPage } = useContext(Context);
  setPage("Contacto");

  return (
    <>
      <FeatureContact setLstState={setLstState} />
      <ListComments
        loadData={"contact"}
        lstState={lstState}
        setLstState={setLstState}
      />
    </>
  );
}
