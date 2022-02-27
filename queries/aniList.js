import { gql } from '@apollo/client';

export const getMedia = gql`
  query ($id: Int!) {
    Media(id: $id) {
      id
      title {
        userPreferred
      }
      genres
      bannerImage
    }
  }
`;

export const getPage = gql`
  query {
    Page {
      media {
        id
        title {
          userPreferred
        }
      }
    }
  }
`;
