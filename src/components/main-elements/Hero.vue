<template>
    <section id="hero">

        <div class="overlay"></div> 

        <!-- NAVBAR -->
        <header>
            <div class="container">
                <nav class="row">

                    <!-- left side -->
                    <div class="col-xs-5">
                        <img src="../../assets/images/nexgen-logo.svg" alt="Logo SVG">
                    </div>

                    <!-- right side -->
                    <div class="col-xs-7" id="col-right">
                        <ul>
                            <li v-for="(element, index) in elementsNavBar" :key="index">
                                <a :href="element.url" class="uppercase text-white">
                                    {{element.text}}
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-white">
                                    <i class="fa-regular fa-user"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="btn full uppercase">get in touch</a>
                            </li>
                        </ul>

                    </div>
                    
                    
                </nav>
            </div>
            
        </header>

        <!-- HERO CONTENT -->
        <div id="hero-content">
            <div class="hero-elements">
                <h1>
                    Financial Risk
                </h1>
                <p>
                    The right outcomes depend on continuous rigor in governance, models, and processes across the finance function.
                </p>

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
    props: {
        elementsNavBar: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#hero{
        position: relative;
        width: 100vw;
        height: calc(100vh - 46.6px);
        color: $white;
        background-image: url(../../assets/images/bg-2.jpg);
        background-size: cover;
        background-repeat: no-repeat;

        header, div#hero-content{
            position: relative;
            z-index: 1;
        }

        // NAVBAR
        header{

            nav.row{
                @include flex(row, end, center);
                padding: 1rem 0;

                img{
                    height: 3rem;
                }

                ul{
                    @include flex(row, center, center);

                    li:not(:last-child){
                        margin-right: 1.5rem;
                    }
                }
                
            }
        }

        // HERO CONTENT
        div#hero-content{
            height: calc(100% - 85px);

            div.hero-elements{
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 30%;
                text-align: center;

                p{
                    margin: 2rem 0;
                    color: $silver-sand;
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