import { gql } from 'apollo-boost';

const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    language
    createdAt
  }
`;

const REVIEWS = gql`
  fragment REVIEWS on ReviewConnection {
    edges {
      node {
        id
        text
        rating
        createdAt
        repositoryId
        user {
          id
          username
        }
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      totalCount
      hasNextPage
    }
  }`;

export const GET_REPOSITORIES = gql`
  query Repositories(
    $first: Int, 
    $after: String, 
    $searchKeyword: String, 
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection
  ) {
    repositories(
      first: $first, 
      after: $after, 
      searchKeyword: $searchKeyword, 
      orderBy: $orderBy, 
      orderDirection: $orderDirection
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      url
      ...RepositoryDetails
      reviews(first: $first, after: $after) {
        ...REVIEWS
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEWS}
`;

export const AUTHORIZED_USER = gql`
  query AuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        ...REVIEWS
        edges {
          node {
            repository {
              fullName
            }
          }
        }
      }
    }
  }
  ${REVIEWS}
`;