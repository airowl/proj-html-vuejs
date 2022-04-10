<template>
    <div id="card-news">
        <img :src="element.bgImage" :alt="`News n. ${element.id}`">
        <div class="overlay"></div>
        <h3>{{element.text}}</h3>
    </div>
</template>

<script>
export default {
    name: 'cardNews',
    props: {
        element: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    div#card-news{
        color: $white;
        position: relative;
        width: calc((100% / 3) - 1rem);
        height: 20rem;
        border-radius: 1rem;
        overflow: hidden;

        img{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 0;
        }

        h3{
            position: absolute;
            z-index: 2;
            bottom: 2.5rem;
            font-size: 1.5rem;
            text-align: center;
        }
    }

</style>