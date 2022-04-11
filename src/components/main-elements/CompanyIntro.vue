<template>
    <section id="company-intro">

        <!-- TEXT PRINCIPALE -->
        <p class="uppercase">
            introducing video
        </p>
        <h2>Advisory 
            <span class="shown text-blue-lagoon">Performance</span>
        </h2>
        <p>
            Financial executives need to review their strategies, operating models and capabilities so that their <br> areas can generate sound information for better decision making.
        </p>

        <!-- IMAGE PRINCIPALE -->
        <img src="../../assets/images/video-1.jpg" alt="Introduction Video">

    </section>
</template>

<script>
export default {
    name: 'sectionCompanyIntro'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#company-intro{
        padding: 8rem;
        text-align: center;

        & *:not(:last-child){
            margin-bottom: 2rem;
        }

        img{
            margin-top: 1rem;
            height: 30rem;
            border-radius: .2rem;
        }    
    }

</style>