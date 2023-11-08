/** @type {import('./$types').PageServerLoad} */
export async function load( { fetch, params }) {

    let product;
    let categories;

    try {
        // Call fetch
        const res_product = await fetch('/api/product');

        // if resonse code 200 (ok)
        if (res_product.ok) {
            // get json from resonse
            product = await res_product.json();
        }

        const res_categories = await fetch('/api/categories');

        // if resonse code 200 (ok)
        if (res_categories.ok) {
            // get json from resonse
            categories = await res_categories.json();
        }

    } catch(error){
            // an error occured - return status code amd mesage
        return {
            status: 500,
            error: new Error(`Could not fetch data`)
        }
    }

    return {
        product: product.data,
        categories: categories.data
    }

}