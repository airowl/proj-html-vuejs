<template>
    <main>
        <!-- section introduction -->
        <Hero />

        <!-- section introduction -->
        <CompanyIntro />

        <!-- section company result -->
        <CompanyResult />

        <!-- section features -->
        <Features />

        <!-- section team -->
        <Team />

        <!-- section last news -->
        <LatestNews />

        <!-- section news letter -->
        <NewsLetter />

        <!-- section contact form -->
        <FormContact />
    </main>
</template>

<script>
import Hero from './Hero.vue';
import CompanyIntro from './CompanyIntro.vue';
import CompanyResult from './CompanyResult.vue';
import Features from './Features.vue';
import Team from './Team.vue';
import LatestNews from './LatestNews.vue';
import NewsLetter from './NewsLetter.vue';
import FormContact from './FormContact.vue';

export default {
    name: 'indexMain',
    components: {
        Hero,
        CompanyIntro,
        CompanyResult,
        Features,
        Team,
        LatestNews,
        NewsLetter,
        FormContact
    }
}
</script>

<style lang="scss" scoped>

</style>