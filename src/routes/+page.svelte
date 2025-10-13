<script>
    const image_coverPhoto = '/Headshot.png';

    import Projects from './components/Projects.svelte';
    import WorkExperience from './components/WorkExperience.svelte';

    const projectsData = [
        {
            title: "Operating System Simulator",
            url: "",
            description: "Created a C++ OS simulator for CPU scheduling algorithms including FCFS, SJF, SRT, and round robin with performance metrics for CPU utilization, wait times, and turnaround times"
        },
        {
            title: "RPI Search Engine",
            url: "",
            description: "Built a search engine ranking microservice with that covers all RPI domains. Integrated the service with a Redis cache and indexing, link analysis, and metrics microservices"
        },
        {
            title: "Pipeline",
            url: "https://github.com/thepoly/pipeline",
            description: "Rewriting 6-year-old CMS for The Polytechnic, RPI's student-run newspaper. Pipeline is built with Django, Wagtail, and Sass."
        },
        {
            title: "PolyCal",
            url: "https://github.com/nikapadia/polycal",
            description: "PolyCal is calendar app that centralizes every event on RPI's campus into one place. It is built with React and Go."
        },
        {
            title: "Super Snippets",
            url: "https://nikapadia.github.io/SuperSnippets",
            description: "Super Snippets is a React app that turns code snippets into visually appealing images for presentations and technical demonstrations."
        },
        {
            title: "Degree Doctor",
            url: "https://degreedoctor.org",
            description: "Degree Doctor is a Vue app that helps students create and manage a plan for their college degree."
        },
        {
            title: "Wordle Together",
            url: "https://wordletogether.com",
            description: "Wordle Together is a multiplayer version of Wordle where two players compete to guess the word first."
        }
    ];

    const experienceData = [
        {
            company: "Alo Yoga",
            url: "https://aloyoga.com/",
            period: "Jun 2025 — Aug 2025",
            role: "Software Engineer Intern - Business Systems",
            description: "Created an SRE pipeline to monitor server and database performance which was fed into a Grafana dashboard. Developed an automated Python testing tool to simulate manufacturing pipelines, saving 1000+ developer hours per year. Built a GitHub app to automate deployment processes and check for proper database indexing. Made an AI chatbot interface with the OpenAI API using a RAG trained on the company's codebase and documentation."
        },
        {
            company: "Doron Precision Systems",
            url: "https://doronprecision.com/",
            period: "Jun 2024 — Aug 2024",
            role: "Software Engineer Intern",
            description: "Built a custom AI traffic system in Unreal Engine 5 with C++ that allows for thousands of vehicles to navigate autonomously, avoid each other, safely merge into lanes and onto highways, and follow right of way at intersections.",
            hasCollapsible: true,
            demoVideos: [
                {
                    title: "VehicleAI System",
                    videoUrl: "https://www.youtube.com/embed/d42bJzZ5OIY?si=NX8weO74H_0jBSO6"
                },
                {
                    title: "VehicleAI Editor Mode Plugin",
                    videoUrl: "https://www.youtube.com/embed/lOH1_jIL3ZY?si=-JcASWKwLd6boaMo"
                }
            ]
        },
        {
            company: "Bozu",
            url: "https://bozu.us/",
            period: "May 2023 — Aug 2023",
            role: "Software Engineer Intern",
            description: "Built a proof-of-concept system using Microsoft's Graph API and TypeScript to allow users to sync calendar events between Outlook and the platform. Added functionality to create Bozu meeting within Outlook through a custom Office plugin. Developed a custom Slack app to let users create a Bozu meeting in Slack along with a MySQL and TypeScript system to demonstrate account binding between the two services."
        }
    ];
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
        </div>
        <div class="section-title">
            <h2>About Me</h2>
        </div>
        <div class="content-wrapper">
            <ol class="content">
                <p class="about-me">
                    Hello! I'm Nilay, a senior computer science student at Rensselaer Polytechnic Institute with a concentration in AI, ML, and data science. I mainly like to work with C++, Python, Go, TypeScript, and React.
                </p>
            </ol>
        </div>
                <div class="section-title">
            <h2>Work Experience</h2>
        </div>
        <div class="content-wrapper">
            <WorkExperience experiences={experienceData} />
        </div>
        <div class="section-title">
            <h2>Projects</h2>
        </div>
        <div class="content-wrapper">
            <Projects projects={projectsData} />
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
        border: 4px solid #2f363f;
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

    /* Experience styles moved to WorkExperience.svelte */

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
        
        .contact-wrapper {
            width: 80%;
        }        

		/* .text-box {
			display: none;
		} */
    }

    @media (prefers-color-scheme: dark) {
        /* .content-box {
            border: 0.0625rem solid #444c56;
        } */
    }

    @media (prefers-color-scheme: light) {
        .cover-photo {
            border: 4px solid #e0e0e0;
        }
        .about-me {
            color: #22272e;
        }
    }

</style>
