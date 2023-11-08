import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

export async function GET({ request, cookies }) {

    const categories = await supabase
    .from('category')
    .select('*')
    .order('category_name', {ascending: true});

    if (categories.error) {
        return json({
            status: categories.status,
            error: categories.error
        });
    }

    return json({
        data: categories.data,
        status: categories.status
    });
}