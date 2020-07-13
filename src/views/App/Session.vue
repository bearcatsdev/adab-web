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

                // setup speech recognition
                setupSpeechRecognition(this.sessionDetails['course_lang'])
            }).catch((error) => {
                // do something when error
                console.log(error)
            })

            const setupSpeechRecognition = (lang) => {
                // speech recognition
                const recognition = new (window.speechRecognition || window.webkitSpeechRecognition)()
                recognition.interimResults = false;
                recognition.lang = lang
                recognition.start()

                recognition.onresult = (event) => {
                    const recognized = event.results[0][0].transcript
                    // console.log(recognized)
                    this.content += ` ${recognized}`
                }

                recognition.onend = () => {
                    recognition.stop();
                    recognition.start();
                };
            }
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