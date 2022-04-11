<template>
    <section id="footer-bottom">
        <div class="container">
            <p>
                Enjoy the low price. We are tracking any intention of piracy.
            </p>
            <p>
                2020 NEXGEN is Proudly Powered by <a href="#">Codings</a>.
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
        padding: 2rem 0;

        div.container{
            @include flex(row, space-between, center);

            p{
                color: $white;

                a{
                    color: $blue-lagoon;
                }
            }
        }
        
    }

</style>