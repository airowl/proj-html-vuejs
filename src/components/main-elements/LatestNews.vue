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
                    <div>
                        <p>
                            Every week we publish content about what is best in the business world.
                        </p>
                    </div>
                    <div>
                        <a href="#" class="btn full uppercase">
                            see all
                        </a>
                    </div>
                </div>
                
            </div>

            <div class="gallery-news">
                <CardNews 
                    v-for="(element, index) in newsList"
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
    data: function(){
        return{
            newsList: [
                {
                    id: 1,
                    bgImage: require('../../assets/images/news-1.jpg'),
                    text: 'Increasing creativity is possible for everyone'
                },
                {
                    id: 2,
                    bgImage: require('../../assets/images/news-2.jpg'),
                    text: 'Because market research in part of the business plan'
                },
                {
                    id: 3,
                    bgImage: require('../../assets/images/news-3.jpg'),
                    text: 'Working from home is now a trend'
                }
            ]
        }
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