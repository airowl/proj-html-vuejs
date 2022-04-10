<template>
    <header>
        <!-- container -->
        <!-- due div wrapper a sinistra e destra in flex -->
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <p><i class="fa-solid fa-clock"></i>  Open Hours: Mon - Sat - 9:00 - 18:00</p>
                </div>
                <div class="col-6" id="header-right-side">
                    <p>
                        <i class="fa-solid fa-phone"></i>  
                        +1 (305) 1234-5678
                    </p>
                    <p>
                        <i class="fa-solid fa-envelope"></i>  
                        hello@example.com
                    </p>
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
        background-color: $shark;
        color: $white;

        div.container{
            
            div.row{
                @include flex(row, space-between, center);
                padding: .8rem 0;

                div#header-right-side{
                    @include flex(row, center, center);

                    > p {
                        margin-right: 1.75rem;
                    }
                    
                    .header-social-links > i:nth-child(2){
                        margin: 0 2rem;
                    }
                }
            }
        }
    }
</style>