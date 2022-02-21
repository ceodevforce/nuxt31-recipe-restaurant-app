import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	buildModules: [
		'@inkline/nuxt',
		'@nuxtjs/strapi',
		'@pinia/nuxt'
	],
	modules: [
		'@formkit/nuxt',
	],
	inkline: {
        // Plugin options (optional)
    },
    strapi: {
    	url: process.env.STRAPI_URL || 'http://localhost:1337',
    	// key: 'authToken',
  		prefix: '/api',
  		version: 'v4',
  		cookie: {
  			maxAge: 3600 * 24 * 60
  		},
    }
})
