<template>
    <footer>
        <!-- FOOTER TOP -->
        <FooterTop />
        <!-- FOOTER BOTTOM -->
        <FooterBottom />
    </footer>
</template>

<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';


export default {
    name: 'indexFooter',
    components: {
        FooterTop,
        FooterBottom
    }
}
</script>

<style lang="scss" scoped>

</style>