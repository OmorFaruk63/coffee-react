import { useContext } from "react";
import Card from "../../components/Card";
import { context } from "../../context/GlobalContext";

const AvailableNow = () => {
  const product = useContext(context);
  const products = product.filter((p) => p.available === true);
  return (
    <div className="card-container">
      {products?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default AvailableNow;
