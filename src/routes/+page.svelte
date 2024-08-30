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

</script>

<svelte:head>
	<title>Nilay Kapadia</title>
	<meta
		name="description"
		content="Hey! I'm Nilay, a junior computer science student as Rensselaer Polytechnic Institute."
	/>
	<!-- Twitter -->
	<meta property="twitter:card" content={image_coverPhoto} />
	<meta property="twitter:url" content="https://nikapadia.com/" />
	<meta property="twitter:title" content="Nilay Kapadia" />
	<meta
		property="twitter:description"
		content="Hey! I'm Nilay, a junior computer science student as Rensselaer Polytechnic Institute."
	/>
	<meta property="twitter:image" content={image_coverPhoto} />
</svelte:head>

<section>
    <!-- <div class="infopanel">
        <Infopanel/>
    </div> -->
    <div class="main">
        <div class="profile-picture">
            <img src={image_coverPhoto} alt="Cover" class="cover-photo" />
        </div>
        <div class="info-box">
            <h1 class="name">Nilay Kapadia</h1>
            <div>
                <h2 class="subtitle">Junior CS Student at <span title="Rensselaer Polytechnic Institute">RPI</span></h2>
            </div>
        </div>
        <div class="section-title">
            <h2>Projects</h2>
        </div>
        <div class="projects-wrapper">
            <ol class="projects">
                <li class="project-item">
                    <div class="box">
                        <span class="project-title">
                            <a href="https://github.com/nikapadia/polycal" target="_blank" rel="noreferrer">PolyCal</a>
                            <p>Jan 2024 — May 2024</p>
                        </span>
                        <p class="project-description">
                            PolyCal is calendar app that centralizes every event on RPI's campus into one place. Any student can submit an event to be added to the calendar. It is built with React and Go.
                        </p>
                    </div>
                </li>
                <li class="project-item">
                    <div class="box">
                        <span class="project-title">
                            <a href="https://nikapadia.github.io/SuperSnippets" target="_blank" rel="noreferrer">Super Snippets</a>
                            <p>Sep 2023 — Dec 2023</p>
                        </span>
                        <p class="project-description">
                            Super Snippets is a React app that turns code snippets into visually appealing images for presentations and technical demonstrations.
                        </p>
                    </div>
                </li>
                <li class="project-item">
                    <div class="box">
                        <span class="project-title">
                            <a href="https://degreedoctor.org" target="_blank" rel="noreferrer">Degree Doctor</a>
                            <p>Jan 2023 — May 2023</p>
                        </span>
                        <p class="project-description">
                            Degree Doctor is a Vue app that helps students create and manage a plan for their college degree.
                        </p>
                    </div>
                </li>
                <li class="project-item">
                    <div class="box">
                        <span class="project-title">
                            <a href="https://wordletogether.com" target="_blank" rel="noreferrer">Wordle Together</a>
                            <p>Jan 2022 — Jan 2023</p>
                        </span>
                        <p class="project-description">
                            Wordle Together is a multiplayer version of Wordle where two players compete to guess the word first.
                        </p>
                    </div>
                </li>                
            </ol>
        </div>
        <div class="section-title">
            <h2>Contact</h2>
        </div>
        <div class="contact-wrapper">
            <ol class="contact">
                <li class="contact-item">
                    Email — nilayrkapadia [at] gmail [dot] com
                </li>
                <li class="contact-item">
                    <a href="https://github.com/nikapadia/" target="_blank" rel="noreferrer">GitHub — nikapadia</a>
                </li>
                <li class="contact-item">
                    <a href="https://www.linkedin.com/in/nilaykapadia/" target="_blank" rel="noreferrer">LinkedIn — nilaykapadia</a>
                </li>
            </ol>
        </div>
    </div>
</section>

<style>    
    * {
        box-sizing: border-box;
    }

    section {
		flex: 1;
		display: flex;
		flex-direction: row;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.main {
		display: flex;
		flex-direction: column;
        align-items: center;
		gap: 0;
		margin: 0 0 0 0;
		padding: 0 0 0 0;
		width: 100%;
		height: 100%;
		color: currentColor;
        box-sizing: border-box;
	}

    .profile-picture {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        margin: 10px 0 0 0;
        padding: 0;
    }

    .cover-photo {
        width: 256px;
		height: 256px;
		border-radius: 50%;
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
		border: 2px solid gray;
    }

    .name {
        font-size: 60px;
        font-family: var(--font-serif1);
        margin: 0;
        padding: 0;
    }

    .subtitle {
        font-size: 24px;
        font-family: var(--font-serif2);
        color: #8D8D8D;
        margin: 0;
        padding: 0;
    }

    .info-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        margin: 0;
        padding: 0;
    }

    .section-title {
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 80%;
        margin-top: 24px;   
    }

    .section-title h2 {
        font-size: 24px;
        font-family: var(--font-serif2);
        margin: 0;
        padding: 0;
    }

    .projects {
        display: flex;
        justify-content: center;
        list-style: none !important;
        flex-wrap: wrap;
        margin-right: -8px;
        margin-left: -8px;
        margin-bottom: 0;
        box-sizing: border-box;
        padding: 0;
        gap: 8px;
        width: 100%;
    }

    .project-item {
        display: flex;
        align-content: stretch;
        padding-right: 8px !important;
        padding-left: 8px !important;
        border: 0.0625rem solid #444c56;
        border-radius: 10px;
        margin-bottom: 4px;
        box-sizing: border-box;
        width: 40%;
    }

    .box {
        display: flex;
        padding: 16px;
        width: 100% !important;
        flex-direction: column;
        max-width: 440px;
    }

    .project-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        font-family: var(--font-serif2);
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    .project-title p {
        font-size: 16px;
        font-family: var(--font-serif2);
        color: #8D8D8D;
        margin: 0;
        padding: 0;
    }

    .project-title a {
        color: #539bf5;
        text-decoration: none;
    }

    .project-title a:hover {
        text-decoration: underline;
    }

    .project-description {
        font-size: 16px;
        font-family: var(--font-serif2);
        color: #8D8D8D;
        margin: 0;
        padding: 0;
    }

    .contact-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 75%;
        /* padding-left: 150px; */
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: inside;
        flex-wrap: nowrap;
        box-sizing: border-box;
        padding: 0;
        gap: 8px;
        width: 100%;
    }

    .contact-item {
        width: 100%;
        font-size: 18px;
        font-family: var(--font-serif2);
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    .contact-item a {
        color: #539bf5;
    }

    .contact-item a:hover {
        text-decoration: underline;
    }

	@media (max-width: 768px) {
		section {
            justify-content: center;
        }

        .main {
			flex-direction: column;
			justify-content: center;
			align-items: center;
            display: flex;
		}

        .name {
            font-size: 48px;
        }

        .section-title {
            width: 90%;
        }

        .projects-wrapper {
            display: flex;
            justify-content: center;
        }

        .projects {
            flex-direction: column;
            width: 100%;
        }

        .project-item {
            width: 100%;
        }
        
        .contact-wrapper {
            width: 80%;
        }
        

		/* .text-box {
			display: none;
		} */
    }
</style>
