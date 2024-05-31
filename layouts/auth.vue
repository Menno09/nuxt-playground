<script lang="ts" setup>
	const config = useRuntimeConfig()
</script>

<template>
	<div class="flex flex-col min-h-screen bg-white-300">

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

