<script>
	import image_coverPhoto from '$lib/images/ori.webp';
	import github from '$lib/images/github-mark-white.svg';
	import linkedin from '$lib/images/linkedin.png';
	import Icon from '@iconify/svelte';
	import icon_envelope from '@iconify/icons-ph/envelope-duotone';

    // import Cube from "phosphor-svelte/lib/cube";

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
    import Infopanel from './components/infopanel.svelte';
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
		content="Hey! I'm Nilay, a sophomore computer science student as Rensselaer Polytechnic Institute."
	/>
	<!-- Twitter -->
	<meta property="twitter:card" content={image_coverPhoto} />
	<meta property="twitter:url" content="https://nikapadia.com/" />
	<meta property="twitter:title" content="Nilay Kapadia" />
	<meta
		property="twitter:description"
		content="Hey! I'm Nilay, a sophomore computer science student as Rensselaer Polytechnic Institute."
	/>
	<meta property="twitter:image" content={image_coverPhoto} />
</svelte:head>

<section>
    <div class="infopanel">
        <Infopanel/>
    </div>
	<div class="main">
		<div class="text-box">
			<h1 class="typewriter">Hi there! </h1>
			<p>
				My name is Nilay Kapadia and I am a sophomore computer science student at Rensselaer
				Polytechnic Institute. 
			</p>
			<h2>Contact</h2>
			<div class="contact">
				<a
					href="https://github.com/nikapadia/"
					target="_blank"
					rel="noreferrer"
					style="fill: currentColor;"
				>
					<img src={github} alt="github" class="image gh" />
				</a>
				<a href="https://www.linkedin.com/in/nilaykapadia/" target="_blank" rel="noreferrer">
					<img src={linkedin} alt="linkedin" class="image" />
				</a>
				<a
					href="mailto:nilayrkapadia@gmail.com"
					target="_blank"
					rel="noreferrer"
                    class="email"
				>
					<Icon icon={icon_envelope} width="50"/>
				</a>
			</div>
            <p style="padding-top: 24em">
                This site is still under construction. Check back soon™ for more updates!
            </p>
		</div>
	</div>
</section>

<style>
	/*   h1 {
    width: 100%;
    font-size: 1em;
	} */

    section {
		flex: 1;
		display: flex;
		flex-direction: row;
		/* padding: 1rem; */
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.main {
		display: flex;
		flex-direction: row;
		justify-content: right;
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
		align-items: center;
		flex-wrap: nowrap;
		color: currentColor;
		gap: 0;
		margin: 0 0 0 0;
		padding: 0 0 0 0;
	}

	.text-box p {
		font-size: 16px;
		font-weight: 400;
		padding: 0 16px 0 16px;
		font-family: var(--font-serif2);
	}

	.text-box h1 {
		font-family: var(--font-cursive1);
		margin: 0;
		font-size: 4.5em;
	}

	.contact {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	.text-box h2 {
		font-family: var(--font-cursive2);
		margin: 0;
		padding: 0 0 16px 0;
		font-size: 2.5em;
	}

	.image {
		transition: all 0.2s ease-in-out;
		height: auto;
		width: 50px;
	}

    .email {
        transition: all 0.2s ease-in-out;
        height: auto;
        width: 50px;
        color: currentColor;
    }

    .email:hover {
        filter: contrast(30%);
    }

	@media (prefers-color-scheme: dark) {
		.gh {
			filter: invert(0);
		}
	}

	@media (prefers-color-scheme: light) {
		.gh {
			filter: invert(1);
		}
	}

	.image:hover {
		filter: brightness(0.7);
	}

	@media (max-width: 768px) {
		section {
            justify-content: center;
        }
        .main {
			flex-direction: column;
			justify-content: center;
			align-items: center;
            display: none;
		}
		.text-box {
			display: none;
		}	}
</style>
