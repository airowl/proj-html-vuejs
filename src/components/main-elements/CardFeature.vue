<template>
    <div id="card-feature">
        <div class="icons">
            <span class="icon-left"><font-awesome-icon icon="fa-regular fa-desktop" /></span>
            <font-awesome-icon class="icon-right" icon="fa-solid fa-arrow-right" />
        </div>
        <h3 class="text-white">Audit & </h3>
        <p class="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <font-awesome-icon icon="fa-regular fa-chart-simple" />
    </div>
</template>

<script>
export default {
    name: 'cardFeature',
    props: ['element']
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