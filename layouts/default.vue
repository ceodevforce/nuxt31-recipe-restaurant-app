<template>
    <div>
	<i-layout>
    <i-layout-header>
        <RecipeNavbar />
    </i-layout-header>

    <i-layout vertical>
        <!-- <i-layout-aside>
            Left Aside
        </i-layout-aside> -->

        <i-layout-content>
            <slot />
        </i-layout-content>

        <!-- <i-layout-aside>
            Right Aside
        </i-layout-aside> -->
    </i-layout>

    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>
</div>
</template>