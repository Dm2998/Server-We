<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/product">Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/example">Example</a>
            </li>
        </ul>
</nav>
<style>
	nav a {
		color: blue;

	}
    nav {
    display: flex;
    justify-content: center; /* Horizontal centering */
    align-items: flex-end; /* Align the navigation to the bottom */
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    font-family: Arial, Helvetica, sans-serif;
}

    nav a {
        color: yellow; /* Set the link color to yellow */
        text-decoration: none; /* Remove underlines from the links */
        margin: 0 30px; /* Add space between the links (adjust the margin as needed) */
}

    ul {
        list-style-type: none; /* Remove bullets */
        padding: 0; /* Remove padding */
        margin: 0; /* Remove margins */
        display: flex; /* Make the container flex */
}
    
</style>

<slot />