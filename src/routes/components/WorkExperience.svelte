<script>
    import { slide } from 'svelte/transition';
    import Icon from '@iconify/svelte';
    import Icon_RightCaret from '@iconify/icons-ph/caret-right-fill';
    import Icon_DownCaret from '@iconify/icons-ph/caret-down-fill';
    
    /**
     * @typedef {Object} ExperienceItem
     * @property {string} company
     * @property {string} url
     * @property {string} period
     * @property {string} role
     * @property {string} location
     * @property {string} description
     * @property {boolean} [hasCollapsible] - Whether this item has collapsible content
     * @property {Array<{title: string, videoUrl: string}>} [demoVideos] - Demo videos if collapsible
     */
    
    /** @type {ExperienceItem[]} */
    export let experiences = [];
    
    // For collapsible functionality
    let isCollapsibleOpen = false;
    function toggleCollapsible() {
        isCollapsibleOpen = !isCollapsibleOpen;
    }
</script>

<ol class="content">
    {#each experiences as experience}
        <li class="experience-item-larger-width content-item">
            <div class="content-box" style="max-width: none;">
                <span class="content-title">
                    <a href={experience.url} target="_blank" rel="noreferrer">{experience.company}</a>
                    <p>{experience.period}</p>
                </span>
                <div class="experience-details">
                    <p class="experience-role">{experience.role}</p>
                    <p class="experience-location">{experience.location}</p>
                </div>
                <p class="content-description">
                    {experience.description}
                </p>
                
                {#if experience.hasCollapsible && experience.demoVideos && experience.demoVideos.length > 0}
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
                                {#each experience.demoVideos as demo, index}
                                    <div class="collapsible-content-item">
                                        <p class="content-description">Demo {index + 1} - {demo.title}</p>
                                        <iframe width="560" height="315" src={demo.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>
        </li>
    {/each}
</ol>

<style>
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

    .experience-details {
        display: flex;
        justify-content: space-between;
        
    }

    .experience-role,
    .experience-location {
        font-size: 16px;
        font-family: var(--font-serif2);
        color: #d0d0d0;
        margin-bottom: 4px;
        padding: 0;
    }

    .experience-location {
        color: #8D8D8D;
    }

    .experience-item-larger-width {
        width: 80% !important;
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
        .content {
            flex-direction: column;
            width: 100%;
        }

        .content-item {
            width: 100%;
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
    }

    @media (prefers-color-scheme: dark) {
        .experience-role {
            color: #d0d0d0;
        }
    }

    @media (prefers-color-scheme: light) {
        .content-item {
            border: 0.0625rem solid #8D8D8D;
        }
        .content-description {
            color: #22272e;
        }
        .experience-role {
            color: #8D8D8D;
        }
    }
</style>