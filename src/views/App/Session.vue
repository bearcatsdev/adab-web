<template>
    <div class="session">
        <Section class="section"
                 icon="book-open"
                 :title="`${sessionDetails['course_name']}: ${sessionDetails['topic_title']}`"
                 :subtitle="`${sessionDetails['course_id']} - ${sessionDetails['lecturer_name']} (${sessionDetails['course_lang']})`">
            <div v-if="currentUser['can_talk']">
                <Button @click="toggleTalk" :disabled="edit">{{ talk ? 'Stop' : 'Start' }} talking</Button>
                <Button @click="toggleEdit" :disabled="talk">{{ edit ? 'Save' : 'Edit' }}</Button>
                <Button @click="cancelEdit" v-if="edit">Cancel</Button>
            </div>
            <div :style="{ fontSize }" :contenteditable="edit" class="text-field" v-bind:class="{'editable': edit}">
                <span id="content-view">{{ content }}</span>
                <span class="blinking-cursor" v-if="blinkingCursor">|</span>
            </div>
        </Section>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import fonts from '../../variables/fonts'
    import Section from "../../components/App/Section"
    import SessionApi from "../../services/api/Session"
    import io from "socket.io-client"
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
                // added edit datas (start)
                edit: false,
                previousMessage: '',
                // added edit datas (end)
                blinkingCursor: false
            }
        },
        computed: {
            ...mapState('UserCredentials', ['currentUser']),
            ...mapState(['fontOffset']),
            fontSize() {
                return fonts(this.fontOffset)['base']
            }
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

                // added edit sockets (start)
                socket.on('edit', (message) => {
                    this.content = message;
                });
                // added edit sockets (end)

                socket.emit('join_room', this.sessionId);
            },
            // added edit methods (start)
            toggleEdit() {
                this.edit = !this.edit
                this.edit ? this.startEdit() : this.stopEdit()
            },
            startEdit() {
                this.edit = true
                const messageBox = document.getElementById('content-view');
                this.previousMessage = messageBox.innerHTML
            },
            stopEdit() {
                this.edit = false
                const messageBox = document.getElementById('content-view');
                socket.emit('edit', messageBox.innerHTML)
            },
            cancelEdit() {
                this.edit = false
                const messageBox = document.getElementById('content-view');
                messageBox.innerHTML = this.previousMessage
            }
            // added edit methods (end)
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

    /* added css (start) */
    button {
        margin-right: 0.5rem; 
    }
    button:disabled {
        background-color: gray;
    }

    .text-field {
        margin: 0.5rem 0;
    }

    .editable {
        background-color: lightgray;
        border: solid gray 1px;
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin: 0.5rem 0;
    }
    /* added css (end) */

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