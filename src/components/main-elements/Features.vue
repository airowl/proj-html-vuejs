<template>
    <section id="features">
        <div class="container">

            <div id="features-text" class="heading-with-btn">

                <p class="uppercase">our business areas</p>
                <h2>
                    Excellence in 
                    <span class="shown">Services</span>
                </h2>

                <div class="p-btn">
                    <div>
                        <p class="text-white">
                            We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of <br> experienced and renowned professionals. There are some options that you can hire.
                        </p>
                    </div>
                    <div>
                        <a href="#" class="btn empty uppercase">
                            see all
                        </a>
                    </div>
                </div>
                
            </div>

            <div id="features-cards" class="row">
                <CardFeature 
                    v-for="(element, index) in featuresElements"
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
    data: function(){
        return{
            featuresElements: [
                {
                    iconName: 'fa-desktop',
                    title: 'Audit & Assurance',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
                },
                {
                    iconName: 'fa-briefcase',
                    title: 'Financial Advisory',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
                },
                {
                    iconName: 'fa-chart-simple',
                    title: 'Analytics and M&A',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
                },
                {
                    iconName: 'fa-plane-up',
                    title: 'Middle Marketing',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
                },
                {
                    iconName: 'fa-earth-asia',
                    title: 'Legal Consulting',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
                },
                {
                    iconName: 'fa-folder-open',
                    title: 'Regulatory Risk',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#features{
        padding: 10rem 0;
        background-color: $wood-smoke;
        color: $white;

        #features-cards{
            gap: 1.5rem;
        }

    }

</style>