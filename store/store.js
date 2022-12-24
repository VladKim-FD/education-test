import { doc, addDoc, deleteDoc, updateDoc, collection, onSnapshot, QuerySnapshot } from "@firebase/firestore";
import { db } from "../firebase/index";

const state = () => ({
    user: null,
    modal: false,
    currentIndexSlider1: 0,
    currentIndexSlider2: 0,
    currentIndexSlider3: 0,
    slider1: [
        {
            img: 'react',
            title: 'Полный курс по JavaScript + React - с нуля до результата...',
            level: 'Начальный',
            people: '589',
            rating: '5.0',
            avatar: 'oybek',
            name: 'Ойбек Собиров',
            job: 'Программист',
            price: '390 999 uzs'
        },
        {
            img: 'web-dev',
            title: 'Веб разработка - с нуля до профессионала. Full Stack',
            level: 'Средний',
            people: '155',
            rating: '3.2',
            avatar: 'alisher',
            name: 'Алишер Собиров',
            job: 'Full Stack Разработчик',
            price: '127 000 uzs',
            class: 'alisher'
        },
        {
            img: 'python',
            title: 'Полный Курс Python 3: от Новичка до Мастера ',
            level: 'Начальный',
            people: '236',
            rating: '4.7',
            avatar: 'bahrom',
            name: 'Бахром Джураев',
            job: 'Python Разработчик',
            price: '290 990 uzs'
        },
        {
            img: 'react',
            title: 'Полный курс по JavaScript + React - с нуля до результата...',
            level: 'Начальный',
            people: '589',
            rating: '5.0',
            avatar: 'oybek',
            name: 'Ойбек Собиров',
            job: 'Программист',
            price: '390 999 uzs'
        },
        {
            img: 'web-dev',
            title: 'Веб разработка - с нуля до профессионала. Full Stack',
            level: 'Средний',
            people: '155',
            rating: '3.2',
            avatar: 'alisher',
            name: 'Алишер Собиров',
            job: 'Full Stack Разработчик',
            price: '127 000 uzs',
            class: 'alisher'
        },
        {
            img: 'python',
            title: 'Полный Курс Python 3: от Новичка до Мастера ',
            level: 'Начальный',
            people: '236',
            rating: '4.7',
            avatar: 'bahrom',
            name: 'Бахром Джураев',
            job: 'Python Разработчик',
            price: '290 990 uzs'
        },
    ],
    slider2: [
        {
            bg: 'turkey',
            backgroundColor: '#F3994B',
            categoria: 'Иностранные языки',
            title: 'Ускоренный 1-месячный курс турецкого языка',
            level: 'Начальный',
            people: '155',
            rating: '4.7',
            avatar: 'alisher',
            name: 'Мурат Аслан',
            job: 'Учитель турецкого',
            price: '400 000 uzs'
        },
        {
            bg: 'targeting',
            backgroundColor: '#6360C7',
            categoria: 'Финансы и бизнес',
            title: 'Полный курс по таргетингу',
            level: 'Начальный',
            people: '155',
            rating: '4.7',
            avatar: 'safia',
            name: 'Сафия Алиева',
            job: 'Маркетолог',
            price: '255 000 uzs'
        },
        {
            bg: 'web-design',
            backgroundColor: '#42C18C',
            categoria: 'Программирование',
            title: 'Веб-дизайн. (CSS3, FLEX, Bootstrap, LESS)',
            level: 'Начальный',
            people: '155',
            rating: '4.7',
            avatar: 'oybek',
            name: 'Ботир Олимов',
            job: 'Веб-дизайнер',
            price: '320 000 uzs'
        },
        {
            bg: 'turkey',
            backgroundColor: '#F3994B',
            categoria: 'Иностранные языки',
            title: 'Ускоренный 1-месячный курс турецкого языка',
            level: 'Начальный',
            people: '155',
            rating: '4.7',
            avatar: 'alisher',
            name: 'Мурат Аслан',
            job: 'Учитель турецкого',
            price: '400 000 uzs'
        },
        {
            bg: 'targeting',
            backgroundColor: '#6360C7',
            categoria: 'Финансы и бизнес',
            title: 'Полный курс по таргетингу',
            level: 'Начальный',
            people: '155',
            rating: '4.7',
            avatar: 'safia',
            name: 'Сафия Алиева',
            job: 'Маркетолог',
            price: '255 000 uzs'
        },
        {
            bg: 'web-design',
            backgroundColor: '#42C18C',
            categoria: 'Программирование',
            title: 'Веб-дизайн. (CSS3, FLEX, Bootstrap, LESS)',
            level: 'Начальный',
            people: '155',
            rating: '4.7',
            avatar: 'oybek',
            name: 'Ботир Олимов',
            job: 'Веб-дизайнер',
            price: '320 000 uzs'
        },
    ],
    slider3: [
        {
            title: 'Курсы супер фотошопа',
            text: 'Очень хотелось поработать с фотошопом и досконально изучить его. Но у меня никогда не было на это времени. Теперь я научился работать и проектировать в Photoshop через платформу. Спасибо преподавателям, которые подготовили этот курс',
            img: 'sherzod',
            name: 'Шерзод Бакиров',
            manInfo: 'Подписчик курса'
        },
        {
            title: 'Веб разработка - с нуля до профессионала. Full Stack',
            text: 'Высокоуровневые учебники. Отдельное спасибо учителям за это. И еще просьба, чтобы вы также выпустили продолжение этого курса.',
            img: 'max',
            name: 'Максим Фадеев',
            manInfo: 'Подписчик курса',
            class: 'max'
        },
        {
            title: 'Ускоренный 1-месячный курс турецкого языка',
            text: 'Я многому научился из учебников.  Теперь я сам могу свободно практиковать то, что мне нравится, путешествуя по Турции. Спасибо за это Алишеру Ахмадалиевичу, который подготовил этот курс. Уроки сделаны очень простыми и легкими для...',
            img: 'lola',
            name: 'Лола Султонова',
            manInfo: 'Подписчик курса'
        },
        {
            title: 'Курсы супер фотошопа',
            text: 'Очень хотелось поработать с фотошопом и досконально изучить его. Но у меня никогда не было на это времени. Теперь я научился работать и проектировать в Photoshop через платформу. Спасибо преподавателям, которые подготовили этот курс',
            img: 'sherzod',
            name: 'Шерзод Бакиров',
            manInfo: 'Подписчик курса'
        },
        {
            title: 'Веб разработка - с нуля до профессионала. Full Stack',
            text: 'Высокоуровневые учебники. Отдельное спасибо учителям за это. И еще просьба, чтобы вы также выпустили продолжение этого курса.',
            img: 'max',
            name: 'Максим Фадеев',
            manInfo: 'Подписчик курса',
            class: 'max'
        },
        {
            title: 'Ускоренный 1-месячный курс турецкого языка',
            text: 'Я многому научился из учебников.  Теперь я сам могу свободно практиковать то, что мне нравится, путешествуя по Турции. Спасибо за это Алишеру Ахмадалиевичу, который подготовил этот курс. Уроки сделаны очень простыми и легкими для...',
            img: 'lola',
            name: 'Лола Султонова',
            manInfo: 'Подписчик курса'
        },

    ],
    popularCategories: [
        {
            img: 'development',
            text: 'Программирование'
        },
        {
            img: 'design',
            text: 'Дизайн'
        },
        {
            img: 'marketing',
            text: 'Маркетинг'
        },
        {
            img: 'finance',
            text: 'Финансы и бизнес'
        },
        {
            img: 'languages',
            text: 'Иностранные языки'
        },
        {
            img: 'health',
            text: 'Здоровье и фитнес'
        },
    ],
    popularCategoriesExtra: [
        {
            img: 'development-small',
            text: 'Программирование',
            class: 'categoria-first'
        },
        {
            img: 'design-small',
            text: 'Дизайн'
        },
        {
            img: 'marketing-small',
            text: 'Маркетинг'
        },
        {
            img: 'finance-small',
            text: 'Финансы и бизнес',
            class: 'categoria-first'
        },
        {
            img: 'languages-small',
            text: 'Иностранные языки',
            class: 'categoria-first'
        },
        {
            img: 'health-small',
            text: 'Здоровье и фитнес'
        },
    ],
    features: [
        {
            img: 'play',
            text: '19.5 часовой курс'
        },
        {
            img: 'themes',
            text: '14 темы'
        },
        {
            img: 'download',
            text: '81 ресурс для скачивания'
        },
        {
            img: 'voice',
            text: 'Голосовые учебники'
        },
        {
            img: 'checked',
            text: 'Домашние задания'
        },
        {
            img: 'certificate',
            text: 'Сертификат об окончании'
        },
    ],
    items: [
        {
            img: 'video-chat',
            text: 'Организуйте онлайн-чат с подписчиками курса в любое время'
        },
        {
            img: 'homework',
            text: 'Предоставление и оценка онлайн домашних заданий для подписчиков курса'
        },
        {
            img: 'chart',
            text: 'Всегда следите за подписчиками курса через мониторинг'
        },
    ],
    comments: [
        {
            img: 'kamila',
            name: 'Камила Насирова',
            starsCount: 5,
            date: 'Март 13, 2022',
            comment: 'Учебники подготовлены на высоком уровне. Это видео курс, который намного проще и содержит полезную информацию'
        },
        {
            img: 'saida',
            name: 'Саида Раджабова',
            starsCount: 4,
            date: 'Март 2, 2022',
            comment: 'Я считаю, что это отличный учебник по Python. С нетерпением ждем новых видео'
        },
        {
            img: 'kirill',
            name: 'Кирилл Аврамов',
            starsCount: 5,
            date: 'Февраль 28, 2022',
            comment: 'Я понятия не имел о программировании. Но после просмотра этого видеоурока я понял гораздо больше'
        },
        {
            img: 'kamila-2',
            name: 'Камила Арипова',
            starsCount: 4,
            date: 'Февраль 11, 2022',
            comment: 'Я никогда не думал, что этому будет так легко научиться, просматривая видео, видеоурок просто потрясающий, '
        }, {

            img: 'igor',
            name: 'Игорь Алиев',
            starsCount: 4,
            date: 'Январь 13, 2022',
            comment: 'Круто. Мне очень понравился этот видеоурок, ждем еще видео'
        },
    ],
    reviews: [],
    totalValue: 0,
    averageValue: 0,
    edit: false,
    arrayOfOnes: [],
    arrayOfTwos: [],
    arrayOfThrees: [],
    arrayOfFours: [],
    arrayOfFives: [],
    firstWidth: null,
    secondWidth: null,
    thirdWidth: null,
    fourthWidth: null,
    fifthWidth: null,
    changedValue: 0
})


const mutations = {
    likeCourse(state, eventTarget) {
        if (event.target.classList.contains('red')) {
            event.target.classList.remove('red')
        } else {
            event.target.classList.add('red')
        }
    },
    prevSlideSlider1(state) {
        if (state.currentIndexSlider1 > 0) {
            state.currentIndexSlider1--;
        }
    },
    nextSlideSlider1(state, sliderItems) {
        if (state.currentIndexSlider1 >= sliderItems.length - 3) {
            state.currentIndexSlider1 = 0;
        } else {
            state.currentIndexSlider1++;
        }
    },
    prevSlideSlider2(state) {
        if (state.currentIndexSlider2 > 0) {
            state.currentIndexSlider2--;
        }
    },
    nextSlideSlider2(state, sliderItems) {
        if (state.currentIndexSlider2 >= sliderItems.length - 3) {
            state.currentIndexSlider2 = 0;
        } else {
            state.currentIndexSlider2++;
        }
    },
    prevSlideSlider3(state) {
        if (state.currentIndexSlider3 > 0) {
            state.currentIndexSlider3--;
        }
    },
    nextSlideSlider3(state, sliderItems) {
        if (state.currentIndexSlider3 >= sliderItems.length - 3) {
            state.currentIndexSlider3 = 0;
        } else {
            state.currentIndexSlider3++;
        }
    },
    goToSlide(state, index) {
        state.currentIndexSlider3 = index * 2;
    },
    SET_USER(state, user) {
        state.user = user
    },
    openModal(state) {
        state.modal = true
    },
    closeModal(state) {
        state.modal = false
        state.edit = false
    },
    async addReview(state, item) {
        state.totalValue = 0
        state.averageValue = 0
        item.starsCount = []
        for (let i = 0; i < item.rating; i++) {
            item.starsCount.push('')
        }
        switch (item.rating) {
            case 1:
                state.arrayOfOnes.push(item.rating)
                break;
            case 2:
                state.arrayOfTwos.push(item.rating)
                break;
            case 3:
                state.arrayOfThrees.push(item.rating)
                break;
            case 4:
                state.arrayOfFours.push(item.rating)
                break;
            case 5:
                state.arrayOfFives.push(item.rating)
                break;
            default:
                break;
        }
        // state.allScores.push(item.rating)
        state.reviews.push(item)
        await addDoc(collection(db, 'reviews'), {
            review: item.review,
            rating: item.rating,
            dateCreated: item.dateCreated
        })
    },
    deleteFeedback(state, id) {
        deleteDoc(doc(collection(db, 'reviews'), String(id)))
        for (let i = 0; i < state.reviews.length; i++) {
            if (state.reviews[i].firebaseId == id) {
                state.reviews = state.reviews.slice(i, 1)
            }
        }
    },
    changeFeedback(state, id) {
        state.totalValue = 0
        state.averageValue = 0
        state.edit = true
        state.editedFeedbackId = id
        for (let i = 0; i < state.reviews.length; i++) {
            if (state.reviews[i].firebaseId == id) {
                state.changedValue = state.reviews[i].rating
            }
        }
        for (let x = 0; x < state.reviews.length; x++) {
            state.totalValue += Number(state.reviews[x].rating)
        }
        state.averageValue += state.totalValue / state.reviews.length
        // Number(state.averageValue)
        if (state.averageValue == Infinity || state.averageValue == NaN) {
            state.averageValue = 0
        }
        state.averageValue = Number(state.averageValue.toFixed(1))
        // String(state.averageValue)
    },
    async editedFeedback(state, editedFeedback) {
        switch (state.changedValue) {
            case 1:
                state.arrayOfOnes.pop()
                break;
            case 2:
                state.arrayOfTwos.pop()
                break;
            case 3:
                state.arrayOfThrees.pop()
                break;
            case 4:
                state.arrayOfFours.pop()
                break;
            case 5:
                state.arrayOfFives.pop()
                break;
            default:
                break;
        }
        switch (editedFeedback.rating) {
            case 1:
                state.arrayOfOnes.push(editedFeedback.rating)
                break;
            case 2:
                state.arrayOfTwos.push(editedFeedback.rating)
                break;
            case 3:
                state.arrayOfThrees.push(editedFeedback.rating)
                break;
            case 4:
                state.arrayOfFours.push(editedFeedback.rating)
                break;
            case 5:
                state.arrayOfFives.push(editedFeedback.rating)
                break;
            default:
                break;
        }

        state.changedValue = 0
        state.totalValue = 0
        state.averageValue = 0
        if (state.averageValue == Infinity || state.averageValue == NaN) {
            state.averageValue = 0
        }

        state.firstWidth = state.arrayOfOnes.length / state.reviews.length * 100;
        state.secondWidth = state.arrayOfTwos.length / state.reviews.length * 100;
        state.thirdWidth = state.arrayOfThrees.length / state.reviews.length * 100;
        state.fourthWidth = state.arrayOfFours.length / state.reviews.length * 100;
        state.fifthWidth = state.arrayOfFives.length / state.reviews.length * 100;

        state.firstWidth = Number(state.firstWidth.toFixed(1))
        state.secondWidth = Number(state.secondWidth.toFixed(1))
        state.thirdWidth = Number(state.thirdWidth.toFixed(1))
        state.fourthWidth = Number(state.fourthWidth.toFixed(1))
        state.fifthWidth = Number(state.fifthWidth.toFixed(1))

        updateDoc(doc(collection(db, 'arrays'), 'qycDtJjSSudVBPrfpoj8'), {
            firstArray: state.arrayOfOnes,
            secondArray: state.arrayOfTwos,
            thirdArray: state.arrayOfThrees,
            fourthArray: state.arrayOfFours,
            fifthArray: state.arrayOfFives,
        })

        await updateDoc(doc(collection(db, 'reviews'), state.editedFeedbackId), {
            review: editedFeedback.review,
            rating: editedFeedback.rating,
            dateEdited: editedFeedback.dateEdited
        })

        state.reviews.forEach(feedback => {
            if (feedback.firebaseId == state.editedFeedbackId) {
                review: editedFeedback.feedback
                rating: editedFeedback.rating
                dateEdited: editedFeedback.dateEdited
            }
        });
    },
    createdFeedbacks(state, feedbacks) {
        state.totalValue = 0
        state.averageValue = 0

        state.reviews = feedbacks
        for (let i = 0; i < state.reviews.length; i++) {
            state.reviews[i].starsCount = [];
            for (let x = 0; x < state.reviews[i].rating; x++) {
                state.reviews[i].starsCount.push('')
            }
        }
        for (let x = 0; x < feedbacks.length; x++) {
            state.totalValue += Number(feedbacks[x].rating)
        }
        Number(state.totalValue)
        if (!state.totalValue == 0) {
            state.averageValue = state.totalValue / feedbacks.length
            if (state.averageValue == Infinity || state.averageValue == NaN) {
                state.averageValue = 0
            }
            state.averageValue = Number(state.averageValue.toFixed(1))
            // String(state.averageValue)
        } else {
            state.averageValue = 0
        }

        state.firstWidth = state.arrayOfOnes.length / state.reviews.length * 100;
        state.secondWidth = state.arrayOfTwos.length / state.reviews.length * 100;
        state.thirdWidth = state.arrayOfThrees.length / state.reviews.length * 100;
        state.fourthWidth = state.arrayOfFours.length / state.reviews.length * 100;
        state.fifthWidth = state.arrayOfFives.length / state.reviews.length * 100;

        state.firstWidth = Number(state.firstWidth.toFixed(1))
        state.secondWidth = Number(state.secondWidth.toFixed(1))
        state.thirdWidth = Number(state.thirdWidth.toFixed(1))
        state.fourthWidth = Number(state.fourthWidth.toFixed(1))
        state.fifthWidth = Number(state.fifthWidth.toFixed(1))
    },
    addedValues(state) {
        updateDoc(doc(collection(db, 'arrays'), 'qycDtJjSSudVBPrfpoj8'), {
            firstArray: state.arrayOfOnes,
            secondArray: state.arrayOfTwos,
            thirdArray: state.arrayOfThrees,
            fourthArray: state.arrayOfFours,
            fifthArray: state.arrayOfFives,
        })

        state.firstWidth = state.arrayOfOnes.length / state.reviews.length * 100;
        state.secondWidth = state.arrayOfTwos.length / state.reviews.length * 100;
        state.thirdWidth = state.arrayOfThrees.length / state.reviews.length * 100;
        state.fourthWidth = state.arrayOfFours.length / state.reviews.length * 100;
        state.fifthWidth = state.arrayOfFives.length / state.reviews.length * 100;

        state.firstWidth = Number(state.firstWidth.toFixed(1))
        state.secondWidth = Number(state.secondWidth.toFixed(1))
        state.thirdWidth = Number(state.thirdWidth.toFixed(1))
        state.fourthWidth = Number(state.fourthWidth.toFixed(1))
        state.fifthWidth = Number(state.fifthWidth.toFixed(1))
    },
    deleteValue(state, rating) {

        switch (rating) {
            case 1:
                state.arrayOfOnes.pop()
                break;
            case 2:
                state.arrayOfTwos.pop()
                break;
            case 3:
                state.arrayOfThrees.pop()
                break;
            case 4:
                state.arrayOfFours.pop()
                break;
            case 5:
                state.arrayOfFives.pop()
                break;
            default:
                break;
        }
        updateDoc(doc(collection(db, 'arrays'), 'qycDtJjSSudVBPrfpoj8'), {
            firstArray: state.arrayOfOnes,
            secondArray: state.arrayOfTwos,
            thirdArray: state.arrayOfThrees,
            fourthArray: state.arrayOfFours,
            fifthArray: state.arrayOfFives,
        })
        state.totalValue = 0
        state.averageValue = 0
        for (let x = 0; x < state.reviews.length; x++) {
            state.totalValue += state.reviews[x].rating
        }
        Number(state.totalValue)
        state.averageValue += state.totalValue / state.reviews.length
        if (state.averageValue == Infinity || state.averageValue == NaN) {
            state.averageValue = 0
        }
        state.averageValue.toFixed(1)
        // console.log(state.reviews.length);
        state.firstWidth = state.arrayOfOnes.length / state.reviews.length * 100;
        state.secondWidth = state.arrayOfTwos.length / state.reviews.length * 100;
        state.thirdWidth = state.arrayOfThrees.length / state.reviews.length * 100;
        state.fourthWidth = state.arrayOfFours.length / state.reviews.length * 100;
        state.fifthWidth = state.arrayOfFives.length / state.reviews.length * 100;

        console.log(state.firstWidth);

        if (state.firstWidth == NaN || state.secondWidth == NaN || state.thirdWidth == NaN || state.fourthWidth == NaN || state.fifthWidth == NaN) {
            state.firstWidth = 0;
            state.secondWidth = 0;
            state.thirdWidth = 0;
            state.fourthWidth = 0;
            state.fifthWidth = 0;
        }

        state.firstWidth = Number(state.firstWidth.toFixed(1))
        state.secondWidth = Number(state.secondWidth.toFixed(1))
        state.thirdWidth = Number(state.thirdWidth.toFixed(1))
        state.fourthWidth = Number(state.fourthWidth.toFixed(1))
        state.fifthWidth = Number(state.fifthWidth.toFixed(1))

        console.log(state.firstWidth);

    },
    createdValues(state, arrays) {
        state.arrayOfOnes = arrays.firstArray,
            state.arrayOfTwos = arrays.secondArray,
            state.arrayOfThrees = arrays.thirdArray,
            state.arrayOfFours = arrays.fourthArray,
            state.arrayOfFives = arrays.fifthArray,

        console.log(state.arrayOfOnes.length);
        console.log(state.reviews.length);
        console.log(state.arrayOfOnes.length / state.reviews.length * 100);

        state.firstWidth = state.arrayOfOnes.length / state.reviews.length * 100;
        state.secondWidth = state.arrayOfTwos.length / state.reviews.length * 100;
        state.thirdWidth = state.arrayOfThrees.length / state.reviews.length * 100;
        state.fourthWidth = state.arrayOfFours.length / state.reviews.length * 100;
        state.fifthWidth = state.arrayOfFives.length / state.reviews.length * 100;

        state.firstWidth = Number(state.firstWidth.toFixed(1))
        state.secondWidth = Number(state.secondWidth.toFixed(1))
        state.thirdWidth = Number(state.thirdWidth.toFixed(1))
        state.fourthWidth = Number(state.fourthWidth.toFixed(1))
        state.fifthWidth = Number(state.fifthWidth.toFixed(1))

        if (state.reviews.length == 0) {
            state.firstWidth = 0;
            state.secondWidth = 0;
            state.thirdWidth = 0;
            state.fourthWidth = 0;
            state.fifthWidth = 0;
        }

        // if (state.firstWidth == NaN || state.secondWidth == NaN || state.thirdWidth == NaN || state.fourthWidth == NaN || state.fifthWidth == NaN) {
        //     state.firstWidth = 0;
        //     state.secondWidth = 0;
        //     state.thirdWidth = 0;
        //     state.fourthWidth = 0;
        //     state.fifthWidth = 0;
        // }
    }
}

const actions = {
    async onAuthStateChangedAction(context, { authUser, claims }) {
        if (!authUser) {
            // remove state
            context.commit('SET_USER', null)
            //redirect from here
            this.$router.push({
                path: '/login',
            })
        } else {
            const { uid, email } = authUser
            context.commit('SET_USER', {
                uid,
                email,
            })
        }
    },
}


const getters = {
    getUser(state) {
        return state.user
    },
}

export default {
    state,
    actions,
    mutations,
    getters,
}

