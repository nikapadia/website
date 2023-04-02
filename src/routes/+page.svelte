<script>
  import Icon from '@iconify/svelte';
  import graduationCap from '@iconify/icons-ph/graduation-cap';
  import mapTrifold from '@iconify/icons-ph/map-trifold';
  import cover_photo from '$lib/images/ori.png';
  import rcos from '$lib/images/rcos.png';
  import poly from '$lib/images/poly.png';
  import challenge_camp from '$lib/images/challenge_camp.png';
  import dae from '$lib/images/dae.png';
  import wordletogether from '$lib/images/wordletogether.png';
  import edgemont_robotics from '$lib/images/edgemont_robotics.png';
</script>

<svelte:head>
	<title>Nilay Kapadia</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="profile">
    <div class="picture">
      <picture>
        <img src="{cover_photo}" alt="Cover" class="cover-photo">
      </picture>
    </div>
    <div class="info-box">
      <h3 class="name">Nilay Kapadia</h3>
      <h3 class="username">nikapadia</h3>
      <div class="info-box-sub">
        <div class="info-box-item"><Icon icon={graduationCap} /> Rensselaer Polytechnic Institute</div>
        <div class="info-box-item"><Icon icon={mapTrifold} /> New York</div>
      </div>
    </div>

    <hr />
    <div class="organizations">
      <div class="org-title">Organizations</div>
      <div class="org-list">
        <div class="org-item">
          <a href="https://new.rcos.io/" target="_blank" rel="noreferrer">
            <img src="{rcos}" alt="RCOS" class="org-item-logo-img">
          </a>
        </div>
        <div class="org-item">
          <a href="https://poly.rpi.edu/" target="_blank" rel="noreferrer">
            <img src="{poly}" alt="The Polytechnic" class="org-item-logo-img">
          </a>
        </div>
        <div class="org-item">
          <a href="https://wordletogether.com/" target="_blank" rel="noreferrer">
            <img src="{wordletogether}" alt="WordleTogether.com" class="org-item-logo-img">
          </a>
        </div>
        <div class="org-item">
          <a href="https://challengecamps.com/" target="_blank" rel="noreferrer">
            <img src="{challenge_camp}" alt="Challenge Camp" class="org-item-logo-img">
          </a>
        </div>
        <div class="org-item">
          <a href="https://edgemontrobotics.github.io/" target="_blank" rel="noreferrer">
            <img src="{edgemont_robotics}" alt="Edgemont Robotics Team" class="org-item-logo-img">
          </a>
        </div>
        <div class="org-item">
          <a href="https://www.thedae.com/" target="_blank" rel="noreferrer">
            <img src="{dae}" alt="Challenge Camp" class="org-item-logo-img">
          </a>
        </div>
      </div>
    </div>
  </div>


</section>

<style>
  
/*   h1 {
    width: 100%;
    font-size: 1em;
	} */
  
  .profile {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  }

  hr {
    max-width: 300px;
    margin: 20px 0 20px 0;
  }

  .info-box {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    flex-wrap: nowrap;
    color: white;
    gap: 0;
  }

  .info-box-item {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 0.5em;
    font-size: 15px;
    font-weight: 400;
    margin: 0 0 0.5em 0;
  }
  .name {
    margin: 20px 0 0 0;
    font-size: 20px;
    font-weight: bold;
  }
  .username {
    font-size: 20px;
    font-weight: lighter;
    margin: 0 0 20px 0;
  }

  .org-title {
    color: white;
    font-size: 20px;
    margin: 0 0 5px 0;
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
    display:inline-block;
    vertical-align:middle;
    border-radius: 20%; 
  }


  .cover-photo {
    width: 296px;
    height: 296px;
    border-radius: 50%;
    overflow: hidden;
    display:inline-block;
    vertical-align:middle;
    border: 2px solid gray;
  }

</style>
