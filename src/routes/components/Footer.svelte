<script>
	import github from '$lib/images/github-mark-white.svg';
    import { base } from '$app/paths';

</script>

<footer>
	<div class="desktop">
		<a href="https://github.com/nikapadia/website" target="_blank" rel="noreferrer">
			<img src={github} alt="github" class="github-image" width="50" />
		</a>
	</div>
	<div class="mobile"> 
        <!-- <a href="{base}/" class="link">Home</a> -->
        <a href="https://github.com/nikapadia/website" target="_blank" rel="noreferrer">
			<img src={github} alt="github" class="github-image" width="50" />
		</a>
        <!-- <a href="{base}/resume" class="link">Resume</a> -->
    </div>
</footer>

<style>
	footer {
		height: 50px;
		background-color: #2d333b;
		padding: 15px;
		text-align: center;
	}
    .desktop {
        display: inline;
    }
    .mobile {
        display: none;
    }
	.github-image {
		transition: all 0.2s ease-in-out;
		height: auto;
		width: 50px;
	}
	.github-image:hover {
		filter: brightness(0.7);
	}

    @media (max-width: 768px) {
        .desktop {
            display: none;
        }
        .mobile {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>
