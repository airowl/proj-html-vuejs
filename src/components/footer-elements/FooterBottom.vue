<template>
    <section id="footer-bottom">
        <div class="container">
            <p>
                Enjoy the low price. We are tracking any intention of piracy.
            </p>
            <p>
                NEXTGEN is Proudly Powered by Airowl
                </p>
        </div>
        
    </section>
</template>

<script>
export default {
    name: 'footerBottom',
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#footer-bottom{
        background-color: $wood-smoke;
        color: $white;
        padding: 2rem 0;

        div.container{
            @include flex(row, space-between, center);
        }
        
    }

</style>