import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query GetProducts {
        categories {
            id
            name
            description
        }
    }
`;
