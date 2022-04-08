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
                        <li>
                            
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
        <div class="hero-content">

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

        header{
            position: relative;
            z-index: 1;

            nav.row{
                @include flex(row, space-between, center);

                img{
                    height: 2rem;
                }

                ul{
                    @include flex(row, center, center);

                    li:not(:last-child){
                        margin-right: 2rem;
                    }
                }
            }
        }
    }

</style>