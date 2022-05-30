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
import RepositoryAvatar from "../styles/RepositoryAvatar";
import {diary} from "../illustrations";
import {help} from "../icons";
import { CreateGoalsRepoNav } from "../styles/Header";

const repoInfo = [
  {
    repoOwner: "open-sauced",
    repoName: "open-sauced",
    repoDescription: "This is a project to identify your next open source contribution."
  },
  {
    repoOwner: "npm",
    repoName: "cli",
    repoDescription: "the package manager for JavaScript"
  },
  {
    repoOwner: "tailwindlabs",
    repoName: "tailwindcss",
    repoDescription: "A utility-first CSS framework for rapid UI development."
  },
];

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

function CreateGoals({installNeeded, databaseCreated, goalsId, onGoalAdded, user, onRepoCreation}) {
  const [selectedRepo, setSelectedRepo] = useState(0);
  const [repoAdded, setRepoAdded] = useState(false);
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

  const _handleGoalCreation = async( repoUrl ) => {
    setRepoAdded(true);
    api
      .createGoal(goalsId, repoUrl, null)
      .then(response => {
        onGoalAdded(response.data.gitHub.createIssue.issue);
      })
      .catch(e => {
        setRepoAdded(false);
        console.error(e)
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
        <Cards disabled={installReady || databaseCreated}>
          <SpaceBetween>
            <OnBoardingText>
              <h1>1</h1>
              <p>Let's sync Open Sauced with your GitHub Repos</p>
            </OnBoardingText>
            <Button primary minWidth={175} maxWidth={175} onClick={_handleRepoCreation} disabled={installReady || databaseCreated}>
              Sync Repos
            </Button>
          </SpaceBetween>
        </Cards>
        <Cards disabled={!installReady || databaseCreated}>
          <SpaceBetween>
            <OnBoardingText>
              <h1>2</h1>
              <p>Now let's create the Open Sauced database on GitHub</p>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild disabled={!installReady || databaseCreated}>
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
        
        <Cards disabled={!databaseCreated || repoAdded}>
          <SpaceBetween>
            <OnBoardingText>
              <h1>3</h1>
              <p>And finally, it's time to follow some repos</p>
            </OnBoardingText>
          </SpaceBetween>
          {databaseCreated && (
            <>
              <CreateGoalsRepoNav>
                {
                  repoInfo.map((repo, index) => 
                    <Button key={`repoNav${index + 1}`} onClick={() => setSelectedRepo(index)}>
                    {`${repo.repoOwner} / ${repo.repoName}`}
                    </Button>
                )}
              </CreateGoalsRepoNav>
              <SpaceBetweenTop>
                <div>
                  <a style={{textDecoration: "none"}} href={`https://github.com/${repoInfo[selectedRepo].repoOwner}/${repoInfo[selectedRepo].repoName}`} rel="noreferrer" target="_blank">
                    <h1>
                      <RepositoryAvatar alt="avatar" src={`https://avatars.githubusercontent.com/${repoInfo[selectedRepo].repoOwner}`} />
                      {`${repoInfo[selectedRepo].repoOwner} / ${repoInfo[selectedRepo].repoName}`}
                    </h1>
                  </a>
                    <p>{repoInfo[selectedRepo].repoDescription}</p>
                  <small>
                    <em>
                      <a href="https://opensource.guide/how-to-contribute/" rel="noreferrer" target="_blank">
                        Learn how to contribute to open source projects
                      </a>
                    </em>
                  </small>
                  <div style={{ paddingTop: 30 }}>
                    <Button primary minWidth={175} disabled={repoAdded} onClick={() => _handleGoalCreation(`${repoInfo[selectedRepo].repoOwner}/${repoInfo[selectedRepo].repoName}`)}>{repoAdded ? "Repo added" : "Add Repo"}</Button>
                  </div>
                </div>
                <Illustration className="productive-developer" alt="Done checking add repo" src={diary} />
              </SpaceBetweenTop>
            </>
          )}
        </Cards>
      </ContextStyle>
    </React.Fragment>
  );
}

export default CreateGoals;
