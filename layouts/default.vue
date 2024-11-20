<script setup>
    // if page loading
	const nuxtApp = useNuxtApp();

	nuxtApp.hook("page:start", () => loading.value = true);
	nuxtApp.hook("page:finish", () => loading.value = false);
</script>

<template>
    <div class="default-layout">
        <main class="default-layout__main">
            <slot />
        </main>
    </div>
</template>

<style lang='scss'>
    .default-layout
    {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 1fr;
	}
</style>