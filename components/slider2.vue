<template>
  <div class="slider2-block">
    <div class="container slider2-content">
      <div class="slider2-titles">
        <h4>Самые покупаемые курсы</h4>
        <h3>Популярные курсы</h3>
      </div>
      <div class="slider2">
        <div class="slider2-track" 
        :style="{ 'margin-left': '-' + (75 * this.$store.state.store.currentIndexSlider2) + '%' }"
        >
          <div class="slider2-item" 
          v-for="slide in this.$store.state.store.slider2"
          ref="sliderItem"
          >
            <img :src="require(`../assets/images/${slide.bg}.png`)" alt="">
            <div class="item-categoria" 
            :style="{ backgroundColor: slide.backgroundColor }">
              <p>{{ slide.categoria }}</p>
            </div>
            <div class="course-info">
              <h3>{{ slide.title }}</h3>
              <div class="course-rating2">
                <div class="level">
                  <div class="icon-level-wrapper">
                    <div class="icon-level"></div>
                  </div>
                  <p>{{ slide.level }}</p>
                </div>
                <div class="people">
                  <div class="people-icon-wrapper">
                    <div class="icon-people"></div>
                  </div>
                  <p>{{ slide.people }}</p>
                </div>
                <div class="rating">
                  <div class="rating-icon-wrapper">
                    <div class="icon-rating"></div>
                  </div>
                  <p>{{ slide.rating }}</p>
                </div>
              </div>
              <div class="course-extra-info">
                <div class="teacher">
                  <img :src="require(`../assets/images/${slide.avatar}.png`)" alt="">
                  <div :class="'teacher-info ' + slide.class">
                    <p class="name">{{ slide.name }}</p>
                    <p class="job">{{ slide.job }}</p>
                  </div>
                </div>
                <div class="price">{{ slide.price }}</div>
              </div>
            </div>
            <div class="slide-like">
              <div class="icon-like" @click="likeCourse">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider2-controls">
          <div class="slider-control prev" @click="prevSlide">
            <div class="icon-prev" >
            </div>
          </div>
          <div class="slider-control next" @click="nextSlide">
            <div class="icon-next" >
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted(){
    this.sliderItems = this.$refs.sliderItem
  },
  data() {
    return {
      currentIndex: 0,
      sliderItems: []
    }
  },
  methods: {
    likeCourse() {
      if (event.target.classList.contains('red')) {
        event.target.classList.remove('red')
      } else {
        event.target.classList.add('red')
      }
    },
    prevSlide(){
    this.$store.commit('store/prevSlideSlider2', this.sliderItems)
  } ,
  nextSlide(){
    this.$store.commit('store/nextSlideSlider2', this.sliderItems)
  }
  }
}
</script>

<style lang="scss">
@import '../scss/components/slider2.scss';
</style>