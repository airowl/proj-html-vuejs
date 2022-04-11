<template>
    <header>
        <div class="container">

            <div class="row">

                <!-- left side -->
                <div class="col-xs-6">
                    <div class="data">
                        <i class="fa-solid fa-clock"></i>
                        <span>
                            Open Hours: Mon - Sat - 9:00 - 18:00
                        </span>
                    </div>
                </div>

                <!-- right side -->
                <div class="col-xs-6" id="header-right-side">

                    <div class="data">
                        <i class="fa-solid fa-phone"></i>
                        <span>
                            +1 (305) 1234-5678
                        </span>
                    </div>
                    <div class="data">
                        <i class="fa-solid fa-envelope"></i>
                        <span>
                            hello@example.com
                        </span>
                    </div>

                    <div class="header-social-links">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    
                </div>
            </div>

        </div>
    </header>
</template>

<script>
export default {
    name: 'indexHeader'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

    header{
        color: $silver-sand;
        font-size: $fnt-p-sm;
        background-color: $shark;
            
        div.row{
            padding: .8rem 0;

            div.data {
                margin-right: 1.75rem;

                i{
                    margin-right: .5rem;
                }
            }

            div#header-right-side{
                @include flex(row, end, center);

                .header-social-links > i:nth-child(2){
                    margin: 0 2rem;
                }
            }
        }
    }
    
</style>