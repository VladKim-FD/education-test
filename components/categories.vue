<template>
<div class="categories-block">
    <div class="container">
       <div class="categories-text">
        <div class="text-left">
            <p>Самые просматриваемые</p>
            <h4>Популярные категории</h4>
        </div>
        <a href="" >Все категории</a>
       </div>
     <div class="popular-categories">
      <div class="popular-categoria" v-for="categoria in $store.state.store.popularCategories">
      <img :src="require(`../assets/images/${categoria.img}.png`)" alt="">
      <p>{{categoria.text}}</p>
      </div>
      
    </div>
    <div class="popular-categories-phone">
         <div :class="'categoria-small ' + categoria.class" v-for="categoria in $store.state.popularCategoriesExtra">
         <img :src="require(`../assets/images/${categoria.img}.png`)" alt="">
         <p>{{categoria.text}}</p>
         </div>
      </div>
    </div>
    
</div>
</template>


<script>
export default {
    data(){
        return {
           
            
        }
    }
}

</script>

<style lang="scss">
 @import '../scss/components/categories.scss';
</style>