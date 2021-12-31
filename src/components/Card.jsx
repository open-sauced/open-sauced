import React from "react";
import {FittedCard, Card} from "../styles/Card";

function Cards({fitted, children}) {
  return fitted ? <FittedCard data-testid="fitted-card">{children}</FittedCard> : <Card data-testid="card">{children}</Card>;
}
export default Cards;
