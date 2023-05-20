<script>
	import { onMount } from 'svelte';

	import Icon from '@iconify/svelte';
	import icon_arrowSquareOutBold from '@iconify/icons-ph/arrow-square-out-bold';

	import image_poly from '$lib/images/poly.webp';
	import image_degreeDoctor from '$lib/images/degree_doctor.webp';
	import image_wordleTogether from '$lib/images/wordletogether.webp';
	import image_challengeCamp from '$lib/images/challenge_camp.webp';
	import image_dae from '$lib/images/dae.webp';
	import image_edgemontRobotics from '$lib/images/edgemont_robotics.webp';
    import image_ehs from '$lib/images/ehs.webp';
    import image_rpiSeal from '$lib/images/rpi_seal.webp';
</script>

<section>
	<div class="main">
		<h1 style="margin-top: 0;">Education</h1>
        <div class="item">
            <div class="item-header">
                <img src={image_rpiSeal} alt="Rensselaer Polytechnic Institute Seal" class="item-image" />
                <p class="company" style="font-size: 28px">Rensselaer Polytechnic Institute</p>
                <a href="https://rpi.edu/" target="_blank" rel="noreferrer" class="icon-link">
                    <Icon icon={icon_arrowSquareOutBold} width="26" />
                </a>
            </div>
            <div class="item-subheader">
                <p class="position">B.S. in Computer Science</p>
                <p class="tenure">2022 - 2026</p>
            </div>            
            <ul class="education-list">
                <li class="el-item">Relevant Coursework: Foundations of Computer Science, Computer Organization, Data Structures, Calclus I/II</li>
                <li class="el-item">Awards/Honors: Rensselaer Leadership Scholarship</li>
            </ul>
        </div>
		<h1>Current Work</h1>
		<div class="current">
			<div class="item">
				<div class="item-header">
					<img src={image_poly} alt="The Polytechnic Logo" class="item-image" />
					<p class="company">The Polytechnic</p>
					<a href="https://poly.rpi.edu/" target="_blank" rel="noreferrer" class="icon-link">
						<Icon icon={icon_arrowSquareOutBold} width="26" />
					</a>
				</div>
				<div class="item-subheader">
					<p class="position">News Editor</p>
					<p class="tenure">Sep 2022 - Present</p>
				</div>
				<p class="description">
					As News Editor for the school paper, I oversee final edits for publication, set style
					guidelines and manage the entire news division. I have also conducted interviews with
					school deans as part of an information gathering assignment to understand the future of
					their schools and the Institute as a whole.
				</p>
			</div>
		</div>
		<!-- <hr /> -->
		<h1>Prior Work</h1>
		<div class="previous">
			<div class="item">
				<div class="item-header">
					<img src={image_degreeDoctor} alt="Degree Doctor" class="item-image" />
					<p class="company">Degree Doctor</p>
					<a href="https://degreedoctor.org/" target="_blank" rel="noreferrer" class="icon-link">
						<Icon icon={icon_arrowSquareOutBold} width="26" />
					</a>
				</div>
				<div class="item-subheader">
					<p class="position">Frontend Developer</p>
					<p class="tenure">Jan 2023 - May 2023</p>
				</div>
				<p class="description">
					Degree Doctor was a team of 8 students, a part of the Rensselaer Center for Open Source,
					which created a web app that lets students create and manage their college degree. The app
					is built using VueJS app built with Quasar framework and uses a Python scraper to get data
					from various school websites. My role was to take currently existing UI elements and
					improve their functionality and usability. Most of the work is self-directed, but I worked
					with other members of the frontend team to create a general plan for how we wanted the
					site to look.
				</p>
			</div>

			<div class="item">
				<div class="item-header">
					<img src={image_challengeCamp} alt="Challenge Camp logo" class="item-image" />
					<p class="company">Challenge Camp</p>
					<a href="https://challengecamps.com/" target="_blank" rel="noreferrer" class="icon-link">
						<Icon icon={icon_arrowSquareOutBold} width="26" />
					</a>
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
					<a href="https://wordletogether.com/" target="_blank" rel="noreferrer" class="icon-link">
						<Icon icon={icon_arrowSquareOutBold} width="26" />
					</a>
				</div>
				<div class="item-subheader">
					<p class="position">Backend Developer</p>
					<p class="tenure">Jan 2022 - Jan 2023</p>
				</div>
				<p class="description">
					WordleTogether is a multiplayer version of the game Wordle that I helped to create with a
					friend. While my friend created the actual game, I set up all the necessary backend
					infrastructure. This included an AWS EC2 instance for the server along with routing
					traffic through Cloudflare. We estimated that the game was played by over 200,000 unique
					players at some point during the first year.
				</p>
			</div>

			<div class="item">
				<div class="item-header">
					<img src={image_edgemontRobotics} alt="Edgemont Robotics logo" class="item-image" />
					<p class="company">Edgemont Robotics</p>
					<a
						href="https://edgemontrobotics.github.io/"
						target="_blank"
						rel="noreferrer"
						class="icon-link"
					>
						<Icon icon={icon_arrowSquareOutBold} width="26" />
					</a>
				</div>
				<div class="item-subheader">
					<p class="position">Website Developer</p>
					<p class="tenure">Sep 2021 - Jun 2022</p>
				</div>
				<p class="description">
					I created a website using basic HTML/CSS and a handful for Bootstrap elements. Later, I
					completely redesigned the website from the ground up. Instead of basic HTML/CSS and
					Bootstrap, the new website used SvelteKit, a compiled, component-based JavaScript
					framework. Part of the rework involved making the website mobile compatible as the
					previous website did not function properly on mobile. While making the site, I taught
					myself Git flow and GitHub repo management and created documentation for future
					maintainers.
				</p>
			</div>

			<div class="item">
				<div class="item-header">
					<img src={image_dae} alt="DAE Logo" class="item-image" />
					<p class="company">The Digital Arts Experience</p>
					<a
						href="https://sites.google.com/thedae.com/thedae"
						target="_blank"
						rel="noreferrer"
						class="icon-link"
					>
						<Icon icon={icon_arrowSquareOutBold} width="26" />
					</a>
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

    .education-list {
        list-style-type: disc;
        margin: 0;
        padding-left: 1em;
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
	}

	.icon-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		color: currentColor;
	}

	.icon-link:hover {
		filter: brightness(0.7);
	}

	.company {
		font-size: 28px;
		font-weight: 800;
		font-family: var(--font-serif1);
		margin: 0;
		flex-grow: 0;
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
	}

	p {
		margin: 0;
		color: currentColor;
	}

	h1 {
		font-family: var(--font-serif1);
		margin: 16px 0 16px 0;
	}

</style>
