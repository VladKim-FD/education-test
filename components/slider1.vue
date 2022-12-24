<template>
  <div class="slider1-block">
    <div class="slider1-content container" >
      <div class="slider1-titles">
        <h4>Последние добавленные</h4>
        <h3>Новые курсы</h3>
      </div>
       <div class="slider1" >
        <div class="slider1-track" 
        :style="{ 'margin-left': '-' + (75 * this.$store.state.store.currentIndexSlider1) + '%'}">
            <div class="slider1-item" 
            v-for="(slide, index) in $store.state.store.slider1" 
            :key="index"
            ref="sliderItem">
               <img :src="require(`../assets/images/${slide.img}.png`)" alt="">
               <div class="item-course-info">
                 <h3>{{slide.title}}</h3>
                 <div class="course-rating">
                  <div class="level">
                    <div class="icon-level-wrapper">
                      <div class="icon-level"></div>
                    </div>
                    <p>{{slide.level}}</p>
                  </div>
                  <div class="people">
                    <div class="people-icon-wrapper">
                      <div class="icon-people"></div>
                    </div>
                    <p>{{slide.people}}</p>
                  </div>
                  <div class="rating">
                    <div class="rating-icon-wrapper">
                      <div class="icon-rating yellow"></div>
                    </div>
                    <p>{{slide.rating}}</p>
                  </div>
                 </div>
                 <div class="course-extraInfo">
                    <div class="teacher">
                      <img :src="require(`../assets/images/${slide.avatar}.png`)" alt="">
                      <div :class="'teacher-info ' + slide.class">
                        <p class="name">{{slide.name}}</p>
                        <p class="job">{{slide.job}}</p>
                      </div>
                    </div>
                    <p class="price">{{slide.price}}</p>
                 </div>
               </div>
               <div class="slide-like">
                  <div class="icon-like" @click="$store.commit('likeCourse')">
                  </div>
               </div>
            </div>
        </div>
       </div>
       <div class="slider1-controls">
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

export default{

mounted(){
this.sliderItems = this.$refs.sliderItem
},
data(){
    return {
      currentIndex: 0,
      sliderItems: []
    };
},
methods: {
  prevSlide(){
    this.$store.commit('store/prevSlideSlider1', this.sliderItems)
  } ,
  nextSlide(){
    this.$store.commit('store/nextSlideSlider1', this.sliderItems)
  }
},
}
</script>

<style lang="scss">
@import '../scss/components/slider1.scss';
</style>