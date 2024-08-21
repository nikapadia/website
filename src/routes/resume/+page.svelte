<script>
	import { onMount } from 'svelte';

    let url = 'https://drive.google.com/file/d/1BI7cDQHdK87LBFVmUlxrCd560kYqbiAl/view';
    onMount(() => {
        window.location.href = url;
    });
</script>

<section>
    <div class="redirect">
		<h1>Redirecting...</h1>
        <p>If you aren't redirected, click <a href={url} rel="noreferrer">here</a></p>
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
    .redirect {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
