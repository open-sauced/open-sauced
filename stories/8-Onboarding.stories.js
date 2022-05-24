import React, {useState} from "react";
import Button, {IconButton} from "../src/styles/Button";
import Illustration from "../src/styles/Illustration";
import {ContextStyle} from "../src/styles/Card";
import {SpaceBetweenTop, SpaceBetween} from "../src/styles/Grid";
import {devProductive} from "../src/illustrations";
import Cards from "../src/components/Card";
import {CreateGoalsContainer, OnBoardingText} from "../src/styles/Container";
import {Tooltip, TooltipTrigger} from "@radix-ui/react-tooltip";
import {TooltipContainer, TooltipArrowComponent} from "../src/styles/Tooltip";
import {help} from "../src/icons";
import {appInstall} from "../src/images";
import { CreateGoalsRepoNav } from "../src/styles/Header";
import RepositoryAvatar from "../src/styles/RepositoryAvatar";
import {diary} from "../src/illustrations";

export default {
    title: "Onboardring"
};

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

 export function OnboardingFlow() {
  const [selectedRepo, setSelectedRepo] = useState(0);
  const [installReady, setInstallReady] = useState(false);
  const [databaseCreated, setDatabaseCreated] = useState(false);
  const _handleRepoCreation = () => {
    setInstallReady(prevState => true);
  };
  const _handleDatabaseCreation = () => {
    setDatabaseCreated(prevState => true);
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
            <Button primary minWidth={175} maxWidth={175} onClick={_handleRepoCreation} disabled={installReady}>
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
              target="_blank">
              <Button primary minWidth={175} maxWidth={175} disabled={!installReady} onClick={_handleDatabaseCreation}>Create database</Button>
            </a>
          </SpaceBetween>
        </Cards>
        <Cards disabled={!databaseCreated}>
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
                      {`${repo.repoOwner}/${repo.repoName}`}
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
                    <Button primary minWidth={175} >Add Repo"</Button>
                  </div>
                </div>
                <Illustration className="productive-developer" alt="productive developer image" src={diary} />
              </SpaceBetweenTop>
            </>
          )}
        </Cards>
      </ContextStyle>
    </React.Fragment>
  );
}
