<script lang="ts" setup>
import { useMessageCenterStore } from '@/stores'

const messageCenterStore = useMessageCenterStore()
const config = useRuntimeConfig()

const messageCenter = computed(() => messageCenterStore)
</script>

<template>
	<div class="flex flex-col min-h-screen bg-white-300">
		<MessageCenter
			v-if="messageCenter.visible && messageCenter.type === 'error'"
			:message="messageCenter.message"
			:color="messageCenter.type"
			@clear-message="() => messageCenter.$reset()"
		/>
		<div class="flex m-auto items-center">
			<div class="w-fit">
				<div class="mb-10 p-4">
					<img src="@/assets/images/logo2.png" class="h-fit w-auto" />
				</div>
				<slot />
			</div>
		</div>
		<div
			class="flex h-10 w-full bg-gray-600 text-white-100 items-center justify-center"
		>
			<p class="font-bold mr-3">© 2023 VertilinQ B.V.</p>
			<p>Version: {{ config.public.version }}</p>
		</div>
	</div>
</template>

<style lang="postcss">
html {
	@apply text-black-200 font-inter;
}

.router-link,
.router-link-exact-active {
	@apply text-blue-200;
	@apply font-black font-inter text-sm;
}
</style>
