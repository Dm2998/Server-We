import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get all product
export async function GET({ request, cookies }) {

    // Query data
    const product_category = await supabase
    .from('product_category')
    .select('*');

    if (product_category.error) {
        return json({
            status: product_category.status,
            error: product_category.error
        });
    }

    return json({
        data: product_category.data,
        status: product_category.status
    });
}

// Add a new product_category
export async function POST({ request, cookies }) {
    // Get data from request body
    let data = await request.json();

    // Insert data
    const loc = await supabase
    .from('category')
    .insert([data])
    .select()


    return json({
        data: loc.data
    });
}