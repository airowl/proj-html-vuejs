<template>
    <section id="news-letter">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <div id="news-letter-heading" class="heading-without-btn">

                        <p class="uppercase">our editorial content</p>
                        <h2>
                            Latest 
                            <span class="shown text-blue-lagoon">News</span>
                        </h2>
                        <p class="description">
                            Every week we publish content about what is best in the business world.
                        </p>
                        
                    </div>
                </div>
                <div class="col-xs-6"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionNewsLetter'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#news-letter{

        div.col-xs-6{
            border: 1px solid red;
        }        
    }


</style>