import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            id
            name
            description
            image
        }
    }
`;
