<template>
    <div id="card-feature">
        <div class="icons">
            <font-awesome-icon icon="fa-solid fa-desktop" />
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardFeature'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    div#card-feature{
        width: calc(100% / 3);
        height: 5rem;
        background-color: rgba($white, $alpha: .1);
        color: $blue-lagoon;
        padding: 1rem;
    }

</style>