<script setup>
const tours = ref([
    {
        title: 'Романтический Париж',
        description: 'Погрузитесь в атмосферу любви и изысканности в столице Франции. Посетите Эйфелеву башню, Лувр, Монмартр и насладитесь круассанами в уютных кафе.',
        img: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        title: 'Загадочный Египет',
        description: 'Откройте тайны древних фараонов, посетите пирамиды Гизы, прокатитесь на верблюде по пустыне и погрузитесь в подводный мир Красного моря.',
        img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        title: 'Приключения в Исландии',
        description: 'Ледники, водопады, гейзеры и северное сияние! Исландия подарит вам незабываемые впечатления от дикой природы.',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        title: 'Экзотический Таиланд',
        description: 'Белоснежные пляжи, яркие храмы, вкусная уличная еда и незабываемые экскурсии в джунгли. Идеальный отдых для любителей приключений!',
        img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        title: 'Японские традиции: Токио и Киото',
        description: 'Погрузитесь в культуру самураев, попробуйте суши от мастеров, посетите древние храмы и современные небоскребы.',
        img: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
])
</script>

<template>
    <h2 style="margin-bottom: 30px; font-size: 3rem;">Наши туры</h2>
    <section class="the-tours" id="the-tours">
        <div v-for="(tour, index) in tours" :key="index" class="tour-card">
            <div class="tour-card__image-wrapper">
                <img :src="tour.img" :alt="tour.title" class="tour-card__image">
            </div>
            <div class="tour-card__overlay">
                <h3 class="tour-card__title">{{ tour.title }}</h3>
                <p class="tour-card__description">{{ tour.description }}</p>
                <div class="line" />
                <ui-button>Забронировать</ui-button>
            </div>
        </div>
    </section>
</template>

<style lang='scss'>
.the-tours {
    margin-bottom: 40px;
    display: grid;
    gap: 20px;
}

.tour-card {
    display: grid;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @include mq($tablet)
    {
        grid-template-columns: 1fr 2fr;
        align-items: center;
    }

    .line
    {
        margin-bottom: 20px;
        width: 300px;
        height: 5px;
        border-radius: 2px;
        background-color: $primary;
    }
}

.tour-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.tour-card__image-wrapper {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.tour-card__image {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.tour-card__overlay {
    color: white;
    padding: 20px;
}

.tour-card__title {
    margin: 0 0 10px;
    font-size: 2rem;
    color: $black;
}

.tour-card__description {
    margin: 0 0 15px;
    font-size: 1.2rem;
    color: $gray;
}
</style>