import { BoxWrapper } from "../styles";
const ShopImageItem = (props) => {
  return (
    <BoxWrapper>
      <img src={props.wandShopImages} />
    </BoxWrapper>
  );
};

export default ShopImageItem;
