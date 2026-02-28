import {createUserTable } from '../models/users.model.js';
import {createOrderItemTable} from '../models/orderItems.model.js';
import {createOrdersTable} from '../models/orders.model.js';
import {createPaymentsTable} from '../models/payments.model.js';
import {createProductsTable} from '../models/product.model.js';
import {createProductReviewsTable} from '../models/productReviews.model.js';
import {createShippingInfoTable} from '../models/shippingInfo.model.js';


export const createTables = async () => {
    try {
        await createUserTable();
        await createOrdersTable();
        await createPaymentsTable();
        await createProductReviewsTable();
        await createProductsTable();
        await createShippingInfoTable();
        await createOrderItemTable();

        console.log("all tables are created successfully")
        
    } catch (error) {
        console.error("error while creating tables", error);
    }
}