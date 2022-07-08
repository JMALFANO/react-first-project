
import { useState } from "react";
import ListComments from "../components/ListComments";
import FeatureContact from "../features/Contact";

export default function Contact() {
  const [lstState, setLstState] = useState([]);

  return (
    <>
    <FeatureContact setLstState={setLstState}/>
    <ListComments loadData={'contact'} lstState ={lstState} setLstState={setLstState}/>
    </>
  );
}
