<template>
    <section id="team">
        <div class="container">
            <div class="row">
                <p class="uppercase">
                    we like what we do
                </p>
            </div>
            <div class="row">
                <div class="col-xs-8">
                    <h2>
                        <span class="shown text-blue-lagoon">Team</span> 
                        of Experts
                    </h2>
                    <p class="text-grey">
                        Ethics and integrity are the bases on which out professionals build their careers. <br> They are fundamentals that become daily attitudes.
                    </p>
                    <div class="gallery-team row">
                        <!-- components -->
                        <CardMember 
                            class="col-xs-6"
                            v-for="(element, index) in teamMembers"
                            :key="index"
                            :element="element"
                        />
                    </div>
                </div>

                <div class="col-xs-4">

                </div>

            </div>
        </div>
    </section>
</template>

<script>
import CardMember from './CardMember.vue';

export default {
    name: 'sectionTeam',
    components: {
        CardMember
    },
    data: function(){
        return{
            teamMembers: [
                {
                    profilePhoto: '../../assets/images/team-1.jpg',
                    firstName: 'david',
                    lastName: 'cooper',
                    role: 'cto & co-founder',
                    socialLinks: [
                        {
                            socialName: 'Facebook',
                            urlProfile: '#'
                        },
                        {
                            socialName: 'Twitter',
                            urlProfile: ''
                        },
                        {
                            socialName: 'Linked-In',
                            urlProfile: '#'
                        }
                    ]
                },
                {
                    profilePhoto: '../../assets/images/team-2.jpg',
                    firstName: 'oliver',
                    lastName: 'jones',
                    role: 'chief procurement',
                    socialLinks: [
                        {
                            socialName: 'Facebook',
                            urlProfile: '#'
                        },
                        {
                            socialName: 'Twitter',
                            urlProfile: ''
                        },
                        {
                            socialName: 'Linked-In',
                            urlProfile: '#'
                        }
                    ]
                },
                {
                    profilePhoto: '../../assets/images/team-3.jpg',
                    firstName: 'emma',
                    lastName: 'lopez',
                    role: 'chief marketing',
                    socialLinks: [
                        {
                            socialName: 'Facebook',
                            urlProfile: '#'
                        },
                        {
                            socialName: 'Twitter',
                            urlProfile: ''
                        },
                        {
                            socialName: 'Linked-In',
                            urlProfile: '#'
                        }
                    ]
                },
                {
                    profilePhoto: '../../assets/images/team-4.jpg',
                    firstName: 't.',
                    lastName: 'johnson',
                    role: 'ceo & president',
                    socialLinks: [
                        {
                            socialName: 'Facebook',
                            urlProfile: '#'
                        },
                        {
                            socialName: 'Twitter',
                            urlProfile: ''
                        },
                        {
                            socialName: 'Linked-In',
                            urlProfile: '#'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';

    section#team{
        padding: 10rem 0;

        p.uppercase{
            margin-bottom: 1rem;
        }

        p.text-grey{
            margin-top: 1rem;
        }

        .gallery-team{
            margin-top: 2rem;
        }
    }

</style>