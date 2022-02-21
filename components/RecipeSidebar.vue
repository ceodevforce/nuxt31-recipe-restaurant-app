<script setup>
	const open = ref(false)
</script>
<template>
    <div>
	<i-layout-header>
        <i-navbar fluid :collapse="false">
            <i-navbar-brand to="/">
                Nuxt3 Recipe Strapi
            </i-navbar-brand>
            <i-hamburger-menu v-model="open" animation="arrow-left" class="_lg:hidden" />
        </i-navbar>
    </i-layout-header>
</div>
</template>