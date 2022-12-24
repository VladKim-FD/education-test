<template>
    <div class="container course-ad">

        <div class="info-left">
            <video src="../assets/videoplayback.mp4" controls></video>
        </div>
        <div class="info-right block">
            <h2>390 999 uzs</h2>
            <div class="ad-btns">
                <a href="#!" class="course-sell">
                    <div class="icon-trolley"></div>
                    <p>Купить курс</p>
                </a>
                <a href="#!" class="try-free">Попробуйте бесплатно</a>
            </div>
            <h3>Этот курс включает:</h3>
            <ul class="course-features">
                <li v-for="feature in $store.state.features">
                    <img :src="require(`../assets/images/icons/${feature.img}.svg`)" alt="">
                    <p>{{feature.text}}</p>
                </li>
            </ul>
            <div class="course-teacher">
                <h3>О преподавателе курса</h3>
                <div class="teacher-info">
                    <div class="teacher-info__top">
                        <img src="../assets/images/mikhail.png" alt="">
                        <div class="info-text">
                            <h5>Михаил Алиев</h5>
                            <p>Full Stack Разработчик</p>
                        </div>
                    </div>

                    <div class="info-bottom">
                        <div class="teacher-rating">
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
                        </div>
                        <div class="cources-count">
                            <div class="icon-list"></div>
                            <p>17 курсов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import titleVue from './title.vue';

export default {
    components: { titleVue },
    data() {
        return {

        }
    }
}

</script>

<style lang="scss" >
@import '../scss/components/courseInfo.scss';
</style>