import { FaStar } from "react-icons/fa";
const Card = ({ data }) => {
  console.log(data);

  const { id, image, name, popular, price, rating, votes, available } = data;

  return (
    <div className="card">
      {popular && <span className="popular">Popular</span>}
      <div>
        <img src={image} />
      </div>
      <div>
        <p className="price-info">
          <span>{name}</span> <span className="price">{price}</span>
        </p>
        <p>
          <span>
          <FaStar  className="Star"/>
            {rating} {`(${votes} votes)`}
          </span>
          {!available && <span className="sold-out">Sold out</span>}
        </p>
      </div>
    </div>
  );
};

export default Card;
