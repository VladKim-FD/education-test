<template>
   <div class="footer">
    <div class="footer__top">
        <div class="container top-content">
            <div class="footer-contacts">
               <div class="contact" v-for="contact in contacts">
               <div :class="'icon-' + contact.class"></div>
               <a href="">{{contact.text}}</a>
               </div>
                  
               </div>

            <div class="footer-icons">
              <a href="" :class="'icon-' + socialMedia.class" v-for="socialMedia in socialMedias"></a>
            </div>
        </div>
    </div>
    <div class="footer__main">
        <div class="container main-content">
          <div class="footer-links">
            <div class="footer-categories">
                <h3>
                    Категории
                </h3>
                <ul>
                    <li v-for="categoria in categories">
                        <a href="">{{categoria.text}}</a>
                    </li>
                </ul>
            </div>
            <div class="support">
                <h3>
                  Поддержка
                </h3>
                 <ul>
                    <li  v-for="item in support">
                        <a href="">{{item.text}}</a>
                    </li>
                </ul>
            </div>
            <div class="about-us">
                <h3>
                  О нас
                </h3>
                 <ul>
                    <li v-for="info in aboutUs">
                        <a href="">{{info.text}}</a>
                    </li>
                </ul>
            </div>
            <div class="btns-stores">
                <button class="footer-btn" v-for="btn in footerBtns">
                   <div :class="'icon-' + btn.icon"></div>
                   <div class="btn-text">
                    <p class="first-text">{{btn.firstText}}</p>
                    <p class="second-text">{{btn.secondText}}</p>
                   </div>
                </button>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-logo">
                <div class="circle-uz">
                    <img src="../assets/images/icons/uz.svg" alt="">
                </div>
                <img src="../assets/images/icons/talim.svg" alt="">
            </div>
            <div class="footer-line"></div>
            <p class="bottom-text">Авторское право  UZ ta‘ lim © 2020-2022. Все права защищены.</p>
          </div>
        </div>
    </div>
    
   </div>
</template>

<script>
export default{
   data(){
    return {

        contacts: [
            {
                class: 'letter',
                text: 'info@uztalim.uz'
            },
            {
                class: 'phone',
                text: '78 212-12-32'
            },
            {
                class: 'chat',
                text: 'info@uztalim.uz'
            },
        ],
        socialMedias: [
            {
                class: 'instagram'
            },
            {
                class: 'twitter'
            },
            {
                class: 'facebook'
            },
            {
                class: 'telegram'
            },
        ],
        categories: [
           {
            text: 'Программирование'
           },
           {
            text: 'Дизайн'
           },
           {
            text: 'Маркетинг'
           },
           {
            text: 'Финансы и бизнес'
           },
            {
            text: 'Иностранные языки'
           },

        ],
        support: [
            {
                text: 'Бизнес-сервис'
            },
            {
                text: 'Для веб-мастеров'
            },
            {
                text: 'FAQ'
            },
            {
                text: 'Личный кабинет'
            },
            {
                text: 'Избранные'
            },
            
        ],
        aboutUs: [
            {
                text: 'О проекте'
            },
            {
                text: 'Контакты'
            },
            {
                text: 'Условия использования'
            },
            {
                text: 'Политика конфиденциальности'
            },

        ],
        footerBtns: [
            {
                icon: 'google-play',
                firstText: 'GET IT ON',
                secondText: 'Google Play'
            },
            {
                icon: 'apple',
                firstText: 'Donwload on the',
                secondText: 'App Store'
            }
        ]
            
        };
    }
   }

</script>

<style lang="scss">
@import '../scss/components/footer';
</style>