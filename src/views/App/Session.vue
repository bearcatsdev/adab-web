<template>
    <div class="session">
        <Section class="section"
                 icon="book-open"
                 :title="`${sessionDetails['course_name']}: ${sessionDetails['topic_title']}`"
                 :subtitle="`${sessionDetails['course_id']} - ${sessionDetails['lecturer_name']} (${sessionDetails['course_lang']})`">
            {{ content }}
        </Section>
    </div>
</template>

<script>
    import Section from "../../components/App/Section";
    import SessionApi from "../../services/api/Session";
    export default {
        name: "Session",
        components: {Section},
        data () {
            return {
                sessionId: this.$route.params.id,
                sessionDetails: {},
                content: ''
            }
        },
        mounted() {
            SessionApi.getSessionDetails(this.sessionId).then((response) => {
                this.sessionDetails = response.data.values
                this.content = this.sessionDetails['content']
            }).catch((error) => {
                // do something when error
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .session {
        @apply p-6;
    }

    .section {
        @apply w-full;
    }
</style>