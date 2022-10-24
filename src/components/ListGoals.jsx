import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import {Select} from "../styles/Select";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/Card";
import List from "../styles/List";
import Search from "../styles/Search";
import {EmptyPlaceholder} from "../styles/EmptyPlaceholder";
import {SearchIcon} from "@primer/octicons-react";
import {fontSize} from "../styles/variables";

function sortBy(data, field) {
  data.sort(function(a, b) {
    if (!a[field] || !b[field]) return 0;
    return a[field] < b[field] ? -1 : (b[field] < a[field] ? 1 : 0);
  });
  return data;
}

function merge(goals, additionalData) {
  return goals.map(item => {
    const toAdd = additionalData.find(d => d["full_name"] === item["full_name"]) || {};
    return {...item, ...toAdd};
  });
}

function ListGoals({goals, data}) {
  const goalsWithData = merge(goals.nodes, data || []).filter((value, index, self) => self.findIndex( goal => goal.full_name === value.full_name) === index).map((e) => ({
    ...e,
    full_name_lc: e.full_name.toLowerCase()
  }));

  const [listGoals, setGoals] = useState(goalsWithData);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const goalsWithData = merge(goals.nodes, data || []).filter((value, index, self) => self.findIndex( goal => goal.full_name === value.full_name) === index).map((e) => ({
      ...e,
      full_name_lc: e.full_name.toLowerCase()
    }));
    setGoals(goalsWithData);
  }, [goals, data]);
  const handleSort = (sortType) => {
    switch (sortType) {
      case "a_z":
        setGoals(sortBy(goalsWithData, "full_name_lc"));
        break;
      case "z_a":
        setGoals(sortBy(goalsWithData, "full_name_lc").reverse());
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

  const filteredSearch = listGoals.filter((goals) =>
    goals.full_name_lc.includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Search
        placeholder="Search"
        aria-label="search"
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select>
        <label htmlFor="sort">Sort:</label>
        <select
          id="sort"
          onChange={(e) => handleSort(e.currentTarget.value)}
          style={{fontSize: fontSize.small}}
        >
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
              <li key={goal.full_name}>
                <Link
                  to={{
                    pathname: `/repos/${goal.full_name.replace(/\s+/g, "")}/`,
                  }}
                >
                  <RepoListItem goal={goal} stars={goal.stargazers_count} />
                </Link>
              </li>
            ))}
        </List>
        {filteredSearch.length === 0 && (
          <EmptyPlaceholder>
            <div style={{color: "grey"}}>
              <SearchIcon size="large" verticalAlign="middle" className="svg" />
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
