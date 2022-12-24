<template>
    <div class="container">
        <div class="accordion-block block">
            <h3>Материалы курса</h3>
            <div class="accordion">
                <div class="accordion-item" ref="accItem" v-for="(item, index) in accTitles">
                    <div class="acc-btn" >
                        <p>{{ item }}</p>
                        <div class="btn-right">
                            <p>{{ duration }}</p>
                            <div class="icon-chevron-down" ref="icon">
                            </div>
                        </div>
                    </div>
                    <div class="acc-content" :class="{ active: isActive }">
                        <ul>
                            <li v-for="item in accContent">
                                <div class="item-left">
                                    <div class="icon-play"></div>
                                    <p>{{ item.text }}</p>
                                </div>
                                <p>{{ item.time }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >

import { ref, onMounted, onBeforeMount } from 'vue';

export default {
    onMounted() {
        console.log(this.$refs.accBtn);
    },
    data() {
        return {
            isActive: false,
            selectedTab: 0,
            tabs: [],
            duration: '3 лекчии 29 мин',
            accTitles: [
                'Подготовка к работе',
                'Основы JavaScript',
                'JavaScript в работе',
                'Продвинутый JavaScript',
                'Библиотека React. Базовый уровень',
                'Библиотека React. Средный фундаментальный уровень',
                'React + Redux',
            ],
            accContent: [
                {
                    text: 'Любой редактор кода',
                    time: '06:11'
                },
                {
                    text: 'Желание выучить JavaScript',
                    time: '12:28'
                },
                {
                    text: 'Желательно базовое знание английского язык',
                    time: '10:33'
                }
            ]
        }
    },
    methods: {
    },
    mounted() {
        Array(this.$refs.accItem).forEach((el, index) => {
            for (let i = 0; i < el.length; i++) {
                el[i].firstChild.addEventListener('click', () => {
                    if (el[i].lastChild.style.maxHeight) {
                        el[i].lastChild.style.maxHeight = null;
                        el[i].lastChild.style.padding = '0';
                        this.$refs.icon[i].style.transform = 'rotate(-0)';
                        this.$refs.icon[i].style.transition = 'transform 0.5s';
                    } else {
                        el[i].lastChild.style.maxHeight = el[i].lastChild.scrollHeight + 30 + 'px';
                        el[i].lastChild.style.padding = '15px 25px';
                        this.$refs.icon[i].style.transform = 'rotate(180deg)';
                        this.$refs.icon[i].style.transition = 'transform 0.5s';
                    }
                })
            }
        })

    },
}
</script>

<style lang="scss">
@import '../scss/components/courseMaterial.scss';
</style>