<script setup>
// import { ref, reactive, onMounted } from 'vue'

const username = ref('')
const password = ref('')
const email = ref('')
const phoneNumber = ref('')
	



const { login } = useStrapiAuth()
const router = useRouter()

const onSubmit = async () => {
  try {
    await login({ identifier: username.value, password: password.value })

    router.push('/')
  } catch (e) {}
}



</script>
<template>
	<div>
		<h1>Login</h1>
		<div>
			<form @submit.prevent="onSubmit">
			<i-input v-model="username" type="text" placeholder="Enter username" />
			<i-input v-model="password" type="password" placeholder="Enter password"/>
<!-- 			<i-input v-model="email" type="email" placeholder="Enter email"/>
 -->			<!-- <i-input v-model="phoneNumber" type="number" placeholder="Enter phone number"/> -->
        	<i-button type="submit">Button</i-button>
		</form>
		</div>
	</div>
</template>