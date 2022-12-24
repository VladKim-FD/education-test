<template>
<div class="ad-block">
    <div class="container registration-ad">
    <titleVue info="Стать преподавателем" />
    <p>Оставьте свои личные данные, и вы будете зарегистрированы в качестве преподавателя, как только запрос будет одобрен модератором</p>
    <a href="#!">Отправить</a>
</div>
<a href="#!" class="ad-btn">
    Стать преподавателем
</a>
</div>

</template>

<script>
    import titleVue from './title.vue';

    export default{
        components: {
            titleVue
        }
    }
</script>

<style lang="scss">
    @import '../scss/components/registrationAd.scss';
</style>