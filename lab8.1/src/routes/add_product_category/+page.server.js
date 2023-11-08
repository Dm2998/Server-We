// import dependencies
// Zod: validator
// superforms: form helper
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';

const schema = z.object({
    id: z.number().optional(),  
    category_name: z.string(),
    category_description: z.string()
});

// Page load
// Build the form and returns to page
export async function load({ fetch, params }) {
    // Build form
    const form = await superValidate(schema);

    // Get categories (to display in a select list in the form)
    let product_category;
    const response = await fetch('/api/product_category');

    // if resonse code 200 (ok)
    if (response.ok) {
        // get json from resonse
        product_category = await response.json();
    }

    // Return form and product_category
    return {
        form,
        product_category: product_category.data,
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

                // Add the new location via an API call
        // note POST
        const response = await fetch('/api/product_category', {
            method: 'POST',
            body: JSON.stringify(form.data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const new_product_category= await response.json();

        console.log('new: '),new_product_category;

        // if insert returned a new location category, add its id to the form for display
        if (new_product_category.data)
        {
            form.data.id = new_product_category.data[0].id;
        }

        // return form and message
        return message(form, `success: new location category added`);
    }
};