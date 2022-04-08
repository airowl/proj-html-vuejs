<template>
    <section id="features">
        <div class="container">

            <div id="features-text">
                <p class="uppercase">our business areas</p>
                <h2>
                    Excellence in 
                    <span class="shown">Services</span>
                </h2>

                <div class="row">
                    <div class="col-xs-10">
                        <p class="col-xs-10">
                            We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of <br> experienced and renowned professionals. There are some options that you can hire.
                        </p>
                    </div>
                    <div class="col-xs-2">
                        <a href="#" class="btn empty uppercase">
                            see all
                        </a>
                    </div>
                </div>

            </div>

            <div class="features-cards">
                <div class="row">
                    <CardFeature />
                </div>
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
                    iconName: 'fa-brief-case',
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
        padding: 4rem 0;
        background-color: $wood-smoke;
        color: $white;

        #features-text{
            margin-bottom: 2rem;
                
            p{
                margin-bottom: 1rem;
            }

            h2{
                margin-bottom: 2rem;
            }

        }
    }

</style>