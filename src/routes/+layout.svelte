<script lang="ts">
	// import Navbar from './components/navbar.svelte';
	import Footer from './components/Footer.svelte';
	// import Infopanel from './components/infopanel.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Navbar /> -->
    <base href="/">

	<main>
		<!-- <Infopanel/> -->
		<slot />
	</main>
	<!-- <Footer /> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: row;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: space-between;
	}

	@media (min-width: 480px) {
	}
</style>
