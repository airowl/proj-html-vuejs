<template>
    <section id="latest-news">
        <div class="container">

            <div id="latest-news-text">
                <p class="uppercase">our editorial content</p>
                <h2>
                    Latest 
                    <span class="shown">News</span>
                </h2>

                <div class="row">
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
    
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#latest-news{
        background-color: rgba($silver-sand, $alpha: .2);
        padding: 5rem;

        div#latest-news-text{
            margin-bottom: 2rem;
                
            p{
                margin-bottom: 1rem;
            }

            h2{
                margin-bottom: 2rem;
            }

            div.row{
                @include flex(row, space-between, center)
            }
        }
    }

</style>