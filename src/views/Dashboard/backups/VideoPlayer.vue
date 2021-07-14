<template>
  <div class="my_video">
    <div v-for="(item,index) in videoList" :key="item.title">
      <div class="mui-media-body">
        <p class="mui-ellipsis">
          <span>标题：{{ item.title }}</span>
          <span>上传时间：2021.07.09 13:49:48</span>
        </p>
      </div>
      <h1>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions[index]"
          @play="onPlayerPlay($event, index)"
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
        ></video-player>
      </h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VideoPlayer from "vue-video-player";
import 'videojs-flash'
// require('video.js/dist/video-js.css')  //按官网引会找不到然后报错
require("vue-video-player/node_modules/video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);
export default {
  name: "my_video",
  props: {},
  data() {
    return {
      videoList:[
        {title: "Title 1", video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'},
        {title: "Title 2", video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'},
        {title: "Title 3", video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'}
      ],
      playsInLine: true,
      playerOptions: [],
      options: ""
    };


  },
  created() {
    this.getVideoList();
  },
  methods: {
    getVideoList(){
      for(var i = 0; i < this.videoList.length; i++){
        let arrs = {
          playbackRates: [1.0, 2.0, 3.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              // type: "video/mp4",
              // src: this.videoList[i].video //url地址
              type: 'rtmp/mp4',
              src: 'rtmp://58.200.131.2:1935/livetv/hunantv'
              // type:'rtmp/flv',
              // src:"rtmp://localhost:1935/mylive/test"
              }
          ],
          techOrder: ['flash'],
          poster: "", //封面地址
          notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true //全屏按钮
          }
        };
        this.playerOptions.push(arrs);
      }
    },





    // 播放回调
    onPlayerPlay(player, index) {
      // var that = this.$refs.videoPlayer;
      // for(let i = 0; i < that.length; i++){
      //   if(i !== index){
      //     that[i].player.pause()
      //   }
      // }
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
  width: 1300px;
  height: 1000px;
  margin: 50px;
  text-align: center;
}

</style>
