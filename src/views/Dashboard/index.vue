<template>
  <div class="dash">
    <div class="dashLeft">
      <p id="titlo">监控</p>
      <cool-clock class="Clock"></cool-clock>
    </div>
    <div class="dashRight">
      <FlvVideo class="Video"></FlvVideo>
    </div>
    <web-socket></web-socket>
    <!-- 空白占位，方便后续内容拓展，同时防止页面下方被hidden -->
    <div class="dashBlock"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CoolClock from './components/CoolClock.vue'
import FlvVideo from './components/FlvVideo.vue'
import WebSocket from './components/webSocket.vue'
@Component({
  components: {
    CoolClock,
    FlvVideo,
    WebSocket
  }
})
export default class DashBoard extends Vue {
  chartLine: any
}

</script>

<style lang="less" scoped>
#titlo{
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "微软雅黑", sans-serif;
  font-size:50px;
  padding: 30px;
  padding-bottom: 100px;
}
.dash {
  width: 100%;
  // border: 2px solid blue;
  // height: 100%;
  display: flex;
  //flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  font-size: 1.5rem;
  &Right{
    width:800px;
  }
  &Left{
    width:300px;
  }

}
</style>
