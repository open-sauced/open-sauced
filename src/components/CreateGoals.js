import React from "react";
import Button from "../styles/Button";
import Illustration from "../styles/Illustration";
import {ContextStyle} from "../styles/Card";
import {FlexColumn, SpaceBetween} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {goalsReducer} from "../lib/reducers";
import {devProductive} from "../illustrations";

function CreateGoals({installNeeded, user, onRepoCreation}) {
  const _handleRepoCreation = () => {
    api.fetchOwnerId(user).then(ownerRes => {
      const {
        data: {
          gitHub: {
            user: {id},
          },
        },
      } = ownerRes;

      api.createOpenSaucedGoalsRepo(id).then(goalsRes => {
        const {errors, data} = goalsRes;

        if (errors && errors.length > 0) {
          console.log(`"${errors[0].message}"`);
        }
        const {
          gitHub: {
            cloneTemplateRepository: {
              repository: {id},
            },
          },
        } = data;

        onRepoCreation(id, goalsReducer(goalsRes, {type: "CREATE"}));
      });
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
              <p>A public repository name "open-sauced-goals" will be created on your GitHub account to store.</p>
              <small>
                <em>You own all your data saved while saucin.</em>
              </small>
            </React.Fragment>
          </FlexColumn>
          <Illustration alt="productive developer image" src={devProductive} />
        </SpaceBetween>
      </ContextStyle>
      <br style={{marginTop: 8}} />
      {installNeeded ? (
        <a referrer="noreferrer" target="_blank" href="https://github.com/apps/open-sauced/installations/new/permissions?target_id=20134767">
          <Button primary>Finish initializing {user}/open-sauced-goals</Button>
        </a>
      ) : (
        <Button primary onClick={_handleRepoCreation}>
          Create your goal workspace
        </Button>
      )}
    </React.Fragment>
  );
}

export default CreateGoals;
