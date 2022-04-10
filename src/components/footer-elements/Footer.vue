<template>
    <footer>
        <!-- FOOTER TOP -->
        <FooterTop 
            :aboutsLinks="aboutsList"
            :supportsLinks="supportsList"
            :featuresLinks="featuresElements"
        />
        <!-- FOOTER BOTTOM -->
        <FooterBottom />
    </footer>
</template>

<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';


export default {
    name: 'indexFooter',
    components: {
        FooterTop,
        FooterBottom
    },
    data: function(){
        return{
            aboutsList: [
                {
                    text: 'The Company',
                    url: '#'
                },
                {
                    text: 'Institutional',
                    url: '#'
                },
                {
                    text: 'Social & Events',
                    url: '#'
                },
                {
                    text: 'Innovation',
                    url: '#'
                },
                {
                    text: 'Enviroment',
                    url: '#'
                },
                {
                    text: 'Technology',
                    url: '#'
                }
            ],
            supportsList: [
                {
                    text: 'Responsability',
                    url: '#'
                },
                {
                    text: 'Terms of Use',
                    url: '#'
                },
                {
                    text: 'About Cookies',
                    url: '#'
                },
                {
                    text: 'Privacy Policy',
                    url: '#'
                },
                {
                    text: 'Accessibility',
                    url: '#'
                },
                {
                    text: 'Information',
                    url: '#'
                }
            ]
        }
    },
    props: {
        featuresElements: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

</style>