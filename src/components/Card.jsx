import React from "react";
import {FittedCard, DisabledCard, Card} from "../styles/Card";

function Cards({fitted, disabled, children}) {
  return fitted ? <FittedCard data-testid="fitted-card">{children}</FittedCard> :
         disabled ? <DisabledCard data-testid="card">{children}</DisabledCard> : <Card data-testid="card">{children}</Card>;
}
export default Cards;
