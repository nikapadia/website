<script>
	import Icon from '@iconify/svelte';
	import icon_graduationCap from '@iconify/icons-ph/graduation-cap-duotone';
	import icon_mapTrifold from '@iconify/icons-ph/map-trifold-duotone';
	import icon_building from '@iconify/icons-ph/buildings-duotone';
	import image_coverPhoto from '$lib/images/ori.webp';
	import image_poly from '$lib/images/poly.webp';
	import image_challengeCamp from '$lib/images/challenge_camp.webp';
	import image_dae from '$lib/images/dae.webp';
	import image_wordleTogether from '$lib/images/wordletogether.webp';
	import image_edgemontRobotics from '$lib/images/edgemont_robotics.webp';
	import image_degreeDoctor from '$lib/images/degree_doctor.webp';

	import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

	let ready = false;
	onMount(() => (ready = true));

	// @ts-ignore
	function typewriter(node) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		let speed = 1;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (/** @type {number} */ t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

</script>

<svelte:head>
	<title>Nilay Kapadia</title>
	<meta
		name="description"
		content="Hey! I'm Nilay, a freshman computer science student as Rensselaer Polytechnic Institute."
	/>
</svelte:head>

<section>
	<div class="main">
		<div class="profile">
			<div class="picture">
				<picture>
					<img src={image_coverPhoto} alt="Cover" class="cover-photo" />
				</picture>
			</div>
			<div class="info-box">
				<h3 class="name">Nilay Kapadia</h3>
				<h3 class="username">nikapadia</h3>
				<div class="info-box-sub">
					<!-- #c593f5 -->
					<div class="info-box-item">
						<Icon icon={icon_building} width="24" color="currentColor" /> Rensselaer Polytechnic Institute
					</div>
					<div class="info-box-item">
						<Icon icon={icon_graduationCap} width="24" color="currentColor" /> Class of 2026
					</div>
					<div class="info-box-item">
						<Icon icon={icon_mapTrifold} width="24" color="currentColor" /> New York
					</div>
				</div>
			</div>

			<hr />
			<div class="organizations">
				<div class="org-title">Organizations</div>
				<div class="org-list">
					<div class="org-item">
						<a href="https://degreedoctor.org/" target="_blank" rel="noreferrer">
							<img src={image_degreeDoctor} alt="Degree Doctor" class="org-item-logo-img" />
						</a>
					</div>
					<div class="org-item">
						<a href="https://poly.rpi.edu/" target="_blank" rel="noreferrer">
							<img src={image_poly} alt="The Polytechnic" class="org-item-logo-img" />
						</a>
					</div>
					<div class="org-item">
						<a href="https://challengecamps.com/" target="_blank" rel="noreferrer">
							<img src={image_challengeCamp} alt="Challenge Camp" class="org-item-logo-img" />
						</a>
					</div>
					<div class="org-item">
						<a href="https://wordletogether.com/" target="_blank" rel="noreferrer">
							<img src={image_wordleTogether} alt="WordleTogether.com" class="org-item-logo-img" />
						</a>
					</div>
					<div class="org-item">
						<a href="https://edgemontrobotics.github.io/" target="_blank" rel="noreferrer">
							<img
								src={image_edgemontRobotics}
								alt="Edgemont Robotics Team"
								class="org-item-logo-img"
							/>
						</a>
					</div>
					<div class="org-item">
						<a href="https://www.thedae.com/" target="_blank" rel="noreferrer">
							<img src={image_dae} alt="Challenge Camp" class="org-item-logo-img" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="text-box">
			{#if ready}
				<h1 class="typewriter" transition:typewriter>Hi there!</h1>
			{/if}
            {#if ready} 
                <p transition:fly="{{ y: 25, duration: 2000 }}">
                My name is Nilay Kapadia and I am a sophomore computer science student at Rensselaer
                    Polytechnic Institute.
                </p>

            {/if}
		</div>

        <div class="projects">
            
        </div>
	</div>
</section>

<style>
	/*   h1 {
    width: 100%;
    font-size: 1em;
	} */

	.main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 0;
		margin: 0 0 0 0;
		padding: 0 0 0 0;
		width: 100%;
		height: 100%;
		color: currentColor;
	}

	.text-box {
		max-width: 600px;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		flex-wrap: nowrap;
		color: currentColor;
		gap: 0;
		margin: 0 0 0 0;
		padding: 0 0 0 0;
	}

	.text-box p {
		font-size: 16px;
		font-weight: 400;
		padding: 0 64px 0 64px;
		font-family: var(--font-serif2);
	}

	.text-box h1 {
		font-family: var(--font-cursive1);
		margin: 0;
		font-size: 4.5em;
	}

	.profile {
		max-width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
	}

	hr {
		max-width: 100%;
		margin: 20px 0 20px 0;
	}

	.info-box {
		max-width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		flex-wrap: nowrap;
		color: currentColor;
		gap: 0;
	}

	.info-box-item {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		gap: 0.5em;
		font-size: 16px;
		font-family: var(--font-serif2);
		font-weight: 400;
		margin: 0 0 0.5em 0;
	}
	.name {
		margin: 20px 0 0 0;
		font-size: 22px;
		font-family: var(--font-serif1);
	}
	.username {
		font-size: 18px;
		margin: 0 0 20px 0;
		font-family: var(--font-serif2);
	}

	.org-title {
		color: currentColor;
		font-size: 20px;
		margin: 0 0 8px 0;
		font-family: var(--font-serif2);
	}

	.org-list {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		gap: 0.5em;
		margin: 0 0 0 0;
		max-width: 300px;
	}

	.org-item {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		gap: 0.5em;
		font-size: 15px;
		font-weight: 400;
	}

	.org-item-logo-img {
		width: 50px;
		height: 50px;
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
		border-radius: 20%;
	}

	.cover-photo {
		width: 296px;
		height: 296px;
		border-radius: 50%;
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
		border: 2px solid gray;
	}

	@media (max-width: 768px) {
		.main {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.text-box {
			display: none;
		}
	}
</style>
