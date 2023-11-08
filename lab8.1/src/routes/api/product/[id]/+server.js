import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get products for a category by category_id
export async function GET({ params, request, cookies }) {

    let prod_id = 0;
    if (params.id && !isNaN(parseInt(params.id))) {
        prod_id = parseInt(params.id)
    }

    if (prod_id > 0) {

        const product = await supabase
        .from('product')
        .select('*')
        .eq('id', prod_id)

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
    return json({
        status: 400,
        error: 'Bad Request'
    });
}