<template>
    <Transition name="modal">
        <div class="popup" id="popup" v-show="this.$store.state.store.modal">
            <div class="popup-content">
                <div class="popup-body">
                    <!-- <h4>Оставьте отзыв!</h4> -->
                    <input type="text" placeholder="Напишите ваш отзыв" v-model="review">
                    <p class="warning"></p>
                    <input type="number" min="1" max="5" placeholder="На сколько вы нас оцениваете" v-model="rating">
                    <button class="link-submit" @click="closeModal">Отменить</button>
                    <button type="submit" class="link-submit" @click="addReview"
                        v-if="this.$store.state.store.edit == false">Отправить отзыв</button>
                    <button type="submit" class="link-submit" @click="changeReview"
                        v-else-if="this.$store.state.store.edit == true">Изменить отзыв</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
let today = new Date();
let date = today.getFullYear() + "." + today.getMonth() + "." + today.getDate();
export default {
    data() {
        return {
            review: '',
            rating: 0
        }
    },
    methods: {
        closeModal() {
            this.$store.commit('store/closeModal')
        },
        addReview() {
            const item = {
                dateCreated: date,
                dateEdited: '',
                review: this.review,
                rating: Number(this.rating),
            };
            this.$store.commit('store/addReview', item)
            this.$store.commit('store/addedValues')
            this.$store.commit('store/closeModal')
            this.review = '',
            this.rating = 0
        },
        changeReview() {
            const editedFeedback = {
                //   name: this.name,
                dateEdited: today,
                review: this.review,
                rating: Number(this.rating)
            }
            this.$store.commit('store/editedFeedback', editedFeedback)
            this.$store.commit('store/closeModal')
            this.review = '',
            this.rating = 0
        }
    }
}
</script>

<style lang="scss">
@import '../scss/components/modal.scss';
</style>