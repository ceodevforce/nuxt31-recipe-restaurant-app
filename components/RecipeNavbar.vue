<template>
	<i-navbar>
    <i-navbar-brand to="/">
        Nuxt3 Recipe Restau
    </i-navbar-brand>
    <i-navbar-collapsible>
        <i-nav>
            <i-nav-item to="/recipes">
                Recipes
            </i-nav-item>
            <i-nav-item>
                About
            </i-nav-item>
            <i-nav-item>
                Contact
            </i-nav-item>
        </i-nav>
        <i-input placeholder="Type something..">
            <template #append>
                <!-- <i-button color="primary">
                    <i-icon name="ink-search" />
                </i-button> -->
            </template>
        </i-input>
        <i-nav>
        	<NuxtLink to="/auth/login">
        	<i-nav-item>
        		
        			Login
        		
        	</i-nav-item>
        	</NuxtLink>
        </i-nav>
    </i-navbar-collapsible>
</i-navbar>

</template>