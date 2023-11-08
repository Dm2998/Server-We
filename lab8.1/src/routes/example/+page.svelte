<script>
    export let data;
</script>

<style>
  div {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
		color : blue;
    }
	tr {
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
		color : blue;
	}
	#categories .list-group-item {
		color: blue;
	}
	button {
		text-decoration: none;
		
	}
</style>


<!-- The HTML content of the page-->

<div class="container">
  <div class="row">
    <!-- Page Header -->
    <h2 class="mt-5">Product from Supabase</h2>
  </div>
  {#if data.categories && data.product}
    <!-- {#each data.product as location }
    <p>{location.id} | {location.name} | {location.longitude} | {location.latitude}</p>
    {/each} -->
  <div class="row">
    <div class="col-sm-2">
      <!-- Page Body Left Column (menu) -->
      <div id="categories" class="list-group">
        <!-- placeholders - replace with real category links -->
        <button class="list-group-item list-group-item-action">
            All product
        </button>
        {#each data.categories as cat }
        <button class="list-group-item list-group-item-action">
            {cat.category_name}
        </button>
        {/each}
      </div>
    </div> <!-- End category col -->
    <div class="col-sm-10">
      <!-- Page Body Right Side (Content goes here) -->
      <div id="product">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category id</th>
              <th>Product name</th>
              <th>Product description</th>
            </tr>
          </thead>
          <tbody>
            {#each data.product as product }
            <tr>
                <td>{product.id}</td>
                <td>{product.category_id}</td>
                <td>{product.product_name}</td>
                <td>{product.product_description}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div> <!-- End product col -->
  </div> <!-- End Row -->
  {:else}
  <p> No data to display</p>
{/if}
</div> <!-- End Main Content-->
