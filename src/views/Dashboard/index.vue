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
        <flv-video1></flv-video1>
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
import FlvVideo1 from './components/FlvVideo1.vue'
import WebSocket from './components/webSocket.vue'
import OldEvent from './components/elderEventList.vue'
import IntrusionEvent from './components/intrusionEventList.vue'
import service from '@/service/index';
import {Message} from "element-ui";

export default{
  components:{
    CoolClock,
    FlvVideo,
    FlvVideo1,
    WebSocket,
    OldEvent,
    IntrusionEvent
  },
  $refs: {quickEntry: HTMLFormElement},
  data(){
      return{
        mapping:['无(测试用)','交互','摔倒','禁区入侵','陌生人','生气']
        }
  },
  methods:{
      alertEvents(eventtype){
        let type = this.mapping[eventtype]
        Message({
          message: '检测到'+type,
          type: 'info',
          duration: 3 * 1000
        });
      },
      getEvents() {
        let data = {};
        service.getEventList().then(res => {
          console.log(res);
          let len = res.length;
          // console.log(len);
          let type = res[len-1].event_type
          this.alertEvents(type)// 消息提醒
          let elderEventData = [];
          let intrusionEventData = [];
          for (let i = 0; i < len; i++) {
            if(res[i].event_type===1 || res[i].event_type===8){

              let tmp={
                ID: res[i].id,
                date: res[i].event_date,
                // name: res[i].oldperson_id.username,
                name:'oldname',
                address: res[i].event_location,
                description: res[i].event_desc,
                tag: res[i].event_type === 1 ? '交互' : '微笑',
                img_path: res[i].img_path,
                oldID:res[i].oldperson
              };
              elderEventData.push(tmp);
            }else{
              let tmp={
                ID: res[i].id,
                date: res[i].event_date,
                address: res[i].event_location,
                description: res[i].event_desc,
                tag: res[i].event_type === 2 ? '摔倒' : (res[i].event_type === 3 ? '入侵' : '陌生人'),
                img_path: res[i].img_path,
              };
              intrusionEventData.push(tmp);
            }
          }
          for(let i=0;i<elderEventData.length;i++){
            let oldpersonID = elderEventData[i].oldID
            let oldname = ''
            service.getOld(oldpersonID).then(res => {
              oldname = res.username
              elderEventData[i].name=oldname
            })
          }
          this.$refs.elder.setData(elderEventData);
          this.$refs.intrusion.setData(intrusionEventData);
        })
      },
  },
  created() {
    this.getEvents()
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
