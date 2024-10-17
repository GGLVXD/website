<script>
	let isMenuOpen = false;
	let links = [
		{ name: "Home", url: "/" },
		{ name: "Status", url: "https://status.gglvxd.eu.org" },
		{ name: "Repo", url: "https://github.com/gglvxd/website" }
	];

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<header>
	<div class="logo">
		<a href="/">GGLVXD.EU.ORG</a>
	</div>

	<nav>
		<ul class:isOpen={isMenuOpen} class:isClosed={!isMenuOpen}>
			{#each links as link}
				<li><a href={link.url} target="_blank" rel="noopener">{link.name}</a></li>
			{/each}
		</ul>
		<div class="hamburger" on:click={toggleMenu} class:isOpen={isMenuOpen}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</nav>
</header>

<style>
	@import 'header.css';
</style>
