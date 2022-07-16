import { useState, useContext } from "react";
import ListComments from "../components/ListComments";
import FeatureReferences from "../features/References";
import { Context } from "../context/Context";

export default function References() {
  const { setPage } = useContext(Context);
  setPage("Referencias");
  const [lstState, setLstState] = useState([]);
  return (
    <>
      <FeatureReferences setLstState={setLstState} />
      <ListComments
        loadData={"reference"}
        lstState={lstState}
        setLstState={setLstState}
      />
    </>
  );
}
