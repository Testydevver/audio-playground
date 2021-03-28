const app = Vue.createApp({
  data() {
    return {
      testData: "Hello World",
    };
  },
  methods: {
    handleAudio(event) {
      console.log("Handling audio");
    },
  },
});

app.mount("#audio-manager");
