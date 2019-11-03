import React from "react";
import {FittedCard, Card} from "../styles/Card.js";

function DumbCard({fitted, children}) {
  return fitted ? <FittedCard>{children}</FittedCard> : <Card>{children}</Card>;
}
export default DumbCard;
