<template>
    <div id="card-member">
        <img src="../../assets/images/team-1.jpg" alt="">
        <div class="data-member">
            <h5>David Cooper</h5>
            <p class="uppercase">CTO & founder</p>
            <div class="social-links">
                <a href="#" class="icon">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#" class="icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'cardMember',
    props: {
        element: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    div#card-member{
        @include flex(row, static, center);
        margin-bottom: 3rem;
        
        img{
            width: 25%;
            border-radius: .3rem;
            margin-right: 1.5rem;
        }

        div.data-member{
            width: 50%;

            h5{
                font-size: 1.2rem;
            }

            p{
                color: $silver-sand;
                font-weight: 400;
            }

            div.social-links{
                margin-top: 1rem;

                a.icon{
                    display: inline-block;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background-color: rgba($blue-lagoon, $alpha: .2);
                    color: $blue-lagoon;
                    text-align: center;
                    line-height: 2.5rem;

                    &:nth-child(2){
                        margin: 0 .4rem;
                    }
                }
            }
        }
    }

</style>