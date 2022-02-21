<template>
    <div>
	<i-navbar id="rec-globNav">
    <i-navbar-brand to="/">
        Nuxt3 Recipe Restau
    </i-navbar-brand>
    <i-navbar-collapsible>
        <i-nav>
            <i-nav-item to="/recipes">
                Recipes
            </i-nav-item>
            <i-nav-item to="/about">
                About
            </i-nav-item>
            <i-nav-item>
                Contact
            </i-nav-item>
        </i-nav>
        <i-input placeholder="Type something..">
            <template #append>
             
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
</div>
</template>
<style scoped>
    #rec-globNav {
        box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
        background-color: #fff;
    }
</style>