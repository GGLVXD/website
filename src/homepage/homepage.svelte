<script>
    import { onMount } from "svelte";
    import '../homepage/homepage.css';
  
    const socialLinks = [
      { name: "X", url: "https://x.com/notgglvxd", icon: "fa-brands fa-twitter" },
      { name: "GitHub", url: "https://github.com/gglvxd", icon: "fa-brands fa-github" },
      { name: "TikTok", url: "https://tiktok.com/@gglvxd", icon: "fa-brands fa-tiktok" },
      { name: "Instagram", url: "https://www.instagram.com/gglvxd/", icon: "fa-brands fa-instagram" },
      { name: "YouTube", url: "https://www.youtube.com/@gglvxd", icon: "fa-brands fa-youtube" }
    ];
  
    let showContent = false;
  
    onMount(() => {
      setTimeout(() => {
        showContent = true;
      }, 500); 
    });
  </script>
  
  <style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  </style>
  
  <main class="relative flex items-center justify-center min-h-screen bg-[#282c34] text-white overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-70 bg-cover bg-center bg-no-repeat" style="background-image: url('/banner.gif'); filter: blur(20px);"></div>
  
    <div class="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 bg-opacity-40 bg-white backdrop-blur-lg rounded-3xl shadow-2xl">
      <img
        src="/gglvxd.png"
        alt="Logo"
        class="w-20 md:w-28 animate-bounce mb-5"
        style="animation: fadeInUp 2s;"
      />
      <h1 class="text-3xl md:text-5xl font-bold tracking-wide animate-fadeIn">GGLVXD</h1>
      <p class="text-lg md:text-xl mt-3 tracking-wide text-gray-300 animate-fadeInUp">
        Programmer & Developer
      </p>
  
      <section
        class={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        } text-center px-5 mt-8 md:mt-12`}
      >
        <p class="text-md md:text-lg">
          Welcome to my portfolio! I'm <span class="text-blue-400 font-semibold">GGLVXD</span>, a passionate programmer who loves creating efficient and elegant code. Let's connect!
        </p>
      </section>
  
      <div
        class={`transition-transform duration-1000 ${
          showContent ? "translate-y-0" : "translate-y-10"
        } flex justify-center space-x-5 mt-8 md:mt-12`}
      >
        {#each socialLinks as link}
          <a
            href={link.url}
            target="_blank"
            class="text-gray-400 hover:text-white text-3xl transform hover:scale-125 transition-all duration-300"
            aria-label={link.name}
          >
            <i class={link.icon}></i>
          </a>
        {/each}
      </div>
    </div>
  </main>
  