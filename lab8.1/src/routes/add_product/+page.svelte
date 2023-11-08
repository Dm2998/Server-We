<script>
	/** @type {import('./$types').PageData} */

	// dependencies
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// create form instance
	const { form, errors, enhance, delayed, message, constraints, reset } = superForm(data.form);
</script>


<div class="m-5">
    <!--Show message after sucessful add location-->
      {#if $message}
          <h4 class="message" class:success={$page.status < 400} class:error={$page.status >= 400}>
              {$message}
          </h4>
          <p>ID: {$form.id}</p>
          <p>Product Name: {$form.product_name}</p>
          <p>Product Description: {$form.product_description}</p>
          <p>Product Stock: {$form.product_stock}</p>
          <p>Product Price: {$form.product_price}</p>

      {:else}
  
      <h1>Add Product</h1>
      <!-- Bootstrap Form Layout-->
      <div class="w-75 mw-300 p-3">
          <!-- this form will post when submitted -->
          <form method="POST" use:enhance>
              <div class="mb-3">
                  <label for="category_id" class="form-label">Category</label>
                  <select name="category_id" bind:value={$form.category_id} class="form-select">
                      <option value="0">Choose a category</option>
                      <!-- Add each category to the select -->
                      {#each data.categories as cat}
                          <option value={cat.id}>{cat.category_name}</option>
                      {/each}
                  </select>
              </div>
  
              <!-- Product Name -->
              <div class="mb-3">
                  <label for="product_name" class="form-label">Product Name</label>
                  <input type="text" name="product_name" class="form-control" bind:value={$form.product_name} />
              </div>
  
              <!-- Product Description -->
              <div class="mb-3">
                  <label for="product_descrition" class="form-label">Product Description</label>
                  <input type="text" name="product_description" class="form-control" bind:value={$form.product_description} />
              </div>
  
              <!-- Product Stock -->
              <div class="mb-3">
                  <label for="product_stock" class="form-label">Product Stock</label>
                  <input type="number" name="product_stock" class="form-control" bind:value={$form.product_stock} />
              </div>
  
              <!-- Product Price -->
              <div class="mb-3">
                  <label for="product_price" class="form-label">Product Price</label>
                  <input type="number" step="0.01" min="0" name="product_price" class="form-control" bind:value={$form.product_price} />
              </div>

              <!-- submit button -->
              <div class="mb-3">
                  <button class="btn btn-primary">Submit</button>
              </div>
          </form>
      </div>
      {/if}
  </div>

  <style>
    h1 {
        color: blue;
    }
    
  </style>