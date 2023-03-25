<script>
  import cover_photo from '$lib/images/cover_photo.webp';
</script>

<svelte:head>
	<title>Nilay Kapadia</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <span class="welcome">
    <!-- <picture>
      <source srcset={welcome} type="image/webp" />
      <img src={welcome_fallback} alt="Welcome" />
    </picture> -->
    <h1>Hey!</h1>
  </span>
  <picture>
    <img src={cover_photo} alt="Cover" class="cover-photo">
  </picture>


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
    font-size: 1em;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
    font-family: var(--font-cursive2);
    font-size: 5em;
	}

  .cover-photo {
    width: 50em;
    height: 50em;
    object-fit: scale-down;
  }

</style>
