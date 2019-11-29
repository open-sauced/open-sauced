import React from "react";
import Button from "../styles/Button";
import Illustration from "../styles/Illustration";
import {ContextStyle} from "../styles/Card";
import {FlexColumn, SpaceBetween} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {goalsReducer} from "../lib/reducers";
import {devProductive} from "../illustrations";

function CreateGoals({onRepoCreation}) {
  const _handleRepoCreation = () => {
    api.createOpenSaucedGoalsRepo().then(res => {
      onRepoCreation(goalsReducer(res, {type: "CREATE"}));
    });
  };

  return (
    <React.Fragment>
      <ContextStyle>
        <SpaceBetween>
          <FlexColumn>
            <React.Fragment>
              <h1>Get Saucin'</h1>
              <p>
                Open Sauced is a tool to help track your next open source contributions. You can get started by creating
                a goal workspace below.
              </p>
              <p>A private repository name "open-sauced-goals" will be created on your GitHub account to store.</p>
              <small>
                <em>You own all your data saved while saucin.</em>
              </small>
            </React.Fragment>
          </FlexColumn>
          <Illustration alt="productive developer image" src={devProductive} />
        </SpaceBetween>
      </ContextStyle>
      <br style={{marginTop: 8}} />
      <Button primary onClick={_handleRepoCreation}>
        Create your goal workspace
      </Button>
    </React.Fragment>
  );
}

export default CreateGoals;
