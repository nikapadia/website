<script>
    /**
     * @typedef {Object} Project
     * @property {string} title - Project title
     * @property {string} url - Project URL
     * @property {string} description - Project description
     */
    
    /** @type {Project[]} */
    export let projects = [];
</script>

<ol class="content">
    {#each projects as project}
        <li class="content-item">
            <div class="content-box">
                <span class="content-title">
                    {#if project.url && project.url !== ""}
                        <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a>
                    {:else}
                        <span style="color: #539bf5;">{project.title}</span>
                    {/if}
                </span>
                <p class="content-description">
                    {project.description}
                </p>
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

    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            width: 100%;
        }

        .content-item {
            width: 100%;
        }
    }

    @media (prefers-color-scheme: light) {
        .content-item {
            border: 0.0625rem solid #8D8D8D;
        }
        .content-description {
            color: #22272e;
        }
    }
</style>