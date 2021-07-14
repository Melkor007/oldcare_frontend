<template>
  <div class="dash">
    <div class="dashRow">
    <div class="dashRowLeft">
      <p id="titlo">监控</p>
      <cool-clock class="Clock"></cool-clock>
    </div>
    <div class="dashRowRight">
      <FlvVideo class="Video"></FlvVideo>
    </div>
    </div>
    <!-- 空白占位，方便后续内容拓展，同时防止页面下方被hidden -->
    <div class="dashRow">
      <div class="dashBottom">
        <old-event ref="elder"></old-event>
        <intrusion-event ref="intrusion"></intrusion-event>
      </div>
    </div>
    <web-socket @getEvents="getEvents"></web-socket>
    <div class="dashBlock"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CoolClock from './components/CoolClock.vue'
import FlvVideo from './components/FlvVideo.vue'
import WebSocket from './components/webSocket.vue'
import OldEvent from './components/elderEventList.vue'
import IntrusionEvent from './components/intrusionEventList.vue'
import service from '@/service/index';

export default{
  components:{
    CoolClock,
    FlvVideo,
    WebSocket,
    OldEvent,
    IntrusionEvent
  },
  $refs: {quickEntry: HTMLFormElement},
  methods:{
      getEvents() {
        alert("holy shii")
        let data = {};
        service.testt().then(res => {
          console.log(res);
          let len = res.length;
          console.log(len);
          let elderEventData = [];
          let intrusionEventData = [];
          for (let i = 0; i < len; i++) {
            if(res[i].event_type===0 || res[i].event_type===1){
              let tmp={
                ID: res[i].id,
                date: res[i].event_date,
                name: res[i].oldperson_id.username,
                address: res[i].event_location,
                description: res[i].event_desc,
                tag: res[i].event_type === 0 ? '微笑' : '交互',
                img_path: res[i].img_path,
              };
              elderEventData.push(tmp);
            }else{
              let tmp={
                ID: res[i].id,
                date: res[i].event_date,
                address: res[i].event_location,
                description: res[i].event_desc,
                tag: res[i].event_type === 2 ? '陌生人来访' : (res[i].event_type === 3 ? '摔倒' : '禁止区域入侵'),
                img_path: res[i].img_path,
              };
              intrusionEventData.push(tmp);
            }
          }
          this.$refs.elder.setData(elderEventData);
          this.$refs.intrusion.setData(intrusionEventData);
        })
      },
    }
}

</script>

<style lang="less" scoped>
#titlo{
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "微软雅黑", sans-serif;
  font-size:50px;
  padding: 30px;
  padding-bottom: 50px;
}
.dash {
  width: 100%;
  justify-content: space-around;
  display: flex;
  flex-flow: row wrap;
  //align-items: center;
  margin: 30px auto;
  font-size: 1.5rem;
  &Row{
    width: 100%;
    margin-bottom: 40px;
    justify-content: space-around;
    align-items: center;
    //border: 2px solid red;
    &Right{
      width:800px;
      float:right
    }
    &Left{
      width:300px;
      float:left
    }
    &Bottom{
      float:bottom;
    }
  }
  &Block {
    flex: 0 0 50px;
  }

}
</style>
