<template>
    <section id="hero">
        <div class="overlay"></div> 
        <!-- header -->
        <header>
            <div class="container">
                <nav class="row">
                    <div class="col-5">
                        <img src="../../assets/images/nexgen-logo.svg" alt="Logo SVG">
                    </div>
                    <ul class="col-7">
                        <li v-for="(element, index) in navBarLinks" :key="index">
                            <a :href="element.url" class="uppercase text-white">
                                {{element.text}}
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white">
                                <font-awesome-icon icon="fa-regular fa-user" />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn full uppercase">get in touch</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
        <!-- hero content -->
        <div id="hero-content">
            <div class="hero-elements">
                <h1>Financial Risk</h1>

                <p>The right outcomes depend on continuous rigor in governance, models, and processes across the finance function.</p>

                <div class="hero-buttons">
                    <a href="#" class="btn full">
                        get in touch
                    </a>
                    <a href="#" class="btn empty">
                        read more
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionHero',
    data: function(){
        return{
            navBarLinks: [
                {
                    text: 'home',
                    url: '#'
                },
                {
                    text: 'about',
                    url: '#'
                },
                {
                    text: 'services',
                    url: '#'
                },
                {
                    text: 'team',
                    url: '#'
                },
                {
                    text: 'blog',
                    url: '#'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';
    section#hero{
        background-image: url(../../assets/images/bg-2.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;
        height: calc(100vh - 46.6px);
        color: $white;
        position: relative;

        header, div#hero-content{
            position: relative;
            z-index: 1;
        }

        header{

            nav.row{
                @include flex(row, space-between, center);
                padding: 1rem 0;

                img{
                    height: 3rem;
                }

                ul{
                    @include flex(row, center, center);

                    li:not(:last-child){
                        margin-right: 3rem;
                    }
                }
            }
        }

        div#hero-content{
            height: calc(100% - 85px);

            div.hero-elements{
                text-align: center;
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 30%;

                p{
                    margin: 2rem 0;
                }

                div.hero-buttons{
                    
                    a:not(:last-child){
                        margin-right: 1.5rem;
                    }
                }
            }
        }
    }

</style>