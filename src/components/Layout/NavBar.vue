<template>
	<nav
	  class="navbar is-success"
	  aria-label="main navigation"
	  role="navigation"
	>
  <div class="container is-max-desktop px-2">
		<div class="navbar-brand">
			<div class="navbar-item is-size-4 is-family-monospace">
				Note
			</div>

			<a
			  class="navbar-burger"
				@click.prevent="showMobileNav = !showMobileNav"
				:class="{ 'is-active': showMobileNav }"
			  aria-expanded="false"
			  aria-label="menu"
			  data-target="navbarBasicExample"
			  role="button"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">

			<div class="navbar-end">
				<RouterLink 
					class="navbar-item"
					to="/"
					active-class="is-active"
				>
					Notes
				</RouterLink>
				<RouterLink 
					class="navbar-item"
					to="/stats"
					active-class="is-active"
				>
					Stats
				</RouterLink>
			</div>
		</div>
	</div>
</nav>
</template>

<script setup>
	// imports
	import { ref } from 'vue'

	// mobile nav

	const showMobileNav = ref(false)
</script>

<style>

@media (max-width: 1023px) {
	.navbar-menu {
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
	}
}</style>