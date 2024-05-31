<script lang="ts" setup>
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


		<slot name="modal" />

		<main
			class="flex-1 2xl:w-[calc(100%-22rem)] transition-all duration-150 ease-in w-full min-h-screen bg-white-300"
		>

			<slot name="page-header" />

			<pageBody>
				<slot name="page-body" />
			</pageBody>
		</main>
	</div>
</template>
