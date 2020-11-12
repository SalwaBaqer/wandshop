import React from "react";
import {
  DetailWrapper,
  RecommendationListWrapper,
  RecommendationStyle,
} from "../styles";
import { Redirect, useParams } from "react-router-dom";
import WandItem from "./WandItem";
import ScrollToTop from "react-scroll-up";

const WandDetail = (props) => {
  const wandId = useParams().wandId;

  const wand = props.wands.find((_wand) => _wand.slug === wandId);

  const recommendationِArray = props.wands.filter(
    (wandr) => wandr.core === wand.core && wandr.id !== wand.id
  );

  const recommendation = recommendationِArray.map((reco) => (
    <WandItem wand={reco} />
  ));

  if (!wand) return <Redirect to="/wands" />;

  return (
    <>
      <DetailWrapper>
        <img src={wand.imageUrl} alt={wand.core} />
        <h4>Core: {wand.core}</h4>
        <h4>Wood : {wand.wood}</h4>
        <h4>length: {wand.length}</h4>
      </DetailWrapper>

      <RecommendationStyle>Recommendation</RecommendationStyle>
      <RecommendationListWrapper>{recommendation}</RecommendationListWrapper>
    </>
  );
};

export default WandDetail;
