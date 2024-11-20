<template>
	<div class="ui-preloader__wr">
		<div class="ui-preloader" />
	</div>
</template>

<style lang='scss'>
	.ui-preloader__wr {
		width: 100%;
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.ui-preloader
	{
		display: grid;
		place-items: center;
		max-width: 30px;
		max-height: 30px;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: conic-gradient(
			from 180deg at 50% 50%,
			#c4931f00 0deg,
			$main 360deg
		);
		animation: spin 2s infinite linear;

		&::before
		{
			content: "";
			border-radius: 50%;
			width: 80%;
			height: 80%;
			background-color: white;
		}
	}

	@keyframes spin
	{
		to { transform: rotate(1turn); }
	}
</style>