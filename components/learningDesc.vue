<template>
    <div class="container">
        <div class="learning-description block">
            <h3>Чему вы научитесь</h3>
            <div class="description-lists">
                <ul>
                <li v-for="item in firstList">{{item}}</li>
            </ul>
            <ul>
                <li v-for="item in secondList">{{item}}</li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return {
                firstList: [
                    'Узнаете основы программирования и алгоритмов',
                    'Узнаете основные концепции и принципы JavaScript, от самых простых до самых сложных',
                    'Изучите такие популярные технологии как AJAX, JSON и тд',
                    'Научитесь работать с Git и GitHub',
                    'Научитесь работать с npm, Babel, Browserify, Webpack, Heroku, Firebase и тд',
                ],
                secondList: [
                    'Узнаете, какой фрэймворк или библиотеку выбрать в дальнейшем. Познакомишься с React, Angular, Vue, Jquery',
                    'Изучите библиотеку React и абсолютно все, что с ней связано (в том числе и Redux)',
                    'Научитесь создавать полноценные web-приложения',
                    'Закрепите всё, что узнали на реальных проектах',
                    
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/components/learningDesc.scss';
</style>