<template>

    <div class="container">
        <div class="requirements block">
            <h3>Требования</h3>
            <ul class="list-requirements">
                <li v-for="item in list">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            list: [
                'Базовые навыки HTML, CSS (Крайне желательно пройти курс Web-разработчик, это первая часть)',
                'Любой редактор кода',
                'Желание выучить JavaScript',
                'Желательно базовое знание английского языка',
            ]
        }
    }
}

</script>

<style lang="scss">
    @import '../scss/components/requirements.scss';
</style>