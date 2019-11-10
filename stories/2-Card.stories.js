import React from "react";
import Card from "../src/components/Card";
import Button, {InputButton} from "../src/styles/Button";
import {PrimaryWithText} from "./1-Button.stories";
import {CardPadding, ContextStyle, HintStyle, OnBoardStyle} from "../src/styles/Card";
import Input from "../src/styles/Input";
import Background from "../src/styles/Background";
import TextArea from "../src/styles/TextArea";
import {Flex, FlexCenter, FlexColumn, FloatLeft, IssuesColumn} from "../src/styles/Grid";
import List from "../src/styles/List";
import Avatar from "../src/styles/Avatar";
import {chevronRight, check} from "../src/icons";
import Octicon, {getIconByName} from "@primer/octicons-react";
import RepoListItem from "../src/components/RepoListItem";
import IssuesListItem from "../src/components/IssueListItem";
import DoneChecking from "../src/styles/DoneChecking";
import {done_checking} from "../src/illustrations";
import Label from "../src/styles/Label";

export default {
  title: "Cards",
};

const goal = {
  title: "webpack",
};

export const ButtonCard = () => (
  <HintStyle style={{borderColor: "transparent", minWidth: "33%", width: "33%"}}>
    <PrimaryWithText />
  </HintStyle>
);

export const ContextCard = () => (
  <ContextStyle>
    <Flex>
      <div className="context-div">
        <h1>Notes</h1>
        <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
      </div>
      <DoneChecking src={done_checking} />
    </Flex>
  </ContextStyle>
);

export const HintCard = () => (
  <React.Fragment>
    <HintStyle style={{minWidth: "33%", width: "33%"}}>
      <div className="div" style={{padding: "0 0 20px"}}>
        <h1>Hint</h1>
        <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
      </div>
      <DoneChecking style={{width: "80%"}} src={done_checking} />
    </HintStyle>
  </React.Fragment>
);

export const IssuesCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <IssuesColumn>
      <Card fitted>
        <h1 style={{padding: "20px", fontWeight: "300", color: "grey"}}>Good First Issues</h1>
        <hr width="97%" />
        <List>
          <li style={{padding: "10px 20px"}}>
            <IssuesListItem issue="placeholder" label="label" />
          </li>
          <li style={{padding: "10px 20px"}}>
            <IssuesListItem issue="placeholder" label="label" />
          </li>
          <li style={{padding: "10px 20px"}}>
            <IssuesListItem issue="placeholder" label="label" />
          </li>
          <li style={{padding: "10px 20px"}}>
            <IssuesListItem issue="placeholder" label="label" />
          </li>
          <Flex style={{margin: "20px", justifyContent: "flex-start"}}>
            <InputButton>Next</InputButton>

            <InputButton>Prev</InputButton>
          </Flex>
        </List>
      </Card>
    </IssuesColumn>
  </Background>
);

export const NewRepoCard = () => (
  <Card>
    <Flex>
      <Input className="utility-input urlForm" type="text" placeholder="vuejs/vue" />
      <Button primary onClick={() => console.log("clicked")}>
        add repo
      </Button>
    </Flex>
  </Card>
);

export const NoteCard = () => (
  <Card>
    <TextArea
      style={{minHeight: 170}}
      className="utility-input boxed-input text-box light-shadow"
      value={""}
      type="text"
      placeholder={`Type your notes for here...`}
      name="notes"
    />
    <FlexCenter>
      <Button onClick={() => console.log("clicked")}>
        <Octicon verticalAlign="middle" icon={getIconByName("pencil")} />
        Edit Notes
      </Button>
      <Button primary onClick={() => console.log("clicked")}>
        Delete
      </Button>
    </FlexCenter>
  </Card>
);

export const OnboardingCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <OnBoardStyle>
      <h4>Onboarding</h4>
      <div className="checkbox">
        <input id="agenda" type="checkbox" />
        <label htmlFor="agenda">Follow the babel community</label>
      </div>
      <div className="checkbox">
        <img src={check} alt="check" />
        <input id="agenda" type="checkbox" checked />
        <label className="checked" htmlFor="agenda">
          Onboarding
        </label>
      </div>
      <div className="checkbox">
        <input id="agenda" type="checkbox" />
        <label htmlFor="agenda">Claim first issue</label>
      </div>
    </OnBoardStyle>
  </Background>
);

export const PrimaryWithTextCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <ContextStyle>
      <div className="div" style={{minHeight: 400}}>
        <h1 style={{fontWeight: "bold", color: "black"}}>Get Started</h1>
        <p style={{color: "black"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Facilisis leo vel fringilla est. Orci a scelerisque purus semper eget duis. Dolor sit amet
          consectetur adipiscing elit duis tristique. Amet venenatis urna cursus eget nunc scelerisque viverra mauris
          in. Sapien eget mi proin sed libero enim sed faucibus turpis. Non nisi est sit amet facilisis magna. Arcu
          cursus vitae congue mauris rhoncus. Augue mauris augue neque gravida in fermentum et sollicitudin. Malesuada
          fames ac turpis egestas sed tempus urna et pharetra. Leo urna molestie at elementum eu facilisis sed odio
          morbi.
        </p>
        <br />
        <p style={{color: "black"}}>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
      </div>
      <Button primary onClick={() => console.log("create goals!")}>
        Create Goals
      </Button>
    </ContextStyle>
  </Background>
);

export const RepoCard = () => (
  <Card>
    <RepoListItem stars={138} goal={goal} />
  </Card>
);

export const RepoCardList = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card fitted>
      <List>
        <li>
          <RepoListItem stars={138} goal={goal} />
        </li>
        <li>
          <RepoListItem stars={381} goal={goal} />
        </li>
      </List>
    </Card>
  </Background>
);

export const RepoListWithForm = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card fitted>
      <CardPadding>
        <Flex>
          <Input type="text" placeholder="vuejs/vue" />
          <InputButton className="input" primary onClick={() => console.log("clicked")}>
            add repo
          </InputButton>
        </Flex>
      </CardPadding>
      <List>
        <li>
          <RepoListItem stars={138} goal={goal} />
        </li>
        <li>
          <RepoListItem stars={381} goal={goal} />
        </li>
      </List>
    </Card>
  </Background>
);

export const RepoDetailsCard = () => {
  //this logic grabs the icons and puts the icons and text into an arr
  //of objects to be mapped over
  const repoDetailDiv = () => {
    const octoface = getIconByName("octoface");
    const star = getIconByName("star");
    const contributions = getIconByName("git-commit");
    const openContributions = getIconByName("repo-pull");

    const detailInfo = [
      {icon: octoface, text: "120 contributors"},
      {icon: star, text: "14K stars"},
      {icon: contributions, text: "0 contributions"},
      {icon: openContributions, text: "0 open contributions"},
    ];
    //map over arr of objects from line 192
    return detailInfo.map(item => {
      //retain an indiv div with just the contributors, stars, contributions and open
      return (
        <FlexCenter style={{width: "100%", flexWrap: "wrap"}}>
          <div style={{width: "30px", color: "grey"}}>
            <Octicon verticalAlign="middle" icon={item.icon} />
          </div>
          <div style={{fontSize: "15px", color: "grey"}}>{item.text}</div>
        </FlexCenter>
      );
    });
  };
  //this is the render for the actual component
  return (
    <Background style={{height: 1024, padding: "10px"}}>
      <Card>
        <Flex style={{justifyContent: "space-around"}}>
          {/* TODO: un-hard code this...
          funcs are not appropriate React children*/}
          <FlexColumn>{repoDetailDiv()}</FlexColumn>
          <FlexColumn>{repoDetailDiv()}</FlexColumn>
          <FlexColumn>{repoDetailDiv()}</FlexColumn>
        </Flex>
      </Card>
    </Background>
  );
};
