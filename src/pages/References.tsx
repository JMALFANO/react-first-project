import { useState } from "react";
import ListComments from "../components/ListComments";
import FeatureReferences from "../features/References";
export default function References() {

const [lstState, setLstState] = useState([]);
  return (
    <>
    <FeatureReferences setLstState={setLstState}/>
    <ListComments loadData={'reference'} lstState ={lstState} setLstState={setLstState}/>
    </>
  );
}
