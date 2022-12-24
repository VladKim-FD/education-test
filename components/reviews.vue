<template>
    <div class="container">
        <div class="reviews block">
            <h3>Обзоры</h3>
            <div class="reviews-rating">
                <div class="rating-left">
                    <p class="evaluation">{{ this.$store.state.store.averageValue }}</p>
                    <!-- <ul>
                        <li>
                            <div class="icon-star"></div>
                        </li>
                        <li>
                            <div class="icon-star"></div>
                        </li>
                        <li>
                            <div class="icon-star"></div>
                        </li>
                        <li>
                            <div class="icon-star"></div>
                        </li>
                        <li>
                            <div class="icon-star"></div>
                        </li>
                    </ul> -->
                    <p class="reviews-count">{{ this.$store.state.store.reviews.length }} Отзывов</p>
                </div>
                <div class="rating-right">
                    <ul class="grades">
                        <li>Идеально</li>
                        <li>Отлично</li>
                        <li>Средний</li>
                        <li>Слабый</li>
                        <li>Ужасный</li>
                    </ul>
                    <ul class="rating-scales">
                        <li class="scale scale-1">
                            <div ref="firstLine" class="line-index"
                                :style="{ width: this.$store.state.store.fifthWidth + '%' }"></div>
                        </li>
                        <li class="scale scale-2">
                            <div ref="secondLine" class="line-index"
                                :style="{ width: this.$store.state.store.fourthWidth + '%' }"></div>
                        </li>
                        <li class="scale scale-3">
                            <div ref="thirdLine" class="line-index"
                                :style="{ width: this.$store.state.store.thirdWidth + '%' }"></div>
                        </li>
                        <li class="scale scale-4">
                            <div ref="fourthLine" class="line-index"
                                :style="{ width: this.$store.state.store.secondWidth + '%' }"></div>
                        </li>
                        <li class="scale scale-5">
                            <div ref="fifthLine" class="line-index"
                                :style="{ width: this.$store.state.store.firstWidth + '%' }"></div>
                        </li>
                    </ul>
                    <ul class="procents">
                        <li>{{ this.$store.state.store.fifthWidth ? this.$store.state.store.fifthWidth + '%': 0 + '%' }}</li>
                        <li>{{ this.$store.state.store.fourthWidth ? this.$store.state.store.fourthWidth + '%': 0 + '%' }}</li>
                        <li>{{ this.$store.state.store.thirdWidth ? this.$store.state.store.thirdWidth + '%': 0 + '%' }}</li>
                        <li>{{ this.$store.state.store.secondWidth ? this.$store.state.store.secondWidth + '%': 0 + '%' }}</li>
                        <li>{{ this.$store.state.store.firstWidth ? this.$store.state.store.firstWidth + '%': 0 + '%' }}</li>
                    </ul>
                </div>
            </div>
            <div class="comments">
                <div v-for="(review, index) in this.$store.state.store.reviews" :key="review.id" class="review">
                    <div class="review-top">
                        <ul class="stars">
                            <li v-for="star in review.starsCount">
                                <img src="../assets/images/icons/star.svg" alt="">
                            </li>
                        </ul>
                        <p>{{ review.dateEdited ? review.dateEdited : review.dateCreated }}</p>
                    </div>
                    <p class="feedback">{{ review.review }}</p>
                    <!-- <p>{{ review.id }}</p> -->
                    <div class="review__btns">
                        <button class="review-btn change" @click="changeFeedback(review.firebaseId)">
                            <img src="../assets/images/icons/change.png" alt="">
                            <span>Изменить отзыв</span>
                        </button>
                        <button class="review-btn delete" @click="deleteFeedback(review.firebaseId, review.rating)">
                            <img src="../assets/images/icons/delete.png" alt="">
                            <span>Удалить отзыв</span>
                        </button>
                    </div>
                </div>
            </div>
            <button class="leave-review-btn" @click="openModal">Оставить отзыв</button>
        </div>
    </div>
</template>

<script>

import { doc, addDoc, deleteDoc, updateDoc, collection, onSnapshot, QuerySnapshot } from "@firebase/firestore";
import { db } from "../firebase/index";
export default {
    async created() {
        await onSnapshot(collection(db, 'reviews'), (QuerySnapshot) => {
            const feedbacks = [];
            QuerySnapshot.forEach((doc) => {
                const feedback = {
                    review: doc.data().review,
                    rating: Number(doc.data().rating),
                    firebaseId: doc.id,
                    dateCreated: doc.data().dateCreated
                }
                feedbacks.push(feedback)
            })
            this.$store.commit('store/createdFeedbacks', feedbacks)
        });
        onSnapshot(collection(db, 'arrays'), (QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {
                const arrays = {
                    firstArray: doc.data().firstArray,
                    secondArray: doc.data().secondArray,
                    thirdArray: doc.data().thirdArray,
                    fourthArray: doc.data().fourthArray,
                    fifthArray: doc.data().fifthArray
                }
                this.$store.commit('store/createdValues', arrays)
            })

        })
    },
    methods: {
        openModal() {
            this.$store.commit('store/openModal')
        },
        deleteFeedback(id, rating) {
            this.$store.commit('store/deleteValue',  rating)
            this.$store.commit('store/deleteFeedback', id)
        },
        changeFeedback(id) {
            this.$store.commit('store/openModal')
            this.$store.commit('store/changeFeedback', id)
            console.log(this.$store.state.store.modal);
        }
    }
}
</script>

<style lang="scss">
@import '../scss/components/reviews.scss';
</style>