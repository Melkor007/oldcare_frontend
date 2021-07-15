<template>
  <div :id="id" :style="{width: width, height: height}"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import myMixins from '../mixins/resize'
import service from "@/service/index";
declare let echarts: any;

@Component({
  mixins: [myMixins]
})
export default class LineChart extends Vue{
  @Prop() private id !: string
  @Prop() private width !: String
  @Prop() private height !: String

  eventData: Array<any> = []
  happyData: Array<any> = [0,0,0,0,0,0,0]
  angerData: Array<any> = [0,0,0,0,0,0,0]
  surprisedData: Array<any> = [0,0,0,0,0,0,0]
  sadnessData: Array<any> = [0,0,0,0,0,0,0]

  public getData(){
    service.getEventList().then(res => {
      console.log(res)
      this.eventData = res


      for(let i:number = 0; i < this.eventData.length; i++){
        // alert('Lmfao')
        if(this.eventData[i].event_type == 5){
          let j = new Date().getDay() - new Date(this.eventData[i].event_date).getDay();
          this.angerData[6-j]++
        }
        else if(this.eventData[i].event_type == 8){
          let j = new Date().getDay() - new Date(this.eventData[i].event_date).getDay();
          this.happyData[6-j]++
        }
        else if(this.eventData[i].event_type == 10){
          let j = new Date().getDay() - new Date(this.eventData[i].event_date).getDay();
          this.sadnessData[6-j]++
        }
        else if(this.eventData[i].event_type == 11){
          let j = new Date().getDay() - new Date(this.eventData[i].event_date).getDay();
          this.surprisedData[6-j]++
        }
      }
      this.initChart()
    })


  }

  public getHappyData(){
    return this.happyData
  }
  public getAngerData(){
    return this.angerData
  }
  public getSadnessData(){
    return this.sadnessData
  }
  public getSurprisedData(){
    return this.surprisedData
  }

  public initChart() {
    this.chart = echarts.init(document.getElementById(this.id))
    this.chart.setOption({
      backgroundColor: 'white',
      title: {
        top: 20,
        text: '七日内老人情绪记录',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: 'black'
        },
        left: '1%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      legend: {
        top: 20,
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['Happy', 'Anger', 'Surprised', "Sadness"],
        right: '4%',
        textStyle: {
          fontSize: 12,
          color: 'black'
        }
      },
      grid: {
        top: 100,
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        data: ['1','2','3','4','5','6','7']
      }],
      yAxis: [{
        type: 'value',
        name: '次数',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      }],
      series: [{
        name: 'Happy',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(137, 189, 27, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(137, 189, 27, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(137,189,27)',
            borderColor: 'rgba(137,189,2,0.27)',
            borderWidth: 12

          }
        },
        data: this.getHappyData()
      }, {
        name: 'Anger',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 136, 212, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(0, 136, 212, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(0,136,212)',
            borderColor: 'rgba(0,136,212,0.2)',
            borderWidth: 12

          }
        },
        data: this.getAngerData()
      }, {
        name: 'Surprise',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(219, 50, 51, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(219, 50, 51, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(219,50,51)',
            borderColor: 'rgba(219,50,51,0.2)',
            borderWidth: 12
          }
        },
        data: this.getSurprisedData()
      },{
        name: 'Sadness',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(220,216,51,0.72)'
            }, {
              offset: 0.8,
              color: 'rgba(137, 189, 27, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgba(220,216,51,0.72)',
            borderColor: 'rgba(220,216,51,0.72)',
            borderWidth: 12

          }
        },
        data: this.getSadnessData()
      }]
    })
  }

  private mounted () {
    this.getData()
  }

  private beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  }
}
</script>
