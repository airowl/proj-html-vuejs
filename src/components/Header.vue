<template>
    <header>
        <!-- container -->
        <!-- due div wrapper a sinistra e destra in flex -->
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <p></p>
                </div>
                <div class="col-6">
                    right
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'indexHeader'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

    header{
        background-color: $shark;
        color: $white;

        div.container{

        }
    }
</style>