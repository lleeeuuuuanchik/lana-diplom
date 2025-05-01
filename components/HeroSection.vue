<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { Pagination } from 'swiper/modules';

    const modules = [Pagination];

    const items = ref([
        'https://static.life.ru/posts/2017/08/1037065/211ef2b95b9b6fd6c8d01fc0dc1ef6ec.jpg',
        'https://www.geo-home.com/newsimages/407/23-07-1.jpg',
        'https://www.airarabia.com/sites/airarabia/files/gallery/3L249_AUH_toEgypt_HPage_EN.jpg',
    ])
</script>

<template>
    <div class="hero-section">
        <swiper
            :spaceBetween="30"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide
                v-for="el in items"
            >
                <img :src="el" alt="swiper-img">
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang='scss'>
    .hero-section
    {
        margin-bottom: 50px;
        width: 100%;

        img
        {
            width: 100%;
            height: 600px;
            object-fit: cover;
        }
    }
</style>