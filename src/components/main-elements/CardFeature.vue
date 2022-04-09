<template>
    <div id="card-feature">
        <div class="icons">
            <span class="icon-left"><i class="fa" :class="element.iconName"></i></span>
            <i class="fas fa-arrow-right"></i>
        </div>
        <h3 class="text-white">{{element.title}}</h3>
        <p class="text-white">{{element.description}}</p>
        
    </div>
</template>

<script>
export default {
    name: 'cardFeature',
    props: {
        element: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    div#card-feature{
        width: calc((100% / 3) - 1rem);
        background-color: rgba($white, $alpha: .1);
        color: $blue-lagoon;
        padding: 2.5rem;
        border-radius: 1rem;

        div.icons{
            @include flex(row, space-between, start);
            margin-bottom: 1rem;

            .icon-left{
                font-size: 2.5rem;
            }

            .icon-right{
                font-size: 1.5rem;
            }
        }

        h3{
            margin-bottom: 1rem;
        }
    }

</style>