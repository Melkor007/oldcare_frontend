<template>
  <div>
    <video autoplay controls width="100%" height="500" id="videoElement"></video>
  </div>
</template>

<script>
import flvjs from 'flv.js'

export default {
  name: 'FlvVideo',
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {
      this.createVideo()
    })
  },
  methods: {
    createVideo() {
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: 'http://server.cryyin.top:8070/live?port=1935&app=live&stream=0' //你的url地址
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
      }
    }
  }
}
</script>


<style scoped>

</style>
