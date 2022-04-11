<template>
    <div id="card-feature">

        <!-- ICONS -->
        <div class="icons">
            <span class="icon-left"><i class="fa" :class="element.iconName"></i></span>
            <a :href="element.url" class="icon-right text-blue-lagoon">
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!-- CONTENT -->
        <h3 class="text-white">{{element.title}}</h3>
        <p class="text-white">{{element.description}}</p>
        
    </div>
</template>

<script>
export default {
    name: 'cardFeature',
    props: {
        element: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    div#card-feature{
        padding: 3.5rem 2.5rem;
        width: calc((100% / 3) - 1rem);
        color: $blue-lagoon;
        border-radius: 1rem;
        background-color: rgba($white, $alpha: .1);
        transition: $standard;

        &:hover a.icon-right{
            color: $white;
            background-color: $blue-lagoon;
        }

        &:hover .icon-left{
            color: $white;
        }

        div.icons{
            @include flex(row, space-between, start);
            margin-bottom: 1rem;

            .icon-left{
                font-size: 2.5rem;
            }

            a.icon-right{
                display: inline-block;
                width: 2rem;
                height: 2rem;
                font-size: 1.5rem;
                text-align: center;
                border-radius: 50%;
            }
        }

        h3{
            margin-bottom: 1rem;
        }
    }

</style>