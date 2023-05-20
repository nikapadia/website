<script>
	import github from '$lib/images/github-mark-white.svg';
</script>

<footer>
  <a href="https://github.com/nikapadia/nikapadia.github.io" target="_blank" rel="noreferrer">
    <img src={github} alt="github" class="github-image" width="50" height="50"/>
  </a>
</footer>

<style>
  footer {
    height: 50px;
    background-color: #2d333b;
    padding: 15px;
    text-align: center;
  }
  .github-image {
    transition: all .2s ease-in-out; 
    height: 50px;
    width: 50px;
  }
  .github-image:hover {
    filter: brightness(0.7);
  }
</style>
