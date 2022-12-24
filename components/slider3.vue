<template>
  <div class="slider3-block">
    <div class="container slider3-content">
      <div class="slider3-titles">
        <h4>Самые последние отзывы</h4>
        <h3>Отзывы пользователей</h3>
      </div>
      <div class="slider3" ref="slider3">
        <div class="slider3-track" :style="{
          'margin-left': '-' + (100 * this.$store.state.store.currentIndexSlider3) + '%'
          ,
        }">
          <div 
          class="slider3-item" 
          v-for="slide in this.$store.state.store.slider3" 
          ref="slide">
            <h4>{{ slide.title }}</h4>
            <p class="comment-text">{{ slide.text }}</p>
            <div :class="'comment-info ' + slide.class">
              <img :src="require(`../assets/images/${slide.img}.png`)" alt="">
              <div class="student-info">
                <p class="name">{{ slide.name }}</p>
                <p class="man-info">{{ slide.manInfo }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider3-controls">
        <div class="slider-control prev" @click="prevSlide">
          <div class="icon-prev">
          </div>
        </div>
        <div class="slider-control next" @click="nextSlide">
          <div class="icon-next">
          </div>
        </div>
      </div>
      <div class="slider-indicators">
        <div 
        class="indicator" 
        v-for="(indicator, index) in this.$store.state.store.slider3" :key="index"
        :class="{ active: currentIndex / 2 == index }" 
          @click="goToSlide(index)"></div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  mounted() {
    this.sliderItems = this.$refs.slide
  },
  data() {
    return {
      currentIndex: 0,
      slides: [],
      windowWidth: process.browser ? window.offsetWidth : null,
    }
  },
  methods: {
    setCurrentIndex() {
      this.currentIndex = index;
    },
    prevSlide() {
      this.$store.commit('store/prevSlideSlider3', this.sliderItems)
    },
    nextSlide() {
      this.$store.commit('store/nextSlideSlider3', this.sliderItems)
    },
    goToSlide(index) {
      // this.currentIndex = index * 2;
      // console.log(this.currentIndex);
      this.$store.commit('store/goToSlide', index)
      this.currentIndex = this.$store.state.store.currentIndexSlider3
    },

  },
}
</script>

<style lang="scss">
@import '../scss/components/slider3.scss';
</style>