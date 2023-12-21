import { useContext } from "react";
import { context } from "../../context/GlobalContext";
import Card from "../../components/Card";

const AllProduct = () => {
  const product = useContext(context);

  return (
    <div className="card-container">
      {product?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default AllProduct;
