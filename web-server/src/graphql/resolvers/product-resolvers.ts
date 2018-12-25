import { dataSources } from '../../datasources';
import { pubsub } from '../pubsub';

const PRODUCT_MUTATED = 'productMutated';

export default {
    Query: {
        products() {
            return dataSources.productService.getProducts();
        }
        // product(parent, args) {
        //     return dataSources.productService.getBook(args.id);
        // }
    },

    Subscription: {
        productMutated: {
            subscribe: () => pubsub.asyncIterator(PRODUCT_MUTATED)
        }
    }
};
