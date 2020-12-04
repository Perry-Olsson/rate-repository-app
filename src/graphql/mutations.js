import { gql } from 'apollo-boost';

const AUTHORIZE = gql`
  mutation Authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export default AUTHORIZE;