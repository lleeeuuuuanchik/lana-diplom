<script setup>
	// все просы компонента
	const props = defineProps({
		// пропс для выставления типа инпута ( tel, date, text и т.д )
		type: { type: String, default: 'text', },

		// значение
		value: { type: String, required: true },

		// плейсхолдер
		placeholder: { type: String, default: '' },

		// для ошибки
		error: { type: Boolean, default: false },

		// если инпут должен быть с телефонной маской
		isPhone: { type: Boolean, default: false },
	});

	// emit
	const emit = defineEmits(['update:value']);

	// functions
	const updateValue = (value) => emit('update:value', value);
</script>

<template>
	<input
		v-if="!isPhone"
		class="ui-input"
		:class="{'error': error}"
		:type="type"
		:value="value"
		:placeholder="placeholder"
		@input="updateValue($event.target.value)"
	>
	<input
		v-else
		class="ui-input"
		:class="{'error': error}"
		v-maska
		data-maska="+7 (###) ###-##-##"
		:type="type"
		:value="value"
		:placeholder="placeholder"
		@input="updateValue($event.target.value)"
	>
</template>

<style lang='scss'>
	.ui-input {
		// default
		padding: 12px 16px;
		border: 1px solid $gray;
		outline: none;
		background-color: transparent;
		@include transition();

		// text
		color: $black;
		font-size: 14px;
		font-weight: 400;
		line-height: 21px;

		// effects
		&:hover { border-color: $black; }
		&::placeholder { color: $gray; }

		// доп св-ва
		&.error { border-color: $red; }
	}
</style>