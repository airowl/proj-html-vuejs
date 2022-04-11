<template>
    <main>
        <!-- section introduction -->
        <Hero 
            :elementsNavBar="navBarLinks"
        />

        <!-- section introduction -->
        <CompanyIntro />

        <!-- section company result -->
        <CompanyResult 
            :elementDataResults="dataResults"
        />

        <!-- section features -->
        <Features 
            :elementFeatures="featuresElements"
        />

        <!-- section team -->
        <Team 
            :elementTeam="teamMembers"
        />

        <!-- section last news -->
        <LatestNews 
            :elementNews="newsList"
        />

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
    },
    data: function(){
        return{
            navBarLinks: [
                {
                    text: 'home',
                    url: '#'
                },
                {
                    text: 'about',
                    url: '#'
                },
                {
                    text: 'services',
                    url: '#'
                },
                {
                    text: 'team',
                    url: '#'
                },
                {
                    text: 'blog',
                    url: '#'
                }
            ],
            dataResults: [
                {
                    number: 128,
                    text: 'Certifications'
                },
                {
                    number: 230,
                    text: 'Employees'
                },
                {
                    number: 517,
                    text: 'Customers'
                },
                {
                    number: 94,
                    text: 'Countries Served'
                },
            ],
            featuresElements: [
                {
                    iconName: 'fa-desktop',
                    title: 'Audit & Assurance',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    url: '#'
                },
                {
                    iconName: 'fa-briefcase',
                    title: 'Financial Advisory',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    url: '#'
                },
                {
                    iconName: 'fa-chart-simple',
                    title: 'Analytics and M&A',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    url: '#'
                },
                {
                    iconName: 'fa-plane-up',
                    title: 'Middle Marketing',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    url: '#'
                },
                {
                    iconName: 'fa-earth-asia',
                    title: 'Legal Consulting',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    url: '#'
                },
                {
                    iconName: 'fa-folder-open',
                    title: 'Regulatory Risk',
                    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                    url: '#'
                }
            ],
            teamMembers: [
                {
                    profilePhoto: require('../../assets/images/team-1.jpg'),
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
                    profilePhoto: require('../../assets/images/team-3.jpg'),
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
                    profilePhoto: require('../../assets/images/team-2.jpg'),
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
                    profilePhoto: require('../../assets/images/team-4.jpg'),
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
            ],
            newsList: [
                {
                    id: 1,
                    bgImage: require('../../assets/images/news-1.jpg'),
                    text: 'Increasing creativity is possible for everyone'
                },
                {
                    id: 2,
                    bgImage: require('../../assets/images/news-2.jpg'),
                    text: 'Because market research in part of the business plan'
                },
                {
                    id: 3,
                    bgImage: require('../../assets/images/news-3.jpg'),
                    text: 'Working from home is now a trend'
                }
            ]
        }
    },
    created(){
        this.$emit('features', this.featuresElements)
    }
}
</script>

<style lang="scss" scoped>

</style>