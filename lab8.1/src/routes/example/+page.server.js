// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Load function
/** @type {import('./$types').PageServerLoad} */
export async function load( { fetch, params }) {
    // Query the product table - see Supabase docs for examples: 
    // get product data, any error, and http status


    const product = await supabase
        .from('product')
        .select('*');

    const categories = await supabase
        .from('category')
        .select('*');

    // return data
    if (product && categories) {
        return {
            product: product.data,
            categories: categories.data
        }
    }

    // in case of error - return status code amd mesage
    return {
        error: 'error occured'
    };
}
