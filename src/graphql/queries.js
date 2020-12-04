import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerAvatarUrl
          fullName
          description
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          language
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;