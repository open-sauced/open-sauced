import { graphql, GraphQLString, GraphQLInt } from 'graphql';
import { objectType, enumType, schemaFrom, listOf } from 'graphql-schema';
import request from 'promisingagent';

const repositorySortEnum = enumType('RepositorySort')
  .value('CREATED', 'created')
  .value('UPDATED', 'updated')
  .value('PUSHED', 'pushed')
  .value('FULL_NAME', 'full_name')
  .end();

const userType = objectType('User')
  .field('id', GraphQLString)
  .field('name', GraphQLString)
  .field('login', GraphQLString)
  .field('location', GraphQLString)
  .field('repositories', listOf(repositoryType))
    .arg('first', GraphQLInt)
    .arg('orderby', repositorySortEnum)
    .resolve((user, {first, orderby}) => fetchRepositoriesFor(user.name, first, orderby))
  .end();

const repositoryType = objectType('Repository')
  .field('id', GraphQLString)
  .field('name', GraphQLString)
  .field('owner', () => userType)
  .field('description', GraphQLString)
  .end();

const queryType = objectType('Query')
  .field('user', userType)
    .arg('name', GraphQLString)
    .resolve((root, {name}) => fetchUser(name))
  .end();

const query = `
{
  repositoryOwner(login: "facebook") {
    repository(name: "react") {
      name
      url
      owner {
        login
        repositories {
          totalCount
        }
      }  
      description
      forks {
        totalCount
      }
      issues {
        totalCount
      }
      stargazers {
        totalCount
      }
    }
  }
}
`;

export default function() {
  graphql(schemaFrom(queryType), query).then(result => {
    console.log(JSON.stringify(result));
  });
}

function fetchUser(name) {
  return request
    .get(`https://api.github.com/users/${name}`)
    .end().then(result => {
      return result.body;
    });
}

function fetchRepositoriesFor(name, first, orderby) {
  return request
    .get(`https://api.github.com/users/${name}/repos?per_page=${first}&sort=${orderby}`)
    .end().then(result => {
      return result.body;
    });
}
