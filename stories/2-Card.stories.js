import React from "react";
import Card from "../src/components/Card";
import Button, {InputButton} from "../src/styles/Button";
import {AccentLink, TinyFont, MicroFont} from "../src/styles/Typography";
import {PrimaryWithText} from "./1-Button.stories";
import {CardPadding, ContextStyle, HintStyle, OnBoardStyle} from "../src/styles/Card";
import Input from "../src/styles/Input";
import Background from "../src/styles/Background";
import TextArea from "../src/styles/TextArea";
import {Flex, FlexCenter, FlexColumn, FloatLeft, IssuesColumn, SpaceAround, SpaceBetween} from "../src/styles/Grid";
import List from "../src/styles/List";
import Avatar from "../src/styles/Avatar";
import {chevronRight, check} from "../src/icons";
import Octicon, {getIconByName} from "@primer/octicons-react";
import RepoListItem from "../src/components/RepoListItem";
import IssuesListItem from "../src/components/IssueListItem";
import DetailInfo from "../src/components/DetailInfo";
import Illustration from "../src/styles/Illustration";
import {doneChecking} from "../src/illustrations";
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
    <SpaceBetween>
      <FlexColumn>
        <h1>Context</h1>
        <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
      </FlexColumn>
      <Illustration src={doneChecking} />
    </SpaceBetween>
  </ContextStyle>
);

export const HintCard = () => (
  <React.Fragment>
    <HintStyle style={{minWidth: "33%", width: "33%"}}>
      <h1>Hint</h1>
      <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
      <Illustration style={{width: "80%"}} src={doneChecking} />
    </HintStyle>
  </React.Fragment>
);

const data = {title: "Placeholder text", labels: {data: []}};
export const ContributionsCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <IssuesColumn style={{width: 275}}>
      <Card fitted>
        <CardPadding>
          <em>Contributions</em>
          <MicroFont>
            <AccentLink href="#">make new contributions.</AccentLink>
          </MicroFont>
        </CardPadding>
        <hr width="100%"/>
        <List>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
        </List>
      </Card>
    </IssuesColumn>
  </Background>
);

export const IssuesCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <IssuesColumn style={{width: 600}}>
      <Card fitted>
        <CardPadding>
          <h1>Good First Issues</h1>
          <hr width="100%" />
        </CardPadding>
        <List>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
          <li>
            <IssuesListItem title={data.title} labels={data.labels} />
          </li>
          <CardPadding>
            <FlexCenter>
              <InputButton>Next</InputButton>
              <InputButton>Prev</InputButton>
            </FlexCenter>
          </CardPadding>
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
      placeholder={"Type your notes for here..."}
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
      <React.Fragment>
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
      </React.Fragment>
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
    const octoface = "octoface";
    const star = "star";
    const contributions = "git-commit";
    const openContributions = "repo-pull";

    const detailInfo = [
      {icon: octoface, text: "120 contributors"},
      {icon: star, text: "14K stars"},
      {icon: contributions, text: "0 contributions"},
      {icon: openContributions, text: "0 open contributions"},
    ];
    //map over arr of objects from line 192
    return detailInfo.map(item => {
      //retain an indiv div with just the contributors, stars, contributions and open
      return <DetailInfo icon={item.icon} text={item.text} />;
    });
  };
  //this is the render for the actual component
  return (
    <Background style={{height: 1024, padding: "10px"}}>
      <Card>
        <SpaceAround>
          {/* TODO: un-hard code this...
          funcs are not appropriate React children*/}
          <FlexColumn>{repoDetailDiv()}</FlexColumn>
          <FlexColumn>{repoDetailDiv()}</FlexColumn>
          <FlexColumn>{repoDetailDiv()}</FlexColumn>
        </SpaceAround>
      </Card>
    </Background>
  );
};
