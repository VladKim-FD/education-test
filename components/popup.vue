<template>
    <div class="popup" id="popup">
        <div class="popup-content">
            <div class="popup-body">
                <h4>Авторизуйтесь!</h4>
                <form action="" @submit.prevent="login">
                    <input type="email" placeholder="Введите свой email" v-model="auth.email">
                    <!-- <p class="warning">
                        Заполните поле email
                    </p> -->
                    <!-- <p class="warning"></p> -->
                    <input type="password" placeholder="Введите свой пароль" v-model="auth.password">
                    <!-- <p class="warning">
                        Введите пароль
                    </p> -->
                    <!-- <p class="warning"></p> -->
                    <button type="submit" class="link-submit" @click="login">Отправить</button>
                    <!-- <div class="register-link" @click="redirect">
                        <a >Нет аккаунта?
                        </a>
                        <span >Зарегистрируйтесь!</span>
                    </div> -->
                    <div class="register-link" >
                        <span>Нет аккаунта?</span>
                        <NuxtLink to="/register">Зарегистрируйтесь!</NuxtLink>
                    </div>
                </form>
            </div>
        </div>
        <!-- <div class="snack-bar" 
        :class="{ active: snackBar }">
        <p>{{ snackBarText }}</p>
    </div> -->
    </div>
</template>


<script>
import { ref } from 'vue';
import { auth } from '../firebase/index'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

export default {
    data() {
        return {
            snackBar: false,
            snackBarText: 'No Error Message',
            auth: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            let that = this
            this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
                .then((user) => {
                    console.log(user);
                    $nuxt.$router.push('/')
                })
                .catch(function (error) {
                    console.log(error.message);
                    that.snackBarText = error.message
                    that.snackBar = true
                    $nuxt.$router.push('/login')
                    setTimeout(() => {
                        that.snackBar = false
                    }, 4000);
                })
        },
        redirect(){
            this.$router.push('/register')
        }
    }
}
</script>


<style lang="scss">
@import '../scss/components/popup.scss';
</style>