<template>
  <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" v-video-player:myVideoPlayer="playerOptions">
  </video-player>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
  props: ['Optionsrc'],
  components: {
    videoPlayer
  },
  data: () => ({
    playerOptions: {
      muted: false,
      autoplay: false,
      sources: [{
        type: 'video/mp4',
        src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      }],
      poster: 'http://imgv.360che.com/video/0/9/9153.jpg!240'
    }
  }),
  mounted () {
    this.playerOptions.sources[0].src = this.Optionsrc
  },
  methods: {
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    }
  }
}
</script>
<style scoped>
</style>
