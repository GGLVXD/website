<script>
	let mobileMenuOpen = false;
  
	function toggleMenu() {
	  mobileMenuOpen = !mobileMenuOpen;
	}
  </script>
  
  <header class="header">
	<div class="logo">
	  <a href="/">GGLVXD.EU.ORG</a>
	</div>
	
	<button class="mobile-menu-btn" on:click={toggleMenu}>
	  <span>{mobileMenuOpen ? '✖' : '☰'}</span>
	</button>
  
	<nav class={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
	  <a href="/">Home</a>
	  <a href="/blog" target="_blank">Blog</a>
	  <a href="https://status.gglvxd.eu.org" target="_blank">Status</a>
	  <a href="https://github.com/gglvxd/website" target="_blank">Github</a>
	</nav>
  </header>
  
  <style>
	@import '../header/header.css';
  </style>
  