// import dependencies
// Zod: validator
// superforms: form helper
// sveltekit-superforms: form helper
// Diego Medina - 2023

import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';

const schema = z.object({               // define the form schema
    id: z.number().optional(),
    category_id: z.number(),
    product_name: z.string(),
    product_description: z.string(),
    product_stock: z.number(),
    product_price: z.number().optional()
});

// Page load
// Build the form and returns to page
export async function load({ fetch, params }) {
    // Build form
    const form = await superValidate(schema);

    // Get categories (to display in a select list in the form)
    let categories;
    const response = await fetch('/api/categories');

    // if resonse code 200 (ok)
    if (response.ok) {
        // get json from resonse
        categories = await response.json();
    }

    // Return form and categories
    return {
        form,
        categories: categories.data,
    };
}

// Form actions (e.g. what to do when submit happens)
export const actions = {
    // default form submit
    default: async ({ request, fetch }) => {
        // retrieve form data and validate
        const form = await superValidate(request, schema);
        
      	console.log('POST', form);

        if (!form.valid) {
            return fail(400, { form });
        }

        // Add the new product via an API call
        // note POST
        const response = await fetch('/api/product', {
            method: 'POST',
            body: JSON.stringify(form.data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const new_loc = await response.json();

        // if insert returned a new product, add its id to the form for display
        if (new_loc.data)
        {
            form.data.id = new_loc.data[0].id;
        }

        // return form and message
        return message(form, `success: new product added`);
    }
};