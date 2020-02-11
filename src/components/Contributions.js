import React, {useState, useEffect} from "react";
import api from "../lib/apiGraphQL";
import Card from "./Card";
import List from "../styles/List";
import IssuesListItem from "../components/IssueListItem";
import {CardPadding} from "../styles/Card";
import {AccentLink, MicroFont} from "../styles/Typography";

function Contributions({repoName, owner}) {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    api.fetchRepoInteractions(owner, repoName).then(response => {
      const {data} = response.data.gitHub.repository.issues;

      setIssues(data);
    });
  }, []);

  return (
    owner && (
      <Card fitted>
        <CardPadding>
          <em>Contributions</em>
          <MicroFont>
            <AccentLink href={`https://github.com/${owner}/${repoName}/contribute`}>make new contributions.</AccentLink>
          </MicroFont>
        </CardPadding>
        <hr width="100%" />
        <List>
          {issues &&
            issues.map(issue => (
              <li key={issue.node.id}>
                <a target="_blank" href={issue.node.url}>
                  <IssuesListItem title={issue.node.title} labels={issue.node.labels} />
                </a>
              </li>
            ))}
        </List>
      </Card>
    )
  );
}

export default Contributions;
