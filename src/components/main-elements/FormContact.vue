<template>
    <section id="form-contact">
        <div class="container">
            <div class="row">

                <!-- HEADING -->
                <div class="col-xs-8">
                    <div id="form-contact-heading" class="heading-without-btn">

                        <p class="uppercase">send a message</p>
                        <h2>
                            Get in 
                            <span class="shown text-blue-lagoon">Touch</span>
                        </h2>
                        <p class="description">
                            We will respond to your message as soon as possible.
                        </p>
                        
                    </div>

                    <!-- FORM -->
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

                <!-- RIGHT SIDE -->
                <div class="col-xs-4" id="col-right-side">
                    <h3>Example Inc.</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        <br>
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>

                    <div class="data">
                        <a href="#" class="icon">
                            <i class="fa-solid fa-phone"></i>
                        </a>
                        <span>+1 (305) 1234-5678</span>
                    </div>
                    <div class="data">
                        <a href="#" class="icon">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <span>hello@example.com</span>
                    </div>
                    <div class="data">
                        <a href="#" class="icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </a>
                        <span>Main Avenue, 987</span>
                    </div>

                    <a href="#" class="btn empty">view map</a>
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
        padding: 8rem 0;

        form{
            margin-top: 3rem;
            flex-wrap: wrap;
            @include flex(row, space-between, center);

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

        div#col-right-side{
            padding-left: 2rem;

            h3{
                margin-bottom: 1rem;
            }

            div.data{
                margin-top: 1rem;

                span{
                    margin-left: 1rem;
                    color: $blue-lagoon;
                }
            }

            a.btn{
                margin-top: 2rem;
                color: $blue-lagoon;
                transition: $standard;

                &:hover{
                    color: $white;
                }
            }
        }
    }


</style>