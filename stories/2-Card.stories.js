import React from "react";
import Card from "../src/components/Card";
import Button, {InputButton} from "../src/styles/Button";
import {PrimaryWithText} from "./1-Button.stories";
import {CardPadding, ContextStyle, HintStyle} from "../src/styles/Card";
import Input from "../src/styles/Input";
import Background from "../src/styles/Background";
import TextArea from "../src/styles/TextArea";
import {Flex, FlexCenter, FloatLeft} from "../src/styles/Grid";
import List from "../src/styles/List";
import Avatar from "../src/styles/Avatar";
import {chevronRight} from "../src/icons";
import Octicon, {getIconByName} from "@primer/octicons-react";
import RepoListItem from "../src/components/RepoListItem";
import DoneChecking from "../src/styles/DoneChecking";
import { done_checking } from "../src/illustrations";

export default {
  title: "Cards",
};

const goal = {
  title: "webpack",
};

export const Sample = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card>
      <div style={{minHeight: 35}}>
        <h1>Sample Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </Card>
  </Background>
);

export const Fitted = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card fitted>
      <div style={{minHeight: 35}}>
        <h1>Sample Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </Card>
  </Background>
);

export const RepoCard = () => (
  <Card>
    <RepoListItem stars={138} goal={goal} />
  </Card>
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

export const ContextCard = () => (
  <ContextStyle>
    <Flex>
      <div className="context-div">
        <h1>What is onboarding?</h1>
        <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
      </div>
      <DoneChecking src={done_checking} />
    </Flex>
  </ContextStyle>
);

export const HintCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <React.Fragment>
      <HintStyle style={{minWidth: "15%", width: "15%"}}>
        <div className="div" style={{padding: "0 0 20px"}}>
          <h1>Hint</h1>
          <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
        </div>
        <DoneChecking style={{width: "80%"}} src={done_checking}/>
      </HintStyle>
      <HintStyle style={{border: "none", minWidth: "15.5%", width: "15.5%"}}>
        <PrimaryWithText />
      </HintStyle>
    </React.Fragment>
  </Background>
);

export const PrimaryWithTextCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <ContextStyle>
      <div className="div" style={{minHeight: 400}}>
        <h1 style={{fontWeight: "bold", color: "black"}}>Get Started</h1>
        <p style={{color: "black"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis leo vel fringilla est. Orci a scelerisque purus semper eget duis. Dolor sit amet consectetur adipiscing elit duis tristique. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Sapien eget mi proin sed libero enim sed faucibus turpis. Non nisi est sit amet facilisis magna. Arcu cursus vitae congue mauris rhoncus. Augue mauris augue neque gravida in fermentum et sollicitudin. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Leo urna molestie at elementum eu facilisis sed odio morbi.
        </p>
        <br/>
        <p style={{color: "black"}}>
abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</        p>
      </div>
      <Button primary onClick={() => console.log("create goals!")}>Create Goals</Button>
    </ContextStyle>
  </Background>
);

