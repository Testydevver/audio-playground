const app = Vue.createApp({
  data() {
    return {
      audioSource: "",
    };
  },
  methods: {
    handleAudio(event) {
      const audioFile = event.target.files[0];
      const url = URL.createObjectURL(audioFile);
      console.log("Handling audio", url);
      this.audioSource = url;
    },
  },
});

app.mount("#audio-manager");
