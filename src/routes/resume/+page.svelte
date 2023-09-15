<script>
	import { onMount } from 'svelte';

	import Icon from '@iconify/svelte';
	import icon_fileArrowDownFill from '@iconify/icons-ph/file-arrow-down-fill';

	import image_poly from '$lib/images/poly.webp';
	import image_bozu from '$lib/images/bozu.webp';
	import image_degreeDoctor from '$lib/images/degree_doctor.webp';
	import image_wordleTogether from '$lib/images/wordletogether.webp';
	import image_challengeCamp from '$lib/images/challenge_camp.webp';
	import image_dae from '$lib/images/dae.webp';
	import image_edgemontRobotics from '$lib/images/edgemont_robotics.webp';
	import image_rpiSeal from '$lib/images/rpi_seal.webp';
	import image_coverPhoto from '$lib/images/ori.webp';

	import Infopanel from '../components/infopanel.svelte';
</script>

<svelte:head>
	<title>Resume - Nilay Kapadia</title>
	<meta
		name="description"
		content="This is my resume. It contains my education, current work, and prior work."
	/>
	<!-- Twitter -->
	<meta property="twitter:card" content={image_coverPhoto} />
	<meta property="twitter:url" content="https://nikapadia.com/" />
	<meta property="twitter:title" content="Nilay Kapadia" />
	<meta
		property="twitter:description"
		content="This is my resume. It contains my education, current work, and prior work."
	/>
	<meta property="twitter:image" content={image_coverPhoto} />
</svelte:head>

<section>
	<div class="infopanel">
		<Infopanel />
	</div>
	<div class="main">
		<!-- <div class="resume-button">
            <a href={resume} target="_blank" class="resume-link">
                <button class="btn">
                    <Icon icon={icon_fileArrowDownFill} />
                    Formal Resume
                </button>
            </a>
        </div> -->
		<h1>Education</h1>
		<div class="item">
			<div class="item-header">
				<img src={image_rpiSeal} alt="Rensselaer Polytechnic Institute Seal" class="item-image" />
				<p class="company rpi">Rensselaer Polytechnic Institute</p>
			</div>
			<div class="item-subheader">
				<p class="position">B.S. in Computer Science</p>
				<p class="tenure">Aug 2022 - Dec 2025</p>
			</div>
			<ul class="education-list">
				<li class="el-item">
					<b>Relevant Coursework</b>: Data Structures, Discrete Math and Theory of Computing,
					Computer Organization, Introduction to Algorithms, Multivariable Calculus and Matrix
					Algebra
				</li>
				<li class="el-item"><b>Awards/Honors</b>: Rensselaer Leadership Scholarship</li>
			</ul>
		</div>
		<h1>Current Work</h1>
		<div class="current">
			<div class="item">
				<div class="item-header">
					<img src={image_poly} alt="The Polytechnic Logo" class="item-image" />
					<p class="company">The Polytechnic</p>
				</div>
				<div class="item-subheader">
					<p class="position">News Editor</p>
					<p class="tenure">Sep 2022 - Present</p>
				</div>
				<p class="description">
					I currently manage the news division for the school newspaper. This includes setting style
					guidelines for news articles, assigning club members to cover events, and other
					responsibilities. In the past I have helped to create a plan for printing weekly tabloids
					to be presented to a supervisory board. I have also conducted interviews with school deans
					and other administrators for fact finding purposes.
				</p>
			</div>
		</div>
		<!-- <hr /> -->
		<h1>Prior Work</h1>
		<div class="previous">
			<div class="item">
				<div class="item-header">
					<img src={image_bozu} alt="Bozu Logo" class="item-image" />
					<p class="company">Bozu</p>
				</div>
				<div class="item-subheader">
					<p class="position">Software Engineering Intern</p>
					<p class="tenure">May 2023 - Aug 2023</p>
				</div>
				<p class="description">
					Bozu is a is a communication platform for video conferencing, multi-group events,
					webinars, and instant messaging. I designed a proof-of-concept system using Microsoft’s
					Graph API and JavaScript to allow users to sync calendar events between Outlook and the
					platform. This system was later expanded to create Bozu meetings within the Outlook
					calendar through a custom Office Add-in. I also developed a custom Slack app to let users
					create a Bozu meeting in Slack using the Slack API and BoltJS. This required to creation
					of a sample MySQL database to demonstrate how to handle account binding between the two
					services. In addition, I assisted with the development of a proof-of-concept SIP gateway
					using Asterisk PBX, Edumeet, and Docker.
				</p>
			</div>
			<div class="item">
				<div class="item-header">
					<img src={image_degreeDoctor} alt="Degree Doctor" class="item-image" />
					<p class="company">Degree Doctor</p>
				</div>
				<div class="item-subheader">
					<p class="position">Frontend Developer</p>
					<p class="tenure">Jan 2023 - May 2023</p>
				</div>
				<p class="description">
					Degree Doctor is a web app that helps RPI students plan their degrees using data scraped
					from various school websites. I worked with a team of 10 to develop the web app with a
					primary focus on frontend work. I Revamped various parts of the UI using Vue.js to improve
					functionality and usability while also adding new features to help with managing multiple
					degree plans. This included refactoring the way the app stores local JSON data for each
					degree plan to utilize unique identifiers instead of user inputted names.
				</p>
			</div>

			<div class="item">
				<div class="item-header">
					<img src={image_challengeCamp} alt="Challenge Camp logo" class="item-image" />
					<p class="company">Challenge Camp</p>
				</div>
				<div class="item-subheader">
					<p class="position">Camp Counselor</p>
					<p class="tenure">Jul 2022 - Aug 2023</p>
				</div>
				<p class="description">
					I managed children aged 4-10 and supported STEM instructors at a learning and athletics
					camp. Although not a formal instructor, I filled in for instructors on several occasions.
					When this happened, with very short notice, I needed to both manage the class and create
					lesson plans based on the absent instructor’s plans. I only filled in for programming,
					robotics, and stock market classes.
				</p>
			</div>

			<div class="item">
				<div class="item-header">
					<img src={image_wordleTogether} alt="WordleTogether logo" class="item-image" />
					<p class="company">WordleTogether.com</p>
				</div>
				<div class="item-subheader">
					<p class="position">Backend Developer</p>
					<p class="tenure">Jan 2022 - Jan 2023</p>
				</div>
				<p class="description">
					WordleTogether is a multiplayer version of the game Wordle that I helped to create with a
					friend. I was tasked with setting up all the necessary backend infrastructure including an
					AWS EC2 instance for the server along with routing traffic through Cloudflare. We
					estimated that the game was played by over 200,000 unique players at some point during the
					first year.
				</p>
			</div>

			<div class="item">
				<div class="item-header">
					<img src={image_edgemontRobotics} alt="Edgemont Robotics logo" class="item-image" />
					<p class="company">Edgemont Robotics</p>
				</div>
				<div class="item-subheader">
					<p class="position">Website Developer</p>
					<p class="tenure">Sep 2021 - Jun 2022</p>
				</div>
				<p class="description">
					I rebuilt the team’s website from the ground up using primarily using Node.js and
					SvelteKit. I also taught myself basic web development and Git/GitHub and created
					documentation for future maintainers. Prior to the website rework, I assisted in teaching
					inexperienced members the basics of Java.
				</p>
			</div>

			<div class="item">
				<div class="item-header">
					<img src={image_dae} alt="DAE Logo" class="item-image" />
					<p class="company">The Digital Arts Experience</p>
				</div>
				<div class="item-subheader">
					<p class="position">Instructor</p>
					<p class="tenure">Aug 2019 - Aug 2021</p>
				</div>
				<p class="description">
					I instructed children aged 6-12 during a summer program at a STEM camp. Most of the
					classes I taught, both in-person and online due to COVID, were related to Scratch and the
					fundamentals of computer sciences. The classes required me to create projects that could
					be completed in around a week, were easy to follow, and left room for the students to add
					their own twist. Once the summer program ended, I transitioned to an after-school program
					also focusing on Scratch and fundamentals of computer science, but also video editing and
					graphic design in Photoshop.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
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
		max-width: 600px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-wrap: nowrap;
		color: currentColor;
		gap: 0;
		margin: 0 0 0 0;
		padding: 0 0 0 0;
	}

	/* .resume-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }

    .resume-link {
        text-decoration: none;
    }

	.btn {
		appearance: none;
		background-color: #2ea44f;
		border: 1px solid rgba(27, 31, 35, 0.15);
		border-radius: 6px;
		box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-family: var(--font-serif1);
		font-size: 20px;
		font-weight: 600;
		line-height: 20px;
		padding: 12px 22px;
		position: relative;
		text-align: center;
		text-decoration: none;
		user-select: none;
		touch-action: manipulation;
		vertical-align: middle;
		white-space: nowrap;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 7px;
	}

	.btn:focus:not(:focus-visible):not(.focus-visible) {
		box-shadow: none;
		outline: none;
	}

	.btn:hover {
		background-color: #2c974b;
        text-decoration: none;
	}

	.btn:focus {
		box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
		outline: none;
	}

	.btn:disabled {
		background-color: #94d3a2;
		border-color: rgba(27, 31, 35, 0.1);
		color: rgba(255, 255, 255, 0.8);
		cursor: default;
	}

	.btn:active {
		background-color: #298e46;
		box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
	} */

	.education-list {
		list-style-type: disc;
		margin: 0;
		padding-left: 1em;
		padding-top: 4px;
	}

	.el-item {
		margin: 1px;
		padding: 1px;
		font-family: var(--font-serif2);
	}

	.current,
	.previous {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 16px;
		margin: 0 0 0 0;
		padding: 0 0 0 0;
	}

	.item {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		/* align-items: center; */
		gap: 0;
		margin: 0 0 0 0;
		padding: 16px;
		border: 1px solid gray;
		border-radius: 5px;
	}

	.item-image {
		width: 50px;
		height: 50px;
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
		border-radius: 10%;
		flex-grow: 0;
	}

	.item-header {
		display: flex;
		flex-direction: row;
		/* justify-content: center; */
		align-items: center;
		gap: 1em;
	}

	.item-subheader {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-family: var(--font-serif2);
		padding-top: 4px;
	}

	.company {
		font-size: 28px;
		font-weight: 800;
		font-family: var(--font-serif1);
		margin: 0;
		flex-grow: 0;
	}

	.rpi {
		font-size: 30px;
	}

	.position {
		font-size: 22px;
		font-weight: 400;
		margin: 0;
	}

	.tenure {
		font-size: 18px;
	}

	.description {
		font-family: var(--font-serif2);
		font-size: 16px;
		padding-top: 4px;
	}

	p {
		margin: 0;
		color: currentColor;
	}

	h1 {
		font-family: var(--font-serif1);
		margin: 16px 0 16px 0;
	}

	@media (max-width: 768px) {
		.infopanel {
			display: none;
		}
		.item-image {
			width: 40px;
			height: 40px;
		}
		.company {
			font-size: 22px;
		}
		.rpi {
			font-size: 19px;
		}
		.position {
			font-size: 18px;
		}
		.tenure {
			font-size: 16px;
		}
		.description {
			font-size: 16px;
		}
		.el-item {
			font-size: 16px;
		}
	}
</style>
