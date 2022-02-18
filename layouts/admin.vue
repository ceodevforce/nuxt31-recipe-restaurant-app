<script setup>
	const open = ref(false)
</script>
<template>
	<div>
		<i-layout>
    <RecipeSidebar />
    <i-layout vertical class="_padding-top:1/2">
        <i-sidebar v-model="open">
            <i-nav vertical>
                <i-nav-item to="/">
                    Home
                </i-nav-item>
                <i-collapsible>
                    <i-collapsible-item title="Menu">
                        <i-nav-item to="/about">
                            Add New Recipe
                        </i-nav-item>
                        <i-nav-item to="/about">
                            Show Recipes
                        </i-nav-item>
                        <i-nav-item to="/about">
                            Orders
                        </i-nav-item>
                    </i-collapsible-item>
                </i-collapsible>
                <i-nav-item to="/contact">
                    Contact
                </i-nav-item>
            </i-nav>
        </i-sidebar>
       <!-- content here -->
       <slot />
    </i-layout>
</i-layout>

	</div>
</template>