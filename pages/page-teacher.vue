<template>
    <div>
        <NavbarVue></NavbarVue>
        <teacherAd></teacherAd>
        <possibilities></possibilities>
        <paymentSystem></paymentSystem>
        <registrationAd></registrationAd>
        <footerVue></footerVue>
    </div>
</template>

<script>

import NavbarVue from '../components/Navbar.vue';
import teacherAd from '../components/teacher-ad.vue';
import possibilities from '../components/possibilities.vue';
import paymentSystem from '../components/paymentSystem.vue';
import registrationAd from '../components/registrationAd.vue';
import footerVue from '../components/footer.vue';

export default {
    components: {
        NavbarVue,
        teacherAd,
        possibilities,
        paymentSystem,
        registrationAd,
        footerVue
    },
    auth: true
}
</script>