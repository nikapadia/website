<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import icon_warning from '@iconify/icons-ph/warning-duotone';
	const image_404 = '/404.svg'; 
</script>

<section>
	<div class="error">
		<img src={image_404} alt="404" class="error-img" width="256" />
		<h1>{$page.status}</h1>
		<p>Sorry, that page doesn't seem to exist.</p>
		<a href="/" style="text-decoration:underline; margin-top: 16px;">Why don't you head back home?</a>
	</div>
</section>

<style>
    section {
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
	.error {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 6em;
		color: white;
		font-family: var(--font-serif2);
		margin: 0 0 10px 0;
	}
	p {
		font-size: 1.5em;
		color: white;
		font-family: var(--font-serif2);
	}
	a {
		font-size: 1.5em;
		color: #dbe3ff;
		font-family: var(--font-serif2);
		text-decoration: none;
	}
	a:hover {
		color: #b1b7cc;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 4em;
		}
		p {
			font-size: 1.2em;
		}
		a {
			font-size: 1.2em;
		}
	}
</style>
