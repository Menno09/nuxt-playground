<script lang="ts" setup>
import { useAdminStore, useMessageCenterStore } from '@/stores'

const messageCenterStore = useMessageCenterStore()

const messageCenter = computed(() => messageCenterStore)

const adminStore = useAdminStore()
const route = useRoute()
const store = JSON.parse(window.sessionStorage.client)

const openMenu = useState<boolean>(() => false)

onMounted(() => {
	window.setTimeout(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, 0)
})
</script>

<template>
	<div class="flex">
		<MessageCenter
			v-if="messageCenter.visible"
			:message="messageCenter.message"
			:color="messageCenter.type"
			@clear-message="() => messageCenter.$reset()"
		/>
		<Navigation
			:route="route"
			:company="store.company"
			:companies="store.companies"
			class="w-nav hidden 2xl:block translate-x-full 2xl:translate-x-0 transition-transform duration-150 ease-in"
			@switch="(value) => adminStore.switchCompany(store.user.id, value, '/')"
		/>
		<div v-if="openMenu" class="2xl:hidden">
			<div
				class="fixed opacity-50 bg-gray-500 w-screen h-screen top-0 left-0 z-40"
				@click="() => (openMenu = !openMenu)"
			/>
			<Navigation
				mobile
				:route="route"
				:company="store.company"
				:companies="store.companies"
				class="fixed top-0 z-50"
				@switch="(value) => adminStore.switchCompany(store.user.id, value, '/')"
			/>
		</div>

		<slot name="modal" />

		<main
			class="flex-1 2xl:w-[calc(100%-22rem)] transition-all duration-150 ease-in w-full min-h-screen bg-white-300"
		>
			<Header
				:authenticated="adminStore.authenticated"
				:current-route="route.name"
				:user="store.user"
				@logout="adminStore.logout()"
				@open-menu="() => (openMenu = !openMenu)"
			/>
			<slot name="page-header" />

			<pageBody>
				<slot name="page-body" />
			</pageBody>
		</main>
	</div>
</template>

<style lang="postcss">
html {
	@apply text-black-200 font-inter;
	@apply bg-white-100;
}
</style>
