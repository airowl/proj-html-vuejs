<template>
    <section id="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-xs-3" id="data-company">
                    <img src="../../assets/images/nexgen-logo.svg" alt="Logo company">
                    <p>A Functional HTML Template for Corporate & Business</p>
                    <div class="data">
                        <i class="fa-solid fa-phone"></i>
                        <span>+1 (305) 1234-5678</span>
                    </div>
                    <div class="data">
                        <i class="fa-solid fa-envelope"></i>
                        <span>hello@example.com</span>
                    </div>
                    <div class="data">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Main Avenue, 987</span>
                    </div>
                    <a href="#" class="btn empty text-white">get in touch</a>
                </div>

                <div class="col-xs-3">
                    <div class="wrapper">
                    <h3>About</h3>
                    <ul>
                        <li v-for="(element, index) in aboutsLinks" :key="index">
                            <i class="fa-solid fa-chevron-right"></i>
                            <a :href="element.url" class="text-white">
                                {{element.text}}
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>

                <div class="col-xs-3">
                    <div class="wrapper">
                        <h3>Services</h3>
                        <ul>
                            <li v-for="(element, index) in featuresLinks" :key="index">
                                <i class="fa-solid fa-chevron-right"></i>
                                <a :href="element.url" class="text-white">
                                    {{element.title}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-xs-3">
                    <div class="wrapper">
                        <h3>Support</h3>
                        <ul>
                            <li v-for="(element, index) in supportsLinks" :key="index">
                                <i class="fa-solid fa-chevron-right"></i>
                                <a :href="element.url" class="text-white">
                                    {{element.text}}
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'footerTop',
    props: {
        aboutsLinks: Array,
        supportsLinks: Array,
        featuresLinks: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#footer-top{
        background-image: url(../../assets/images/bg-7.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 10rem 0;
        color: $white;

        div#data-company{
            img{
                height: 3rem;
                margin-bottom: 1rem;
            }

            p{
                margin-bottom: 1rem;
            }

            div.data{
                margin-bottom: 1rem;
                
            }
        }
        
        div.wrapper{
            background-color: rgba($white, $alpha: .1);
            margin-left: 2rem;
            height: 100%;
            border-radius: 1rem;
            padding: 2rem 3rem;

            h3{
                margin-bottom: 1rem;
            }

            li{

                i{
                    margin-right: .8rem;
                }

                &:not(:last-child){
                    margin-bottom: .8rem;
                }
            }
            
            
        }
    }

</style>