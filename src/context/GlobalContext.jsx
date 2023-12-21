import { createContext, useEffect, useState } from "react";

export const context = createContext();

const GlobalContext = ({ children }) => {

  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return <context.Provider value={product}>{children}</context.Provider>;
};

export default GlobalContext;
