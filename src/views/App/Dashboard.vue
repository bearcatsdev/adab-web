<template>
    <div>
        <announcement-bar v-if="showAnnouncement" @close="showAnnouncement = false"/>

        <div class="division">
<!--            Left column-->
            <div class="column">
                <Section class="section" title="Sessions" icon="book">
                    <a href="#" class="text-body">
                        <card class="section-card">
                            <div class="course-name">COMP6047 - Algorithm & Programming</div>
                            <div class="topic">Installation & Setup</div>
                            <div class="topic-body">
                                Lorem ipsum dolor sit amet, ex nostrud cotidieque usu, ut has persius iuvaret referrentur. Maiorum molestiae gloriatur an nam, id doctus convenire sea. Modo feugait sensibus sea no, et nobis referrentur comprehensam vis. Te erat mazim honestatis usu, has facilisis salutatus ad, cu definiebas appellantur mea. Possim suscipit lucilius usu ea, ne pro mazim constituto. Audire comprehensam sea in, ei dolore disputando sit.
                            </div>
                        </card>
                    </a>
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
    export default {
        name: "Dashboard",
        components: {Card, Section, AnnouncementBar},
        data () {
            return {
                showAnnouncement: true
            }
        },
        methods: {
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
        @apply mb-1;
    }

    .section-card > .topic {
        @apply font-bold mb-1;
    }

    @screen lg {
        .division {
            @apply flex-row;
        }
    }
</style>