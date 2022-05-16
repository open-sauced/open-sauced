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

export default {
    title: "Onboardring"
};

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
  const [installReady, setInstallReady] = useState(false);
  const _handleRepoCreation = () => {
    setInstallReady(prevState => true);
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
              target="_blank">
              <Button primary minWidth={175} maxWidth={175} disabled={!installReady}>Create database</Button>
            </a>
          </SpaceBetween>
        </Cards>
        {/* TODO: issue #1428
        
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
