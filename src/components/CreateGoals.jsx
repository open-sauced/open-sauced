import React, {useState} from "react";
import Button, {IconButton} from "../styles/Button";
import Illustration from "../styles/Illustration";
import {ContextStyle} from "../styles/Card";
import {SpaceBetweenTop, SpaceBetween} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {goalsReducer} from "../lib/reducers";
import {devProductive} from "../illustrations";
import {appInstall} from "../images";
import Cards from "./Card";
import {CreateGoalsContainer, OnBoardingText} from "../styles/Container";
import {Tooltip, TooltipTrigger} from "@radix-ui/react-tooltip";
import {TooltipContainer, TooltipArrowComponent} from "../styles/Tooltip";
import {capturePostHogAnalytics} from "../lib/analytics";
import {help} from "../icons";

function CreateApp() {
  return (
    <>
      <CreateGoalsContainer>
        <h1>Create your goals workspace</h1>
        <p>
          Open Sauced is a tool to help track your open source contributions. You can get started by creating a goal
          workspace below.
        </p>
        <p>A public repository named "open-sauced-goals" will be created on your GitHub account to store data about your goals.</p>
        <small>
          <em>You own all your data saved while saucin.</em>
        </small>
      </CreateGoalsContainer>
      <Illustration className="productive-developer" alt="productive developer image" src={devProductive} />
    </>
  );
}

function CreateGoals({installNeeded, user, onRepoCreation}) {
  const [installReady, setInstallReady] = useState(installNeeded);
  const _handleRepoCreation = () => {
    capturePostHogAnalytics('Onboarding Flow', 'repoCreationBtn', 'clicked');

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
          </SpaceBetween>
        </SpaceBetweenTop>
        <Cards disabled={installReady}>
          <SpaceBetween>
            <OnBoardingText>
              <h1>1</h1>
              <p>Let's sync Open Sauced with your GitHub Repos</p>
            </OnBoardingText>
            <Button primary minWidth={175} maxWidth={175} onClick={_handleRepoCreation} disabled={installReady}>
              Sync Repos
            </Button>
          </SpaceBetween>
        </Cards>
        <Cards disabled={!installReady}>
          <SpaceBetween>
            <OnBoardingText>
              <h1>2</h1>
              <p>Now let's create the Open Sauced database on GitHub</p>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <IconButton>
                    <img className="svg" alt="tool-tip" src={help} />
                  </IconButton>
                </TooltipTrigger>
                <TooltipContainer side="top" sideOffset={5}>
                  <p>Please change these settings in the new window/tab</p>
                  <img className="app-install" alt="app install guide" src={appInstall} />
                  <TooltipArrowComponent />
                </TooltipContainer>
              </Tooltip>
            </OnBoardingText>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://github.com/apps/open-sauced/installations/new/permissions?target_id=${user && user.id}`}>
              <Button
                primary minWidth={175}
                maxWidth={175}
                disabled={!installReady}
                onClick={() => capturePostHogAnalytics('Onboarding Flow', 'databaseCreationbtn', 'clicked')}>
                Create database
              </Button>
            </a>
          </SpaceBetween>
        </Cards>
        {/* TODO: This is the beginning of the implementation to solve issue #1428 in open-sauced
            https://github.com/open-sauced/open-sauced/issues/1428
        
        <Cards disabled={true}>
          <SpaceBetween>
            <OnBoardingText>
              <h1>3</h1>
              <p>And finally, it's time to follow some repos</p>
            </OnBoardingText>
              <Button primary minWidth={175} disabled={true}>Add Repos</Button>
          </SpaceBetween>
        </Cards> */}
      </ContextStyle>
    </React.Fragment>
  );
}

export default CreateGoals;
