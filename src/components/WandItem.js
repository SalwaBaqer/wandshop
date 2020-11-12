import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

const wandItem = (props) => {
  const wand = props.wand;

  return (
    <>
      <ProductWrapper>
        <Link to={`/wands/${wand.slug}`}>
          <img
            class="productImage"
            src={wand.imageUrl}
            alt={wand.core}
            onclick={window.scroll(0, 10)}
          />
        </Link>
        <h3>{wand.wood}</h3>
      </ProductWrapper>
    </>
  );
};

export default wandItem;
