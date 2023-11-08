<script>
	export let data;

	let categories = data.categories;
	let product = data.product;

	/**
	 * @param id {number}
	 */
	async function filterByCat(id) {
		let endpoint = '/api/product/';

		if (id != 0) {
			endpoint = `${endpoint}product_category/${id}`;
		} 

		console.log('api endpoint: ', endpoint);

		// Call fetch
		const response = await fetch(endpoint);

		// if resonse code 200 (ok)
		if (response.ok) {
			// get json from resonse
			const json = await response.json();
			product = json.data;
		}
	}

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
	{#if categories && product}
		<div class="row">
			<div class="col-sm-2">
				<!-- Page Body Left Column (menu) -->
				<div id="categories" class="list-group">
					<button on:click={() => filterByCat(0)} class="list-group-item list-group-item-action">
						All product
					</button>
					{#each categories as cat}
						<button
							on:click={() => filterByCat(Number(cat.id))}
							class="list-group-item list-group-item-action"
						>
							{cat.category_name}
						</button>
					{/each}
				</div>
			</div>
			<!-- End category col -->

			<div class="col-sm-10">
				<!-- Page Body Right Side (Content goes here) -->
				<div id="product">
					<table class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th>Id</th>
                                <th>Category_id</th>
								<th>Product_name</th>
								<th>Product_description</th>
								<th>Product_stock</th>
                                <th>Product_price</th>
							</tr>
						</thead>
						<tbody>
							{#each product as prod}
								<tr>
									<td>{prod.id}</td>
                                    <td>{prod.category_id}</td>
									<td><a href={`/api/product/${prod.id}`} target="_blank">{prod.product_name}</a></td>
									<td>{prod.product_description}</td>
                                    <td>{prod.product_stock}</td>
                                    <td>{prod.product_price}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<!-- End product col -->
		</div>
		<!-- End Row -->
	{:else}
		<p>No data to display</p>
	{/if}
	<p><button class="btn btn-primary"><a class="text-light" href="/add_product">Add new Product</a></button></p>
    <p><button class="btn btn-primary"><a class="text-light" href="/add_product_category">Add New Category</a></button></p>
</div>
<!-- End Main Content-->

