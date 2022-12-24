<template>
  <div class="container possibilities-block">
     <titleVue info="Возможности для учителя"></titleVue>
     <div class="possibilities">
        <div class="possibility" v-for="item in $store.state.items">
            <div class="possibility-img">
                <img :src="require(`../assets/images/${item.img}.png`)" alt="">
            </div>
            <p>{{item.text}}</p>
        </div>
     </div>
  </div>

</template>

<script>
    import titleVue from '../components/title.vue';
    export default{
        components: {
            titleVue
        },
        data(){
            return {
               
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/components/possibilities.scss';
</style>