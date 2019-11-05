import React from "react";
import {FittedCard, Card} from "../styles/Card.js";

function Cards({fitted, children}) {
  return fitted ? <FittedCard>{children}</FittedCard> : <Card>{children}</Card>;
}
export default Cards;
