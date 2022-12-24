<template>
  <nav>
    <div class="container nav-content">
      <div class="burger-menu" @click="burgerMenu">
        <img src="../assets/images/icons/burger-menu.svg" alt="">
      </div>
      <div class="nav-left">
        <a href="/" class="nav-logo">
          <div class="circle">
            <img src="../assets/images/icons/uz.svg" alt="">
          </div>
          <img src="../assets/images/icons/talim.svg" alt="">


        </a>
        <div class="categories">
          <img src="../assets/images/icons/squares.svg" alt="">
          <p>Категории</p>
        </div>
      </div>
      <div class="nav-right">
        <form action="">
          <input type="text" placeholder="Поиск курса">
          <div class="search">
            <span class="icon-search">
            </span>
            <div class="line"></div>
          </div>

        </form>
        <div class="right-content">
          <p>Бизнес сервис</p>
          <div class="nav-btns">
            <div class="icons">
              <div class="icon">
                <div class="icon-notification"></div>
              </div>
              <div class="icon">
                <div class="icon-like" @click="like"></div>
              </div>
            </div>
            <div class="btns">
              <ButtonVue >
                Выйти
              </ButtonVue>
              <!-- <select name="" id="">
                <option value="RU">Ru</option>
                <option value="EN">En</option>
              </select> -->
            </div>
          </div>
        </div>
      </div>
      <div class="user">
        <div class="icon-user">

        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import ButtonVue from './buttonVue.vue';

export default {
  name: 'NavbarComponent',
  components: {
    ButtonVue
  },
  methods: {
    // signOut(){
    //   $nuxt.$router.push('/login')
    // },
    like() {
      if (event.target.classList.contains('red')) {
        event.target.classList.remove('red')
      } else {
        event.target.classList.add('red')
      }

    },
    burgerMenu() {
      const navbarBtn = document.querySelector('.burger-menu');
      const navbarMenu = document.querySelector('.right-content');

      if (navbarBtn.classList.contains('active') === false) {
        navbarMenu.style = `right : -301px;`
      }

      navbarBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (navbarBtn.classList.contains('active')) {
          navbarBtn.classList.remove('active');
          navbarMenu.style = `right: -301px; transition : right 0.5s; z-index: 21;`

        } else {
          navbarBtn.classList.add('active');
          navbarMenu.style = `right: 0; transition : right 0.5s; z-index: 21;`
        }
      })
      navbarMenu.addEventListener('mouseup', function (e) {
        e.stopPropagation();
      })
      document.addEventListener('mouseup', function (e) {
        if (e.target != navbarBtn) {
          navbarMenu.style = `right: -301px; transition : right 0.5s; z-index: 21;`;
          navbarBtn.classList.remove('active');
        }
      })


    }
  }
}
</script>


<style lang="scss">
@import '../scss/components/Navbar.scss';
</style>
