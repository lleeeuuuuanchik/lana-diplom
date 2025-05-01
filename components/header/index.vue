<template>
	<div class="container">
		<header class="header">
			<div class="header__logo">
				LAZAROVA-TOURS
			</div>
			<nav class="header__navigation">
				<a href="#tour" class="header__navigation-link">Найти тур</a>
				<a href="#the-tours" class="header__navigation-link">Наши туры</a>
				<a href="#about-us" class="header__navigation-link">О нас</a>
				<a href="#reviews" class="header__navigation-link">Отзывы</a>
				<a href="#blog" class="header__navigation-link">Блог</a>
			</nav>
		</header>
	</div>
</template>

<style lang='scss'>
	.header
	{
		margin-bottom: 50px;
		padding: 30px 0;
		border-bottom: 3px solid $primary;

		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 20px;
		
		@include mq($tablet)
		{
			flex-direction: row;
			justify-content: space-between;
		}
	}

	.header__logo
	{
		font-size: 1.5rem;
		font-weight: 600;
	}

	.header__navigation
	{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 25px;
		flex-wrap: wrap;
	}

	.header__navigation-link
	{
		font-size: 1rem; // 18px
		color: $black;

		@include transition();

		&:hover { color: $primary }
	}
</style>