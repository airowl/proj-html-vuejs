<template>
    <section id="latest-news">
        <div class="container">

            <div id="latest-news-text" class="heading-with-btn">

                <p class="uppercase">our editorial content</p>
                <h2>
                    Latest 
                    <span class="shown text-blue-lagoon">News</span>
                </h2>

                <div class="p-btn">
                    
                    <p>
                        Every week we publish content about what is best in the business world.
                    </p>
                
                
                    <a href="#" class="btn full uppercase">
                        see all
                    </a>
                    
                </div>
                
            </div>

            <div class="gallery-news">
                <CardNews 
                    v-for="(element, index) in elementNews"
                    :key="index"
                    :element="element"
                />
            </div>

        </div>
    </section>
</template>

<script>
import CardNews from './CardNews.vue';

export default {
    name: 'sectionLatestNews',
    components: {
        CardNews
    },
    props: {
        elementNews: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#latest-news{
        background-color: rgba($silver-sand, $alpha: .2);
        padding: 8rem 0;

        .gallery-news{
            @include flex(row, space-between, center)
        }
    }

</style>