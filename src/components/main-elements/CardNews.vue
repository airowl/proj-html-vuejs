<template>
    <div id="card-news">

        <!-- BACKGROUND IMAGE -->
        <img :src="element.bgImage" :alt="`News n. ${element.id}`">
        <div class="overlay"></div>

        <!-- CONTENT -->
        <div class="card-content">
            
            <div class="data-news">
                <span>
                    <i class="fa-regular fa-user"></i>
                    <span class="name">
                        {{element.author}}
                    </span>
                </span>
                <span>
                    <i class="fa-regular fa-clock"></i>
                    <span class="date">
                        {{element.datePublish}}
                    </span>
                </span>
            </div>
            <div>
                <h3>{{element.text}}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'cardNews',
    props: {
        element: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    div#card-news{
        position: relative;
        width: calc((100% / 3) - 1rem);
        height: 20rem;
        color: $white;
        border-radius: 1rem;
        overflow: hidden;

        img{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
        }

        div.card-content{
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 2.5rem 1.5rem;
            @include flex(column, space-between, center);

            &:hover div.data-news,
            &:hover p{
                display: block;
                opacity: 1;
            }

            div.data-news{
                opacity: 0;

                > span:first-child{
                    margin-right: 1.5rem;
                }

                i{
                    margin-right: .3rem;
                }
            }

            p{
                margin-top: 1rem;
                display: none;
                color: $white;
            }
        }
    }

</style>