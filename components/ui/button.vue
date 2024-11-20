<script setup>
	const props = defineProps({
		type: String,
		huge: Boolean,
	})
</script>

<template>
	<button
		class="ui-button"
		:class="{
			'border': type === 'border',
			'huge': huge,
		}"
	>
		<slot />
	</button>
</template>

<style lang='scss'>
	.ui-button
	{
		cursor: pointer;
		border: none;
		padding: 12px 24px;
		border: 1px solid $main;
		background-color: $main;
		color: $white;
		font-size: 14px;
		font-weight: 600;
		line-height: 21px;
		@include transition();

		&:hover { background-color: #D4A32F; border-color: #D4A32F; }

		&.huge { padding: 20px 64px; }
		&.border
		{
			background-color: transparent;
			border: 1px solid $black;
			color: $black;

			&:hover { background-color: $black; color: $white; }
		}
	}
</style>