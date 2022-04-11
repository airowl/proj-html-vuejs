<template>
    <section id="company-result">

        <!-- BACKGROUND IMAGE -->
        <img src="../../assets/images/city.jpg" alt="Background City">
        <div class="overlay"></div>

        <!-- CONTENTS -->
        <div class="company-result-contents">

            <p class="uppercase">
                what are we doing
            </p>

            <h2 class="text-white">
                <span class="shown">Result</span> 
                in Numbers
            </h2>

            <div class="container">
                <ul>
                    <li v-for="(element, index) in elementDataResults" :key="index">
                        <p class="number">{{element.number}}</p>
                        <h3 class="text-white">{{element.text}}</h3>
                    </li>
                </ul>
            </div>

        </div>
        
    </section>
</template>

<script>
export default {
    name: 'sectionCompanyResult',
    props: {
        elementDataResults: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

section#company-result{
    position: relative;
    padding: 8rem;
    text-align: center;
    overflow: hidden;

    img{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        filter: grayscale(100%);
    }

    div.overlay{
        background-color: rgba(0,0,0,0.7);
    }

    div.company-result-contents{
        position: relative;
        z-index: 2;

        h2{
            margin-top: .8rem;
        }

        ul{
            @include flex(row, space-between, center);
            margin-top: 6rem;

            p.number{
                margin-bottom: .7rem;
                font-size: 2rem;
                color: $surfie-green;
                font-weight: 600;
            }
        }
    }

}

</style>