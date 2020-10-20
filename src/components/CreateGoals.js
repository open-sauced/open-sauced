import React, {useState} from "react";
import Button from "../styles/Button";
import Illustration from "../styles/Illustration";
import {ContextStyle} from "../styles/Card";
import {FlexColumn, SpaceBetweenTop} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {goalsReducer} from "../lib/reducers";
import {devProductive} from "../illustrations";

function CreateApp() {
  return (
    <React.Fragment>
      <h1>Create your goals workspace</h1>
      <p>
        Open Sauced is a tool to help track your open source contributions. You can get started by creating a goal
        workspace below.
      </p>
      <p>A public repository name "open-sauced-goals" will be created on your GitHub account to store.</p>
      <small>
        <em>You own all your data saved while saucin.</em>
      </small>
    </React.Fragment>
  );
}

function InstallApp() {
  return (
    <React.Fragment>
      <h1>Install the GitHub App</h1>
      <p>
        GitHub Apps are the officially recommended way to integrate with GitHub because they offer much more granular
        permissions to access data.
      </p>
      <p>The Open Sauced App needs to be installed on your newly created "open-sauced-goals" public repository.</p>
      <img
        style={{textAlign: "center", width: "80%"}}
        src="https://user-images.githubusercontent.com/20134767/86527180-4a83c700-be51-11ea-8eaf-660298cf3c66.png"
      />
      <small>
        <em>The installation grants access storing note data and tracking open source contributions.</em>
      </small>
    </React.Fragment>
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
          <FlexColumn>{installReady ? <InstallApp /> : <CreateApp />}</FlexColumn>
          <Illustration alt="productive developer image" src={devProductive} />
        </SpaceBetweenTop>
      </ContextStyle>
      <br style={{marginTop: 8}} />
      {installReady ? (
        <a
          referrer="noreferrer"
          target="_blank"
          href={`https://github.com/apps/open-sauced/installations/new/permissions?target_id=${user.id}`}>
          <Button primary>Finish initializing {user.login}/open-sauced-goals</Button>
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
