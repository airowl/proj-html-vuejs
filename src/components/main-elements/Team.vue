<template>
    <section id="team">

    </section>
</template>

<script>
export default {
    name: 'sectionTeam',
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

</style>