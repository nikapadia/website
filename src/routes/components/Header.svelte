<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
  import resume from '$lib/content/resume.pdf';
</script>

<header>
  <nav>
    <div class="name">
      <a href="{base}/">
        Nilay Kapadia
      </a>
    </div>
		<ul>
			<li>
				<a href="{base}/">Home</a>
			</li>
			<li>
				<a href="{base}/">About</a>
			</li>
			<li>
				<a href="{resume}" target="_blank" rel="noreferrer">Resume</a>
			</li>
		</ul>
	</nav>

</header>

<style>
	header {
		display: flex;
		justify-content: space-around;
    align-items: center;
    width: 100%;
	}

  .name {
    margin: 16px;
    text-decoration: none;
	}
  
  .name a {
    color: white;
    font-size: 2.25em;
    font-family: var(--font-head);
	}

  .name a:hover {
    color:rgb(97, 97, 97);
    text-decoration: none;
	}

	nav {
    position: relative;
		display: flex;
		justify-content: space-around;
    align-items: center;
    width: 80%;
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

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: white;
    font-family: var(--font-serif1);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #0d7680;
	}

  @media (max-width: 768px) {
    header {
      flex-direction: column;
      width: 100%;
    }

    ul {
      display: none;
    }

    nav {
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .name {
      margin: 8px 0 0 0;
    }
  }
</style>
