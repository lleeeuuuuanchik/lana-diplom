<script setup>
	import { vOnClickOutside } from '@vueuse/components';

	const props = defineProps({
		value: String,
		items: Array,
		disabled: Boolean,
		error: Boolean,
		placeholder: {
			type: String,
            default: 'Выберите параметр',
		},
	});

	const emit = defineEmits(['update:value']);

	const updateValue = (val) => {
		if (val.title === props.value)
			return;

		isOpen.value = false;
		!props.disabled ? emit('update:value', val) : '';
	};

	const isOpen = ref(false);

	const setFalse = () => isOpen.value = false;
</script>

<template>
	<div class="ui-select">
		<div
			:class="{
				'active': isOpen,
				'border': value,
				'error': error,
				'disabled': disabled
			}"
			class="ui-select__value"
			@click.stop="!disabled ? isOpen = !isOpen : ''"
		>
			<template v-if="value">
				{{ value }}
			</template>
			<template v-else>
				<span class="ui-select__value-empty">{{ placeholder }}</span>
			</template>

			<div class="ui-select__value-icon">
				<icons-mini-arrow />
			</div>
		</div>

		<transition>
			<div
				v-if="isOpen"
				v-on-click-outside.bubble="setFalse"
				class="g-dropdown"
			>
				<p
					class="g-dropdown__item"
					v-for="(el, i) in items"
					:key="i"
					:class="{ 'active': el.title === value }"
					@click="updateValue(el)"
				>
					{{ el.title }}
				</p>
			</div>
		</transition>
	</div>
</template>

<style lang='scss'>
	.ui-select
	{
		position: relative;
		height: max-content;
	}

	.ui-select__value
	{
		cursor: pointer;
		border: 1px solid $gray;
		padding: 12px 16px;

		display: flex;
		align-items: center;
		justify-content: space-between;

		border-radius: 4px;
		font-size: 14px;
		font-weight: 400;
		line-height: 21px;
		@include transition();

		&.active
		{
			border-color: $primary;

			.ui-select__value-icon { transform: rotate(270deg); }
		}

		&.disabled
		{
			cursor: not-allowed;
            opacity: 0.5;

			&:hover { border-color: $gray; }
		}

		&.border { border-color: $primary; }
		&.error { border-color: $red; }

		&:hover { border-color: $primary; }
	}

	.ui-select__value-empty { color: $gray }

	.ui-select__value-icon
	{
		line-height: 0;
		transform: rotate(90deg);
		@include transition();
	}
</style>