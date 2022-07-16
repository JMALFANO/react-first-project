import { useContext } from "react";
import { Context } from "../context/Context";
import FeaturePortfolio from "../features/Portfolio";

export const Portfolio = () => {
  const { setPage } = useContext(Context);
  setPage("Portfolio");
  return (
    <>
      <FeaturePortfolio />
    </>
  );
};
