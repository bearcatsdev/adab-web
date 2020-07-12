<template>
    <div>
        <announcement-bar v-if="showAnnouncement" @close="showAnnouncement = false"/>

        <div class="division">
            <!--            Left column-->
            <div class="column">
                <Section class="section" title="Sessions" icon="book">
                    <router-link :to="`session/${session['session_id']}`" class="text-body" v-for="session in userSessions" :key="session['session_id']">
                        <card class="section-card">
                            <div class="course-name">{{ session['course_id'] }} - {{ session['course_name'] }}</div>
                            <div class="topic">{{ session['topic_title'] }}</div>
                            <div class="topic-body">
                                {{ session['topic_description'] }}
                            </div>
                            <div class="information">
                                <div><i class="icon" data-feather="clock"/> {{ session['session_startdate'] | moment}}</div>
                                <div><i class="icon" data-feather="map-pin"/> {{ session['session_room'] }}, {{ session['session_campus'] }}</div>
                            </div>
                        </card>
                    </router-link>
                </Section>
            </div>

            <!--            Right column-->
            <div class="column">
                <Section class="section" title="Schedule" icon="calendar">
                    <card>
                        asdasdasd
                    </card>
                </Section>
            </div>
        </div>
    </div>
</template>

<script>
    import AnnouncementBar from "../../components/App/AnnouncementBar";
    import Section from "../../components/App/Section";
    import Card from "../../components/Card";
    import {mapState} from "vuex";
    import feather from "feather-icons";
    import moment from "moment";

    export default {
        name: "Dashboard",
        components: {Card, Section, AnnouncementBar},
        data() {
            return {
                showAnnouncement: true
            }
        },
        methods: {},
        computed: {
            ...mapState('UserCredentials', ['currentUser', 'userSessions'])
        },
        filters: {
            moment: function (date) {
                return moment(date).format('dddd, MMMM Do YYYY, HH:mm')
            }
        },
        mounted() {
            // get user profile
            this.$store.dispatch('UserCredentials/GET_CURRENT_USER')
                .catch(error => {
                    if (error.response.status === 401) {
                        // unauthorized
                        this.$router.push('/login')
                    }
                })

            // get user sessions
            this.$store.dispatch('UserCredentials/GET_SESSIONS')
                .catch(error => {
                    if (error.response.status === 401) {
                        // unauthorized
                        this.$router.push('/login')
                    }
                }).then(() => {

                // feather
                feather.replace()
            })
        }
    }
</script>

<style scoped>
    .division {
        @apply flex flex-col justify-between;
    }

    .column {
        @apply w-full px-6 py-4;
    }

    .section {
        @apply w-full;
    }

    .section-card {
        @apply w-full my-4 text-sm;
    }

    .section-card:hover {
        @apply bg-background;
    }

    .section-card > .course-name {
        @apply mb-2;
    }

    .section-card > .topic {
        @apply font-bold mb-1;
    }

    .section-card > .information {
        @apply mt-3 flex justify-between;
    }

    .section-card > .information > div {
        @apply flex items-center w-full;
    }

    .section-card > .information .icon {
        @apply w-4 mr-1;
    }

    @screen lg {
        .division {
            @apply flex-row;
        }
    }
</style>