import React from "react";
import Card from "../src/components/Card";
import Button, {InputButton} from "../src/styles/Button";
import {AccentLink, MicroFont, SubtleLink} from "../src/styles/Typography";
import {PrimaryWithText} from "./1-Button.stories";
import {CardPadding, CardHeader, ContextStyle, HintStyle, DropdownMenuCard} from "../src/styles/Card";
import Input from "../src/styles/Input";
import {Container} from "../src/styles/ListItem";
import Search from "../src/styles/Search";
import {Select} from "../src/styles/Select";
import Background from "../src/styles/Background";
import TextArea from "../src/styles/TextArea";
import {Flex, FlexHeader, FlexCenter, FlexColumn, IssuesColumn, SpaceBetween} from "../src/styles/Grid";
import List from "../src/styles/List";
import {PencilIcon} from "@primer/octicons-react";
import RepoListItem from "../src/components/RepoListItem";
import IssuesListItem from "../src/components/IssueListItem";
import RecommendedRepoItem from "../src/components/RecommendedRepoItem";
import DetailInfo from "../src/components/DetailInfo";
import Illustration from "../src/styles/Illustration";
import {doneChecking} from "../src/illustrations";

export default {
  title: "Cards",
};

const goal = {
  title: "webpack",
  full_name: "open-sauced/open-sauced"
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

export const DropdownMenu = () => (
  <DropdownMenuCard>
    <li>
      <SubtleLink href="#" className="menu-link">OpenSaucedUser</SubtleLink>
    </li>
    <li>
      <SubtleLink href="#" className="menu-link">v0.01</SubtleLink>
    </li>
    <li>
      <SubtleLink href="#"className="menu-link">Logout</SubtleLink>
    </li>
  </DropdownMenuCard>
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
        <CardHeader>
          <FlexHeader>
            <h1>Issues</h1>
            <Button primary>
              good first issues
            </Button>

          </FlexHeader>
        </CardHeader>
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
        add
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
        <PencilIcon verticalAlign="middle" />
        Edit Notes
      </Button>
      <Button primary onClick={() => console.log("clicked")}>
        Delete
      </Button>
    </FlexCenter>
  </Card>
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
      <Container>
        <CardPadding>
          <Search
            placeholder="Search"
            aria-label="search"
            type="search"
          />
          <Select>
            <label htmlFor="sort">Sort:</label>
            <select id="sort" >
              <option value="none">None</option>
              <option value="a_z">A to Z</option>
              <option value="z_a">Z to A</option>
              <option value="most_stars">Most Stars</option>
              <option value="fewest_stars">Fewest Stars</option>
            </select>
          </Select>
        </CardPadding>
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
      </Container>
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
            add
          </InputButton>
        </Flex>
      </CardPadding>
      <Container>
        <Search
          placeholder="Search"
          aria-label="search"
          type="search"
        />
        <Select>
          <label htmlFor="sort">Sort:</label>
          <select id="sort" >
            <option value="none">None</option>
            <option value="a_z">A to Z</option>
            <option value="z_a">Z to A</option>
            <option value="most_stars">Most Stars</option>
            <option value="fewest_stars">Fewest Stars</option>
          </select>
        </Select>
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
      </Container>
    </Card>
  </Background>
);

export const RepoDetailsCard = () => {
  return (
    <Background style={{height: 1024, padding: "10px"}}>
      <Flex>
        <Card>
          <DetailInfo text={"30 issues"} icon="IssueOpenedIcon" />
          <DetailInfo text={"3 forks"} icon="RepoForkedIcon" />
          <DetailInfo text={"8 stars"} icon="StarIcon" />
          <DetailInfo text={"Other"} icon="LawIcon" />
        </Card>
      </Flex>
    </Background>
  );
};

export const RecommendedRepoItemCard = () => (
  <Background style={{height: 600, padding: "10px"}}>
    <Card>
      <RecommendedRepoItem key={goal.full_name} goal={goal} validateGoalToAdd={() => true} onGoalAdded={() => console.log("Goal 1 Added")} goalsId={null} />
      <RecommendedRepoItem key={goal.full_name} goal={goal} validateGoalToAdd={() => true} onGoalAdded={() => console.log("Goal 2 Added")} goalsId={null} />
    </Card>
  </Background>
);
