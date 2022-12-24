<template>
<div class="ad-block">
    <div class="container ad-info">
        <div class="ad-text">
            <h3>Станьте <span>преподавателем</span> </h3>
            <p>Преподаватели со всего мира обучают миллионы студентов на Uzstudy. Мы даем вам средства преподавать то, что вы любите.</p>
            <NuxtLink to="/page-teacher">Cтать преподавателем</NuxtLink>
        </div>
        <div class="ad-img">
            <img src="../assets/images/cosmonaut.png" alt="" class="first-cosmonaut">
            <img src="../assets/images/cosmonaut-2.png" alt="" class="second-cosmonaut">
        </div>
        
    </div>
</div>
</template>

<script>
export default{
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss">
@import '../scss/components/advertisement.scss';
</style>