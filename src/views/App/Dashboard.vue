<template>
    <div>
        <announcement-bar v-if="showAnnouncement" @close="showAnnouncement = false"/>
        <transition name="fade">
            <div class="info">
                <Section color="#C2DAFE">
                    <div class="info-section">
                        <img src="../../assets/images/pale-work-at-home.png"/>
                        <div class="pl-8 inline">
                            <h3>Selamat Datang di ADAB!</h3>
                            <p>Terima kasih telah membantu mencoba aplikasi ADAB - Ayo Dengar Ayo Bicara. Saran dan
                                masukan Anda sangat dibutuhkan untuk mengembangi produk kami ini.</p>
                            <Button class="mt-4">Pelajari lebih lanjut</Button>
                        </div>
                    </div>
                </Section>
            </div>
        </transition>

        <div class="division">
            <!-- Left column-->
            <div class="column">
                <Section class="section" title="Inbox" icon="inbox">
                    <div v-if="userSessions.length">
                        <router-link :to="`session/${session['session_id']}`" class="text-body"
                                     v-for="session in userSessions" :key="session['session_id']">
                            <card class="section-card">
                                <div class="course-name">{{ session['course_id'] }} - {{ session['course_name'] }}</div>
                                <div class="topic">{{ session['topic_title'] }}</div>
                                <div class="topic-body">
                                    {{ session['topic_description'] }}
                                </div>
                                <div class="information">
                                    <div><i class="icon" data-feather="clock"/> {{ session['session_startdate'] |
                                        moment}}
                                    </div>
                                    <div><i class="icon" data-feather="map-pin"/> {{ session['session_room'] }}, {{
                                        session['session_campus'] }}
                                    </div>
                                </div>
                            </card>
                        </router-link>
                    </div>
                    <div v-else>
                    </div>
                </Section>

                <Section class="section mt-8" title="Sessions" icon="book">
                    <div v-if="userSessions.length">
                        <router-link :to="`session/${session['session_id']}`" class="text-body"
                                     v-for="session in userSessions" :key="session['session_id']">
                            <card class="section-card">
                                <div class="course-name">{{ session['course_id'] }} - {{ session['course_name'] }}</div>
                                <div class="topic">{{ session['topic_title'] }}</div>
                                <div class="topic-body">
                                    {{ session['topic_description'] }}
                                </div>
                                <div class="information">
                                    <div><i class="icon" data-feather="clock"/> {{ session['session_startdate'] |
                                        moment}}
                                    </div>
                                    <div><i class="icon" data-feather="map-pin"/> {{ session['session_room'] }}, {{
                                        session['session_campus'] }}
                                    </div>
                                </div>
                            </card>
                        </router-link>
                    </div>
                    <div v-else>
                    </div>
                </Section>


            </div>

            <!--  Right column-->
            <div class="column">
                <Section class="section" title="Schedule" icon="calendar">

                </Section>
            </div>
        </div>
    </div>
</template>

<script>
    import AnnouncementBar from "../../components/App/AnnouncementBar";
    import Section from "../../components/App/Section";
    import Card from "../../components/Card";
    import Button from "../../components/Button";
    import {mapState} from "vuex";
    import moment from "moment";

    export default {
        name: "Dashboard",
        components: {Card, Section, AnnouncementBar, Button},
        data() {
            return {
                showAnnouncement: false
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
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .info {
        @apply px-6;
        @apply py-4;
        display: none;
    }

    .info-section {
        @apply flex;
        @apply px-8;
        @apply py-8;
    }

    .info-section > img {
        width: 30%;
        height: 30%;
        max-width: 200px;
    }

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
        .info {
            display: block;
        }

        .division {
            @apply flex-row;
        }
    }
</style>