<script setup>
    const formVars = ref({
        country: '',
        date: '',
        money: '',
        count: '',
        kids: '',
        ageOfKids: '',
    })
</script>

<template>
    <div class="find-tour" id="tour">
        <uiSelect
            :value="formVars.country"
            :items="[{ title: 'Грузия' }, { title: 'Турция' }, { title: 'Египет' }, { title: 'ОАЭ' }, { title: 'Армения' }, { title: 'Тайланд' }, ]"
            placeholder="Страна"
            @update:value="(el) => {
                formVars.country = el.title;
                
            }"
        />
        <ui-input v-model:value="formVars.date" placeholder="Дата" />
        <ui-input v-model:value="formVars.money" placeholder="Бюджет" />
        <ui-input v-model:value="formVars.count" placeholder="Кол-во людей" />
        <ui-input v-model:value="formVars.kids" placeholder="Дети" />
        <ui-input v-model:value="formVars.ageOfKids" placeholder="Возраст детей" />
        <ui-button>Найти</ui-button>
    </div>
</template>

<style lang='scss'>
    .find-tour
    {
        margin-bottom: 50px;
        position: relative;
        z-index: 10;
        width: 90%;
        margin: 0 auto;
        top: -50px;
        background-color: $white;
        border-radius: 4px;
        padding: 20px 40px;

        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;

        @include mq($tablet)
        {
            grid-template-columns: repeat(2, 1fr);

            & > *:last-child { grid-column: 1 / 3; }
        }
    }
</style>