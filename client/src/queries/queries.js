import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addABookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      genre
      id
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addABookMutation };
