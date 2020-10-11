import { gql } from "@apollo/client";

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

export { GET_AUTHORS, GET_BOOKS };
