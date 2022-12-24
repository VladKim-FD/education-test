<template>
    <div>
        <Navbar></Navbar>
        <courseTop></courseTop>
        <courseInfo></courseInfo>
        <description></description>
        <learningDesc></learningDesc>
        <requirements></requirements>
        <courseMaterial></courseMaterial>
        <reviews></reviews>
        <adBtns></adBtns>
        <footerVue></footerVue>
        <modal v-show="this.$store.state.store.modal"></modal>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import courseTop from '../components/courseTop.vue';
import courseInfo from '../components/courseInfo.vue';
import description from '../components/description.vue';
import learningDesc from '../components/learningDesc.vue';
import requirements from '../components/requirements.vue';
import courseMaterial from '../components/courseMaterial.vue';
import reviews from '../components/reviews.vue';
import adBtns from '../components/adBtns.vue';
import footerVue from '../components/footer.vue';
import modal from '../components/modal.vue';
export default {
    components: {
        Navbar,
        courseTop,
        courseInfo,
        description,
        learningDesc,
        requirements,
        courseMaterial,
        reviews,
        adBtns,
        footerVue,
        modal
    },
    auth: true
}
</script>