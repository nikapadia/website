<script>
	import image_coverPhoto from '$lib/images/Headshot.png';
	import Icon from '@iconify/svelte';
    import Icon_RightCaret from '@iconify/icons-ph/caret-right-fill';
    import Icon_DownCaret from '@iconify/icons-ph/caret-down-fill';

    import {slide} from 'svelte/transition';

    let isCollapsibleOpen = false;
    function toggleCollapsible() {
        console.log("Toggling collapsible");
        isCollapsibleOpen = !isCollapsibleOpen;
    }

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
            <!-- <div>
                <h2 class="subtitle">Junior CS student at <span title="Rensselaer Polytechnic Institute">RPI</span></h2>
            </div> -->
        </div>
        <div class="section-title">
            <h2>About Me</h2>
        </div>
        <div class="content-wrapper">
            <ol class="content">
                <p class="about-me">
                    Hello! I'm Nilay, a junior computer science student (technically I'm a senior by credits since I will gradute in December 2025) at Rensselaer Polytechnic Institute. I like to work on high-performate and scalable systems in any language but I'm most comfortable with C++, Python, and Go. I'm currently upgrading a custom CMS for The Polytechnic, RPI's student-run newspaper where I am have been the Editor in Chief since December 2024. 
                </p>
            </ol>
        </div>
        <div class="section-title">
            <h2>Work Experience</h2>
        </div>
        <div class="content-wrapper">
            <ol class="content">
                <li class="experience-item-larger-width content-item">
                    <div class="content-box" style="max-width: none;">
                        <span class="content-title">
                            <a href="https://doronprecision.com/" target="_blank" rel="noreferrer">Doron Precision Systems</a>
                            <p>Jun 2024 — Aug 2024</p>
                        </span>
                        <p class="experience-role">Software Engineer Intern</p>
                        <p class="content-description">
                            Built a custom AI traffic system in Unreal Engine 5 with C++ that allows for thousands of vehicles to navigate autonomously, avoid each other, safely merge into lanes and onto highways, and follow right of way at intersections.
                        </p>
                        <div class="collapsible">
                            <button on:click={toggleCollapsible} class="collapsible-button">
                                {#if isCollapsibleOpen}
                                    <Icon icon={Icon_DownCaret} width="24" height="24" color="#8D8D8D"/>
                                {:else}
                                    <Icon icon={Icon_RightCaret} width="24" height="24" color="#8D8D8D"/>
                                {/if}
                                <p class="content-description">Click to view demos</p>
                              </button>
                            {#if isCollapsibleOpen}
                                <div class="collapsible-content" transition:slide={{duration:300}}>
                                    <div class="collapsible-content-item">
                                        <p class="content-description">Demo 1 - VehicleAI System</p>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/d42bJzZ5OIY?si=NX8weO74H_0jBSO6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                    <div class="collapsible-content-item">
                                        <p class="content-description">Demo 2 - VehicleAI Editor Mode Plugin</p>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lOH1_jIL3ZY?si=-JcASWKwLd6boaMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                </li>
                <li class="content-item experience-item-larger-width">
                    <div class="content-box" style="max-width: none;">
                        <span class="content-title">
                            <a href="https://bozu.us/" target="_blank" rel="noreferrer">Bozu</a>
                            <p>May 2023 — Aug 2023</p>
                        </span>
                        <p class="experience-role">Software Engineer Intern</p>
                        <p class="content-description">
                            Built a proof-of-concept system using Microsoft’s Graph API and TypeScript to allow users to sync calendar events between Outlook and the platform. 
                            Added functionality to create Bozu meeting within Outlook through a custom Office plugin. Developed a custom Slack app to let users create a Bozu meeting in Slack along with a MySQL and TypeScript system to demonstrate account binding between the two services.
                        </p>
                    </div>
                </li>
            </ol>
        </div>
        <div class="section-title">
            <h2>Projects</h2>
        </div>
        <div class="content-wrapper">
            <ol class="content">
                <li class="content-item">
                    <div class="content-box">
                        <span class="content-title">
                            <a href="https://github.com/thepoly/pipeline" target="_blank" rel="noreferrer">Pipeline</a>
                            <p>Aug 2024 — Present</p>
                        </span>
                        <p class="content-description">
                            Rewriting 6-year-old CMS for The Polytechnic, RPI's student-run newspaper. Pipeline is built with Django, Wagtail, and Sass.
                        </p>
                    </div>
                </li>
                <li class="content-item">
                    <div class="content-box">
                        <span class="content-title">
                            <a href="https://github.com/nikapadia/polycal" target="_blank" rel="noreferrer">PolyCal</a>
                            <p>Jan 2024 — May 2024</p>
                        </span>
                        <p class="content-description">
                            PolyCal is calendar app that centralizes every event on RPI's campus into one place. It is built with React and Go.
                        </p>
                    </div>
                </li>
                <li class="content-item">
                    <div class="content-box">
                        <span class="content-title">
                            <a href="https://nikapadia.github.io/SuperSnippets" target="_blank" rel="noreferrer">Super Snippets</a>
                            <p>Sep 2023 — Dec 2023</p>
                        </span>
                        <p class="content-description">
                            Super Snippets is a React app that turns code snippets into visually appealing images for presentations and technical demonstrations.
                        </p>
                    </div>
                </li>
                <li class="content-item">
                    <div class="content-box">
                        <span class="content-title">
                            <a href="https://degreedoctor.org" target="_blank" rel="noreferrer">Degree Doctor</a>
                            <p>Jan 2023 — May 2023</p>
                        </span>
                        <p class="content-description">
                            Degree Doctor is a Vue app that helps students create and manage a plan for their college degree.
                        </p>
                    </div>
                </li>
                <li class="content-item">
                    <div class="content-box">
                        <span class="content-title">
                            <a href="https://wordletogether.com" target="_blank" rel="noreferrer">Wordle Together</a>
                            <p>Jan 2022 — Jan 2023</p>
                        </span>
                        <p class="content-description">
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
        object-fit: cover;
    }

    .name {
        font-size: 60px;
        font-family: var(--font-serif1);
        margin-top: 16px;
        padding: 0;
    }

    /* .subtitle {
        font-size: 24px;
        font-family: var(--font-serif2);
        color: #8D8D8D;
        margin: 0;
        padding: 0;
    } */

    .info-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        margin: 0;
        padding: 0;
    }

    .about-me {
        font-size: 16px;
        font-family: var(--font-serif2);
        color: #8D8D8D;
        margin: 0;
        padding: 0;
        width: 75%;
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

    .experience-role {
        font-size: 16px;
        font-family: var(--font-serif2);
        font-weight: bold;
        color: #d0d0d0;
        margin-bottom: 4px;
        padding: 0;
    }

    .experience-item-larger-width {
        width: 80% !important;
    }

    .content {
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

    .content-item {
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

    .content-box {
        display: flex;
        padding: 16px;
        width: 100% !important;
        flex-direction: column;
        max-width: 440px;
    }

    .content-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        font-family: var(--font-serif2);
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    .content-title p {
        font-size: 16px;
        font-family: var(--font-serif2);
        color: #8D8D8D;
        margin: 0;
        padding: 0;
    }

    .content-title a {
        color: #539bf5;
        text-decoration: none;
    }

    .content-title a:hover {
        text-decoration: underline;
    }

    .content-description {
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

    .collapsible {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .collapsible-button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        max-height: 24px;
        text-align: left;
        padding-left: 0;
        gap: 8px;
        margin-top: 16px;
    }

    .collapsible-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
    }

    .collapsible-content-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
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

        .about-me {
            width: 100%;
        }

        .section-title {
            width: 90%;
        }

        .content-wrapper {
            display: flex;
            justify-content: center;
        }

        .content {
            flex-direction: column;
            width: 100%;
        }

        .content-item {
            width: 100%;
        }
        
        .contact-wrapper {
            width: 80%;
        }

        .experience-item-larger-width {
            width: 100% !important;
        }

        .collapsible-content {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .collapsible-content-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        iframe {
            width: 100%;
            height: auto;
        }
        

		/* .text-box {
			display: none;
		} */
    }
</style>
