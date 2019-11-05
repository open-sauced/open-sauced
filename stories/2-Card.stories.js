import React from "react";
import Card from "../src/components/Card";
import Button, {InputButton} from "../src/styles/Button";
import {CardPadding} from "../src/styles/Card";
import Input from "../src/styles/Input";
import Background from "../src/styles/Background";
import TextArea from "../src/styles/TextArea";
import {Flex, FlexCenter, FloatLeft} from "../src/styles/Grid";
import List from "../src/styles/List";
import Avatar from "../src/styles/Avatar";
import {chevronRight} from "../src/icons";
import Octicon, {getIconByName} from "@primer/octicons-react";
import RepoListItem from "../src/components/RepoListItem";

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
