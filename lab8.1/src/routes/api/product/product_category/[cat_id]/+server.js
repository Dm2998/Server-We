import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get product for a product_category by category_id
export async function GET({ params, request, cookies }) {

    let cat = 0;
    if (params.cat_id && !isNaN(parseInt(params.cat_id))) {
        cat = parseInt(params.cat_id)
    }

    if (cat > 0) {

        const product = await supabase
        .from('product')
        .select('*')
        .eq('category_id', cat)
        .order('product_name', {ascending: true});

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