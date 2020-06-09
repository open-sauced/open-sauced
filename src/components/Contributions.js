import React, {useState, useEffect} from "react";
import api from "../lib/apiGraphQL";
import Card from "./Card";
import List from "../styles/List";
import IssuesListItem from "../components/IssueListItem";
import {CardPadding} from "../styles/Card";
import {AccentLink, MicroFont} from "../styles/Typography";
import {Spinner} from "../styles/Spinner";

function Contributions({repoName, owner}) {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.fetchRepoInteractions(owner, repoName).then(response => {
      const {data} = response.data.gitHub.repository.issues;
      setIssues(data);
      setLoading(false);
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
        <List>
          {loading ? (
            <Spinner />
          ) : (
            issues &&
            issues.map(issue => (
              <li key={issue.node.id}>
                <a rel="noreferrer" target="_blank" href={issue.node.url}>
                  <IssuesListItem
                    type="contributions"
                    title={issue.node.title}
                    labels={issue.node.labels}
                    opened={issue.node.createdAt}
                  />
                </a>
              </li>
            ))
          )}
        </List>
      </Card>
    )
  );
}

export default Contributions;
