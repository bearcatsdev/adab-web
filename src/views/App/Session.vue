<template>
    <div class="session">
        <Section class="section"
                 icon="book-open"
                 :title="`${sessionDetails['course_name']}: ${sessionDetails['topic_title']}`"
                 :subtitle="`${sessionDetails['course_id']} - ${sessionDetails['lecturer_name']} (${sessionDetails['course_lang']})`">
            <div v-if="currentUser['can_talk']">
                <Button @click="toggleTalk">{{ talk ? 'Stop' : 'Start' }} talking</Button>
            </div>
            <div>
                {{ content }}
                <span class="blinking-cursor" v-if="blinkingCursor">|</span>
            </div>
        </Section>
    </div>
</template>

<script>
    import Section from "../../components/App/Section"
    import SessionApi from "../../services/api/Session"
    import io from "socket.io-client"
    import {mapState} from "vuex";
    import Button from "../../components/Button";

    const socket = io.connect('https://adabapi.bearcats.dev')
    let recognition

    export default {
        name: "Session",
        components: {Button, Section},
        data() {
            return {
                sessionId: this.$route.params.id,
                sessionDetails: {},
                content: '',
                talk: false,
                blinkingCursor: false
            }
        },
        computed: {
            ...mapState('UserCredentials', ['currentUser'])
        },
        methods: {
            toggleTalk() {
                this.talk = !this.talk
                if (this.talk) {
                    this.startSpeechRecognition()
                } else {
                    this.stopSpeechRecognition()
                }
            },
            startSpeechRecognition() {
                // speech recognition
                this.talk = true
                socket.emit('start_talking')
                recognition = new (window.speechRecognition || window.webkitSpeechRecognition)()
                recognition.interimResults = false
                recognition.lang = this.sessionDetails['course_lang']
                recognition.start()

                recognition.onresult = (event) => {
                    const recognized = event.results[0][0].transcript
                    // console.log(recognized)
                    socket.emit('message', recognized)
                }

                recognition.onend = () => {
                    recognition.stop()
                    recognition.start()
                };
            },
            stopSpeechRecognition() {
                this.talk = false
                socket.emit('stop_talking')
                recognition.stop()
                recognition = null
            },
            setupSocketIo() {
                // socket.io
                socket.on('message', (message) => {
                    this.content += ` ${message}`
                });

                socket.on('start_talking', () => {
                    this.blinkingCursor = true
                });

                socket.on('stop_talking', () => {
                    this.blinkingCursor = false
                });

                socket.emit('join_room', this.sessionId);
            }
        },
        mounted() {
            SessionApi.getSessionDetails(this.sessionId).then((response) => {
                this.sessionDetails = response.data.values
                this.content = this.sessionDetails['content']

                // setup socket.io
                this.setupSocketIo()
            }).catch((error) => {
                // do something when error
                console.log(error)
            })
        },
        beforeDestroy() {
            // stop listening
            if (this.talk) this.stopSpeechRecognition()
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

    .blinking-cursor {
        -webkit-animation: 1s blink step-end infinite;
        -moz-animation: 1s blink step-end infinite;
        -ms-animation: 1s blink step-end infinite;
        -o-animation: 1s blink step-end infinite;
        animation: 1s blink step-end infinite;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @keyframes blink {
        from, to {
            color: transparent;
        }
        50% {
            color: black;
        }
    }

    @-moz-keyframes blink {
        from, to {
            color: transparent;
        }
        50% {
            color: black;
        }
    }

    @-webkit-keyframes blink {
        from, to {
            color: transparent;
        }
        50% {
            color: black;
        }
    }

    @-ms-keyframes blink {
        from, to {
            color: transparent;
        }
        50% {
            color: black;
        }
    }

    @-o-keyframes blink {
        from, to {
            color: transparent;
        }
        50% {
            color: black;
        }
    }
</style>