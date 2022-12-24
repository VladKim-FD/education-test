<template>
  <div>
    <NavbarVue></NavbarVue>
    <headerVue></headerVue>
    <slider1></slider1>
    <slider2></slider2>
    <categoriesVue></categoriesVue>
    <advertisement></advertisement>
    <slider3></slider3>
    <footerVue></footerVue>
    <bottomVue></bottomVue>
  </div>
</template>

<script>
// import NavbarVue from '../Navbar.vue';
import NavbarVue from '../components/Navbar.vue'
import headerVue from '../components/header.vue';
import slider1 from '../components/slider1.vue';
import slider2 from '../components/slider2.vue';
import categoriesVue from '../components/categories.vue';
import advertisement from '../components/advertisement.vue';
import slider3 from '../components/slider3.vue';
import footerVue from '../components/footer.vue';
import bottomVue from '../components/bottom.vue';


export default {
  name: 'App',
  components: {
    NavbarVue,
    headerVue,
    slider1,
    slider2,
    categoriesVue,
    advertisement,
    slider3,
    footerVue,
    bottomVue
  },
  auth: true
}
</script>