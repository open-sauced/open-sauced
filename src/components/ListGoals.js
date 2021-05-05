import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import {Select} from "../styles/Select";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/Card";
import List from "../styles/List";
import {merge} from "lodash";
import sortBy from "lodash/sortBy";
import Search from "../styles/Search";
import {EmptyPlaceholder} from "../styles/EmptyPlaceholder";
import {SearchIcon} from "@primer/octicons-react";
import {fontSize} from "../styles/variables";

function ListGoals({goals, data}) {
  const goalsWithData = merge(goals.nodes, data);
  const [listGoals, setGoals] = useState(goalsWithData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (sortType) => {
    switch (sortType) {
      case "a_z":
        setGoals(sortBy(goalsWithData, "full_name"));
        break;
      case "z_a":
        setGoals(sortBy(goalsWithData, "full_name").reverse());
        break;
      case "most_stars":
        setGoals(sortBy(goalsWithData, "stargazers_count").reverse());
        break;
      case "fewest_stars":
        setGoals(sortBy(goalsWithData, "stargazers_count"));
        break;
      default:
        setGoals(goalsWithData);
    }
  };

  const filteredSearch = listGoals.filter(
    goals =>
      goals.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Search
        placeholder="Search"
        aria-label="search"
        type="search"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Select>
        <label htmlFor="sort">Sort:</label>
        <select id="sort" onChange={e => handleSort(e.currentTarget.value)} style={{fontSize: fontSize.small}}>
          <option value="none">None</option>
          <option value="a_z">A to Z</option>
          <option value="z_a">Z to A</option>
          <option value="most_stars">Most Stars</option>
          <option value="fewest_stars">Fewest Stars</option>
        </select>
      </Select>
      <Card fitted>
        <List>
          {goalsWithData &&
          filteredSearch.map(goal => (
            <li key={goal.id}>
              <Link
                to={{
                  pathname: `/repos/${goal.full_name.replace(/\s+/g, "")}/${goal.number}/`,
                }}>
                <RepoListItem goal={goal} stars={goal.stargazers_count} />
              </Link>
            </li>
          ))}
        </List>
        {filteredSearch.length === 0 && (
          <EmptyPlaceholder>
            <div style={{color: "grey"}}>
              <SearchIcon size="large" verticalAlign="middle" />
            </div>
            <div className="helper">
              No result found for <b>'{searchTerm}'</b>
            </div>
          </EmptyPlaceholder>
        )}
      </Card>
    </Container>
  );
}

export default ListGoals;
