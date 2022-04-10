<template>
    <section id="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-xs-3">
                    <img src="../../assets/images/nexgen-logo.svg" alt="Logo company">
                    <p>A Functional HTML Template for Corporate & Business</p>
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <span>+1 (305) 1234-5678</span>

                    </div>
                    <div>
                        <i class="fa-solid fa-envelope"></i>
                        <span>hello@example.com</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Main Avenue, 987</span>
                    </div>
                    <a href="#" class="btn empty text-white">get in touch</a>
                </div>
                <nav class="col-xs-3">
                    <h3>About</h3>
                    <ul>
                        <li v-for="(element, index) in aboutsLinks" :key="index">
                            <a :href="element.url" class="text-white">
                                {{element.text}}
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="col-xs-3">
                    <h3>Services</h3>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
                <nav class="col-xs-3">
                    <h3>Support</h3>
                    <ul>
                        <li v-for="(element, index) in supportsLinks" :key="index">
                            <a :href="element.url" class="text-white">
                                {{element.text}}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'footerTop',
    props: {
        aboutsLinks: Array,
        supportsLinks: Array
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

        div.row{
            border: 1px solid red;
        }
    }

</style>