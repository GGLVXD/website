<script>
    const socialLinks = [
        { name: 'X', url: 'https://x.com/notgglvxd', icon: 'fa-brands fa-x-twitter' },
        { name: 'GitHub', url: 'https://github.com/gglvxd', icon: 'fa-brands fa-github' },
        { name: 'TikTok', url: 'https://tiktok.com/@gglvxd', icon: 'fa-brands fa-tiktok' },
        { name: 'Instagram', url: 'https://www.instagram.com/gglvxd/', icon: 'fa-brands fa-instagram' },
        { name: 'YouTube', url: 'https://www.youtube.com/@gglvxd', icon: 'fa-brands fa-youtube' }
    ];
    import '../footer/footer.css';
</script>

<footer>
    <div class="footer-content">
        <p>© 2020 GGLVXD.EU.ORG</p>
        <div class="social-icons">
            {#each socialLinks as { name, url, icon }}
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <i class={icon}></i>
                </a>
            {/each}
        </div>
    </div>
</footer>

<style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  </style>

