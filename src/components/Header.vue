<template>
    <header>
        <!-- container -->
        <!-- due div wrapper a sinistra e destra in flex -->
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <p><font-awesome-icon icon="fa-solid fa-clock" />  Open Hours: Mon - Sat - 9:00 - 18:00</p>
                </div>
                <div class="col-6" id="header-right-side">
                    <p>
                        <font-awesome-icon icon="fa-solid fa-phone" />  
                        +1 (305) 1234-5678
                        </p>
                    <p>
                        <font-awesome-icon icon="fa-solid fa-envelope" />  
                        hello@example.com
                    </p>
                    <div class="header-social-links">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        <span><font-awesome-icon icon="fa-brands fa-twitter" /></span>
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
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
                    
                    .header-social-links > span{
                        margin: 0 2rem;
                    }
                }
            }
        }
    }
</style>