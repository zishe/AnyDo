import { dataSources } from '../../datasources';
import { pubsub } from '../pubsub';

export default {
    Query: {
        categories() {
            return dataSources.categoryService.getCategories();
        }
        // category(parent, args) {
        //     return dataSources.categoryService.getBook(args.id);
        // }
    }

    // Subscription: {
    //     categoryMutated: {
    //         subscribe: () => pubsub.asyncIterator(PRODUCT_MUTATED)
    //     }
    // }
};
