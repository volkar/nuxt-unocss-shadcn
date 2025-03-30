<template>
	<div>
		<NuxtRouteAnnouncer />

		<div h-dvh flex items-center justify-center>
			<Button>
				<div i-mdi-alarm />
				Click me
			</Button>
		</div>
	</div>
</template>

<style>
	body,
	#app {
		min-height: 100%;
		min-height: 100dvh;
	}
	body {
		background-color: lightgray;
	}
</style>
