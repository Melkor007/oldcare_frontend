<template>
  <div class="my_video1">
    <video-player
      class="video-player-1 vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="options"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    >
    </video-player>
  </div>
</template>

<script>
import Vue from "vue";
import VideoPlayer from "vue-video-player";
// require('video.js/dist/video-js.css')  //按官网引会找不到然后报错
require("vue-video-player/node_modules/video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);
export default {
  name: "my_video",
  props: {},
  data() {
    return {
      options: {
        playbackRates: [0.5, 0.7, 1.0, 1.5, 2.0, 3.0], // 可选的播放速度
        autoplay: false, // 是否自动播放
        muted: false, // 是否静音
        loop: false, // 是否开启循环播放
        preload: "auto", // 自动预加载
        language: "zh-CN", // 语言，'en', 'zh-cn', 'zh-tw'
        aspectRatio: "16:9", // 播放器高宽占比（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 类型
            src:
              "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", // url地址
          },
        ],
        poster:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606462956126&di=2d87964d4faf656af55d09d938640d97&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201310%2F10%2F150326y7dzdd8d4kpjjdsd.jpg", // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 是否显示当前时间和持续时间的分隔符，"/"
          durationDisplay: true, // 是否显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },
    };


  },
  methods: {
    // 播放回调
    onPlayerPlay($event) {
      console.log("player play!", $event);
    },
    // 暂停回调
    onPlayerPause($event) {
      console.log("player pause!", $event);
    },
    // 视频播完回调
    onPlayerEnded($event) {
      console.log($event);
    },
    // DOM元素上的readyState更改导致播放停止
    onPlayerWaiting($event) {
      console.log($event);
    },
    // 已开始播放回调
    onPlayerPlaying($event) {
      console.log($event);
    },
    // 当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata($event) {
      console.log($event);
    },
    // 当前播放位置发生变化时触发。
    onPlayerTimeupdate($event) {
      console.log($event);
    },
    //媒体的readyState为HAVE_FUTURE_DATA或更高
    onPlayerCanplay($event) {
      // console.log('player Canplay!', player)
    },
    //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    onPlayerCanplaythrough($event) {
      // console.log('player Canplaythrough!', player)
    },
    //播放状态改变回调
    playerStateChanged($event) {
      console.log("player current update state", $event);
    },
    //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied() {
      console.log("example player 1 readied");
    },
  },
};
</script>

<style scoped lang="scss">
.my_video {
  width: 1000px;
  height: 800px;
  margin: 50px;
  text-align: center;
}
</style>
