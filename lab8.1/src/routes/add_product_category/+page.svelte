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
          <p>Category Name: {$form.category_name}</p>
          <p>Category Description: {$form.category_description}</p>

      {:else}
  
      <h1>Add Product Category</h1>
      <!-- Bootstrap Form Layout-->
      <div class="w-75 mw-300 p-3">
          <!-- this form will post when submitted -->
          <form method="POST" use:enhance>
  
              <!-- name -->
              <div class="mb-3">
                  <label for="category_name" class="form-label">Category Name</label>
                  <input type="text" name="category_name" class="form-control" bind:value={$form.category_name} />
              </div>
  
              <!-- description -->
              <div class="mb-3">
                  <label for="category_description" class="form-label">Category Description</label>
                  <input type="text" name="category_description" class="form-control" bind:value={$form.category_description} />
              </div>

              <!-- submit button -->
              <div class="mb-3">
                  <button class="btn btn-primary">Submit</button>
              </div>
          </form>
      </div>
      {/if}
  </div>