<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<header>
	<div class="corner-left">
		<a href="{base}/">
			Nilay Kapadia
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="{base}/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="{base}/about">About</a>
			</li>
		</ul>
	</nav>

</header>

<style>
	header {
		display: flex;
		justify-content: space-evenly;
	}


  .corner-left {
    margin: 16px;
    text-decoration: none;
	}
  
  .corner-left a {
    color:rgb(0, 0, 0);
    font-size: 2.25em;
    font-family: var(--font-cursive);
	}

  .corner-left a:hover {
    color:rgb(97, 97, 97);
    text-decoration: none;
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	ul {
		position: relative;
		padding: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
    color:rgb(216, 16, 16);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
    font-family: var(--font-head);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
