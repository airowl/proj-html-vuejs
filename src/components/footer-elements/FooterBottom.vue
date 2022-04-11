<template>
    <section id="footer-bottom">
        <div class="container">

            <!-- LEFT SIDE -->
            <p>
                Enjoy the low price. We are tracking any intention of piracy.
            </p>

            <!-- RIGHT SIDE -->
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
        padding: 2rem 0;
        background-color: black;

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