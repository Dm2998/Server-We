import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get all product
export async function GET({ request, cookies }) {

    // Query data
    const product = await supabase
    .from('product')
    .select('*');

    if (product.error) {
        return json({
            status: product.status,
            error: product.error
        });
    }

    return json({
        data: product.data,
        status: product.status
    });
}

// Add a new product
export async function POST({ request, cookies }) {
    // Get data from request body
    let data = await request.json();

    // Insert data
    const prod = await supabase
    .from('product')
    .insert([data])
    .select()


    return json({
        data: prod.data
    });
}