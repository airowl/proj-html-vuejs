<template>
    <section id="form-contact">
        <div class="container">
            <div class="row">
                <div class="col-xs-7">
                    <div id="form-contact-heading" class="heading-without-btn">

                        <p class="uppercase">send a message</p>
                        <h2>
                            Get in 
                            <span class="shown">Touch</span>
                        </h2>
                        <p class="description">
                            We will respond to your message as soon as possible.
                        </p>
                        
                    </div>

                    <form action="">
                        <input class="input-style input-name" type="text" placeholder="Name" name="firstName">
                        <input class="input-style" type="email" placeholder="Email" name="email">
                        <input class="input-style" type="text" placeholder="Phone" name="phoneNumber">
                        <input class="input-style input-more-info" type="text" placeholder="More Info" name="moreInfo">
                        <textarea id="message-input" class="input-style" type="text" placeholder="Message" name="firstName">
                        </textarea>

                        <button>
                            Send
                        </button>

                    </form>
                </div>
                <div class="col-xs-5">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionFormContact'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#form-contact{
        padding: 10rem 0;

        form{
            @include flex(row, space-between, center);
            flex-wrap: wrap;
            margin-top: 3rem;

            input{
                width: calc(50% - 1rem);
                background-color: rgba($abbey, $alpha: .1);
            }

            .input-name{
                background-image: url('../../assets/images/image-input-1.png');
                background-position: 98%;
                background-repeat: no-repeat;
            }

            .input-more-info{
                background-image: url('../../assets/images/image-input-2.png');
                background-position: 98%;
                background-size: 1rem;
                background-repeat: no-repeat;
            }

            textarea#message-input{
                width: 100%;
                height: 10rem;
                background-color: rgba($abbey, $alpha: .1);
            }
        }
    }


</style>