<template>
    <div class="popup" id="popup">
        <div class="popup-content">
            <div class="popup-body">
                <h4>Станьте преподавателем!</h4>
                <form action="" @submit.prevent="register">
                    <!-- <input 
                    type="text" 
                    placeholder="Введите свои имя и фамилию"
                    v-model="register_form.name"
                    > -->
                    <!-- <p class="warning">Введите имя</p> -->
                    <input type="email" placeholder="Введите свой email" v-model="register_form.email">
                    <!-- <p class="warning">Заполните поле email</p> -->
                    <!-- <p class="warning"></p> -->
                    <input type="password" placeholder="Введите пароль" v-model="register_form.password">
                    <!-- <p class="warning">
                        Введите пароль
                    </p> -->
                    <!-- <p class="warning"></p> -->
                    <!-- <NuxtLink to="/" class="link-submit">Зарегистрироваться</NuxtLink> -->
                    <button type="submit" class="link-submit" @click="register">Зарегестрироваться</button>
                </form>
            </div>
        </div>
        <!-- <div class="snack-bar" :class="{ active: snackBar }">
            <p>{{snackBarText}}</p>
        </div> -->
    </div>

</template>

<script>

import { auth } from '../firebase/index'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

export default {
    data() {
        return {
            register_form: {
                password: '',
                email: ''
            },
            snackBar: false,
            snackBarText: '',
        }
    },
    methods: {
        register() {
            let that = this
            this.$fire.auth.createUserWithEmailAndPassword(this.register_form.email, this.register_form.password)
                .then((user) => {
                    console.log(user);
                    $nuxt.$router.push('/')
                })
                .catch(function (error) {
                    console.log(error.message);
                    that.snackBarText = error.message
                    that.snackBar = true
                    $nuxt.$router.push('/register')
                    setTimeout(() => {
                        that.snackBar = false
                    }, 4000);
                })
        }
    }
}
</script>

<style lang="scss">
@import '../scss/components/popup.scss';
</style>