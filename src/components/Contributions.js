import React, {useState, useEffect} from "react";
import api from "../lib/apiGraphQL";
import Card from "./Card";
import List from "../styles/List";
import IssuesListItem from "../components/IssueListItem";
import {CardPadding} from "../styles/Card";
import {AccentLink, MicroFont} from "../styles/Typography";
import IssuesLoader from "./IssuesLoader";

function Contributions({repoName, owner, viewer}) {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const ContributionsCollectionQueryVars = (owner, repo, target) => `repo:${owner}/${repo} involves:${target}`;

    api
      .persistedInteractionsFetch({query: ContributionsCollectionQueryVars(owner, repoName, viewer)})
      .then(response => {
        const {nodes} = response.data.gitHub.search;
        setIssues(nodes);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
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
        {loading ? (
          <IssuesLoader />
        ) : (
          <List>
            {issues &&
              issues.map(issue => (
                <li key={issue.id}>
                  <a rel="noreferrer" target="_blank" href={issue.url}>
                    <IssuesListItem
                      type="contributions"
                      title={issue.title}
                      labels={issue.labels}
                      opened={issue.createdAt}
                      participants={issue.participants}
                      comments={issue.comments}
                      milestone={issue.milestone}
                    />
                  </a>
                </li>
              ))}
          </List>
        )}
      </Card>
    )
  );
}

export default Contributions;
