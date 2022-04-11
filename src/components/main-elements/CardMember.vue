<template>
    <div id="card-member">

        <img :src="element.profilePhoto" :alt="element.firstName + element.lastName">

        <div class="data-member">
            <h5>{{getFirstLetterUpper(element.firstName)}} {{getFirstLetterUpper(element.lastName)}}</h5>

            <p class="uppercase">{{element.role}}</p>

            <div class="social-links">
                <a :href="element.socialLinks[0].urlProfile" class="icon">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a :href="element.socialLinks[1].urlProfile" class="icon">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a :href="element.socialLinks[2].urlProfile" class="icon">
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
        element: Object
    },
    methods: {
        getFirstLetterUpper(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    div#card-member{
        @include flex(row, static, center);
        width: calc((100% / 2) - 3rem);
        
        img{
            width: 25%;
            border-radius: .3rem;
            margin-right: 1.5rem;
        }

        div.data-member{
            width: 50%;

            h5{
                font-size: 1.2rem;
                margin-bottom: .5rem;
            }

            p{
                color: $salt-box;
                font-weight: 400;
            }

            div.social-links{
                margin-top: 1rem;
                    

                a.icon:nth-child(2){
                    margin: 0 .4rem;
                }
            }
        }
    }

</style>