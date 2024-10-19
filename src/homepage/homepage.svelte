
<script>
    const socialLinks = [
        { name: 'X', url: 'https://x.com/notgglvxd', icon: 'fa-brands fa-x-twitter' },
        { name: 'GitHub', url: 'https://github.com/gglvxd', icon: 'fa-brands fa-github' },
        { name: 'TikTok', url: 'https://tiktok.com/@gglvxd', icon: 'fa-brands fa-tiktok' },
        { name: 'Instagram', url: 'https://www.instagram.com/gglvxd/', icon: 'fa-brands fa-instagram' },
        { name: 'YouTube', url: 'https://www.youtube.com/@gglvxd', icon: 'fa-brands fa-youtube' }
    ];
    import { t } from '$lib/translations';
    const GGLVXD = 'GGLVXD';
</script>

<style>
    @import '../homepage/homepage.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
</style>

<div class="homepage-container">
    <div class="profile-card">
        <div class="pfp-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/gglvxd.png" alt="Profile Picture" class="pfp" />
        </div>
        <div class="info">
            <h1 class="name">{$t('homepage.gglvxd', { GGLVXD })}</h1>
        </div>
        <div class="social-icons">
            {#each socialLinks as { name, url, icon }}
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <i class={icon}></i>
                </a>
            {/each}
        </div>
    </div>
</div>
