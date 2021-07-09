<template>
  <div class="dash">

    <div class="dashRow">
        <video-player class="video-player vjs-custom-skin"></video-player>
    </div>

    <div class="dashRow">
        <video-player class="video-player-1 vjs-custom-skin"></video-player>
    </div>

    <div class="dashRow">
      <cool-clock class="dashRowClock"></cool-clock>
    </div>

    <!-- 空白占位，方便后续内容拓展，同时防止页面下方被hidden -->
    <div class="dashBlock"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LineChart from './components/LineChart.vue'
import RadarChart from './components/RadarChart.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import SwiperImg from './components/SwiperImg.vue'
import TodoList from './components/TodoList.vue'
import CoolClock from './components/CoolClock.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import VideoPlayer1 from './components/VideoPlayer1.vue'

@Component({
  components: {
    // LineChart,
    // RadarChart,
    // PieChart,
    // BarChart,
    // SwiperImg,
    // TodoList,
    CoolClock,
    VideoPlayer,
    VideoPlayer1
  }
})
export default class DashBoard extends Vue {
  chartLine: any
}
</script>

<style lang="less" scoped>
.dash {
  width: 100%;
  // border: 2px solid blue;
  // height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  font-size: 1.5rem;

  &Row {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    // border: 2px solid red;

    &Item {
      width: 24%;
      text-align: left;
      line-height: 40px;
      border-radius: 10px;
      background-color:	white;
      box-shadow: 1px 1px 1px rgba(0,0,0,.3);
      border-color: rgba(0,0,0,.05);

      &Title {
        color: rgb(113, 125, 126)
      }

      &Key {
        width: 50px;
        height: 50px;
        float: right;
        color: rgba(100, 181, 246, 1);
        border-radius: 50px;
        text-align: center;
        line-height: 50px;
        border: 2px solid rgb(113, 125, 126);
        // -webkit-transform: rotate(-30deg);
        transform: rotate(-60deg);
        transition: width 0.2s, height 0.2s;
        -moz-transition: width 0.2s, height 0.2s, -moz-transform 0.2s; /* Firefox 4 */
        -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s; /* Safari and Chrome */
        -o-transition: width 0.2s, height 0.2s, -o-transform 0.2s; /* Opera */
        opacity: 0.5;
      }

      &Key:hover {
        width: 50px;
        height: 50px;
        transform:rotate(0deg);
        -moz-transform:rotate(0deg); /* Firefox 4 */
        -webkit-transform:rotate(0deg); /* Safari and Chrome */
        -o-transform:rotate(0deg); /* Opera */
        border-radius: 60px;
        line-height: 50px;
        color: rgb(123, 31, 162);
        border: 2px solid rgb(142, 68, 173 );
        opacity: 1;
      }
    }

    &Swiper {
      width: 35%;
      margin: 20px 0;
    }

    &Todo {
      width: 30%;
      margin: 20px 0;
    }

    &Clock {
      width: 30%;
      margin: 20px 0;
    }

    &Middle {
      width: 100%;
      background-color:	white;
      padding: 15px;
      box-shadow: 1px 1px 1px rgba(0,0,0,.3);
      border-color: rgba(0,0,0,.05);
    }

    &Graph {
      width: 30%;
      padding: 10px;
      background-color: white;
      box-shadow: 1px 1px 1px rgba(0,0,0,.3);
      border-color: rgba(0,0,0,.5);
    }

    @media screen and (max-width:1000px) {
      &Item {
        width: 100%;
        margin: 10px 0;
      }

      &Graph {
        width: 100%;
        margin: 5px;
      }

      &Swiper {
        width: 100%;
      }

      &Todo {
        width: 100%;
      }

      &Clock {
        width: 100%;
      }
    }
  }

  &Block {
    flex: 0 0 50px;
  }
}
</style>
