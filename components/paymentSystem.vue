<template>

    <div class="container payment-info">
        <div class="coin-img">
            <img src="../assets/images/coin.png" alt="">
        </div>
        <div class="payment-text">
            <titleVue info="Платежная система" />
            <p>После того, как вы создадите свой курс, 15% будет добавлено к фиксированной сумме для каждого курса. Пользователям курса предоставляется 15% надбавка ко всем тарифам, введенным вами</p>
        </div>
    </div>
</template>

<script>
import titleVue from './title.vue';
export default{
    components : {
        titleVue
    },
    data(){
        return {
            
        }
    }
}

</script>

<style lang="scss">
    @import '../scss/components/paymentSystem.scss';
</style>