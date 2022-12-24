<template>
<div class="container">
    <div class="top-text">
        <p>Главная</p>
        <div class="icon-next"></div>
        <p>Программирование</p>
        <div class="icon-next"></div>
        <span>Веб разработка - с нуля до профессионала. Full Stack</span>
    </div>
    <h1>Веб разработка - с нуля до профессионала. Full Stack</h1>
    <div class="course-short-description">
        <div class="course-categoria">
            <p>Программирование</p>
        </div>
        <!-- <div class="course-valuation">
            <p>5.0</p>
        <ul>
            <li>
                <div class="icon-star"></div>
            </li>
            <li>
                <div class="icon-star"></div>
            </li>
            <li>
                <div class="icon-star"></div>
            </li>
            <li>
                <div class="icon-star"></div>
            </li>
            <li>
                <div class="icon-star"></div>
            </li>
            
        </ul>
        </div> -->
    </div>
    <div class="course-details">
        <div class="details-text">
            <div class="date">
               <h5>Дата создания</h5>
               <p>Январь 2022</p>
            </div>
            <div class="course-level">
                <h5>Уровень</h5>
               <p>Начальный</p>
            </div>
            <div class="students">
                <h5>Студенты</h5>
               <p>589</p>
            </div>
            <div class="language">
                <h5>Язык</h5>
               <p>Русский</p>
            </div>
        </div>
        <div class="details-btns">
            <div class="detail-btn">
                <div class="icon-heart" @click="like"></div>
                <p>Избранные</p>
            </div> 
            <div class="detail-btn">
                <div class="icon-share"></div>
                <p>Поделиться</p>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    export default{
        methods: {
            like(){
                if(event.currentTarget.classList.contains('red'))
                {
                    event.currentTarget.classList.remove('red')  
                }
                else{
                    event.currentTarget.classList.add('red') 
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/components/courseTop.scss';
</style>

