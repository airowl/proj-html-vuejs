<template>
    <section id="features">
        <div class="container">

            <!-- HEADING -->
            <div id="features-text" class="heading-with-btn">

                <p class="uppercase">
                    our business areas
                </p>
                <h2>
                    Excellence in 
                    <span class="shown">Services</span>
                </h2>

                <div class="p-btn">
                    
                    <p class="text-white">
                        We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of <br> experienced and renowned professionals. There are some options that you can hire.
                    </p>
                    <a href="#" class="btn empty uppercase">
                        see all
                    </a>
                    
                </div>
                
            </div>

            <!-- CARDS -->
            <div id="features-cards" class="row">
                <CardFeature 
                    v-for="(element, index) in elementFeatures"
                    :key="index"
                    :element="element"
                />
            </div>
        </div>
    </section>
</template>

<script>
import CardFeature from './CardFeature.vue';

export default {
    name: 'sectionFeatures',
    components: {
        CardFeature
    },
    props: {
        elementFeatures: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#features{
        padding: 10rem 0;
        color: $white;
        background-color: $wood-smoke;

        #features-cards{
            gap: 1.5rem;
        }

    }

</style>