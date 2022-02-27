import { gql } from '@apollo/client';

export const getMedia = gql`
  query ($id: Int!) {
    Media(id: $id) {
      id
      genres
    }
  }
`;
