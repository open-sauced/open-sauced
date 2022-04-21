import React, {useState} from "react";
import Button from "../styles/Button";
import Illustration from "../styles/Illustration";
import {ContextStyle} from "../styles/Card";
import {SpaceBetweenTop, SpaceBetween} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {goalsReducer} from "../lib/reducers";
import {devProductive} from "../illustrations";
import Cards from "./Card";

function CreateApp() {
  return (
    <div style={{ maxWidth: "40%" }}>
      <h1>Create your goals workspace</h1>
      <p>
        Open Sauced is a tool to help track your open source contributions. You can get started by creating a goal
        workspace below.
      </p>
      <p>A public repository named "open-sauced-goals" will be created on your GitHub account to store data about your goals.</p>
      <small>
        <em>You own all your data saved while saucin.</em>
      </small>
    </div>
  );
}

function CreateGoals({installNeeded, user, onRepoCreation}) {
  const [installReady, setInstallReady] = useState(installNeeded);
  const _handleRepoCreation = () => {
    api.fetchOwnerId(user.login).then(ownerRes => {
      const {
        data: {
          gitHub: {
            user: {id},
          },
        },
      } = ownerRes;

      api
        .createOpenSaucedGoalsRepo(id)
        .then(goalsRes => {
          const {errors, data} = goalsRes;

          if (errors && errors.length > 0) {
            console.log(`"${errors[0].message}"`);
          }

          setInstallReady(data.gitHub === null);

          if (data.gitHub) {
            const {
              gitHub: {
                cloneTemplateRepository: {
                  repository: {id},
                },
              },
            } = data;

            onRepoCreation(id, goalsReducer(goalsRes, {type: "CREATE"}));
          }
        })
        .catch(err => console.log(err));
    });
  };

  return (
    <React.Fragment>
      <ContextStyle>
        <SpaceBetweenTop>
          <SpaceBetween>
              <CreateApp />
              <Illustration alt="productive developer image" src={devProductive} />
          </SpaceBetween>
        </SpaceBetweenTop>
        <Cards>
          <SpaceBetween>
            <h1>1 Let's sync Open Sauced with your GitHub Repos</h1>
            <Button primary minWidth={175} onClick={_handleRepoCreation} disabled={installReady}>
              Sync Repos
            </Button>
          </SpaceBetween>
        </Cards>
        <Cards>
          <SpaceBetween>
            <h1>2 Now let's create the Open Sauced database on GitHub</h1>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://github.com/apps/open-sauced/installations/new/permissions?target_id=${user && user.id}`}>
              <Button primary minWidth={175} disabled={!installReady}>Create database</Button>
            </a>
          </SpaceBetween>
        </Cards>
        <Cards>
          <SpaceBetween>
            <h1>3 And finally, it's time to follow some repos</h1>
              <Button primary minWidth={175} disabled={true}>Add Repos</Button>
          </SpaceBetween>
        </Cards>
      </ContextStyle>
    </React.Fragment>
  );
}

export default CreateGoals;
