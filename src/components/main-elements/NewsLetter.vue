<template>
    <section id="news-letter">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <div id="news-letter-heading" class="heading-without-btn">

                        <p class="uppercase">newsletter</p>
                        <h2 class="text-white">
                            <span class="shown">Know</span> 
                            First
                        </h2>
                        <p class="description text-white">
                            Follow closely and receive content about our company and the news of the current market.
                        </p>
                        
                    </div>
                </div>
                <div class="col-xs-6">
                    <form action="">
                        <input class="input-style" type="text" placeholder="Name" name="firstname">
                        <input class="input-style" type="email" placeholder="Email" name="email">
                        <button>
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionNewsLetter'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#news-letter{
        background-color: $wood-smoke;
        padding: 8rem 0;

        div.container{
            width: 50%;

            div#news-letter-heading{
                margin-right: 1rem
            }

            form{
                @include flex(column, center, center);

                input{
                    width: 100%;
                    color: $white;
                    background-color: rgba($white, $alpha: .1);
                }

                button{
                    align-self: flex-start;
                }
            }
        }     
    }


</style>