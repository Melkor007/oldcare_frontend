<template>
  <div :id="id" :style="{width: width, height: height}"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import myMixins from '../mixins/resize'
import service from '@/service/index';
declare let echarts: any;

@Component({
  mixins: [myMixins]
})
export default class LineChart extends Vue{
  @Prop() private id !: string
  @Prop() private width !: String
  @Prop() private height !: String

  oldManData: Array<any> = []
  ageData: Array<any> = [0,0,0,0,0,0,0,0]

  public getAge() {
    service.getOldList().then(res => {
      console.log(res)
      this.oldManData = res
    })
    for(let i:number = 0; i < this.oldManData.length; i++){
      if(this.oldManData[i].age > 20 && this.oldManData[i].age <= 30){
        this.ageData[0]++
      }
      else if(this.oldManData[i].age > 30 && this.oldManData[i].age <= 40){
        this.ageData[1]++
      }
      else if(this.oldManData[i].age > 40 && this.oldManData[i].age <= 50){
        this.ageData[2]++
      }
      else if(this.oldManData[i].age > 50 && this.oldManData[i].age <= 60){
        this.ageData[3]++
      }
      else if(this.oldManData[i].age > 60 && this.oldManData[i].age <= 70){
        this.ageData[4]++
      }
      else if(this.oldManData[i].age > 70 && this.oldManData[i].age <= 80){
        this.ageData[5]++
      }
      else if(this.oldManData[i].age > 80 && this.oldManData[i].age <= 90){
        this.ageData[6]++
      }
      else if(this.oldManData[i].age > 90 && this.oldManData[i].age <= 100){
        this.ageData[7]++
      }
    }
  }

  public initChart() {
    this.chart = echarts.init(document.getElementById(this.id))
    this.getAge()
    const xData = (function() {
      const data: Array<any> = []
      for (let i: number = 20; i < 100; i=i+10) {
        data.push(i + '-' + (i+10))
      }
      return data
    }())
    this.chart.setOption({
        backgroundColor: '#344b58',
        title: {
          text: '老人年龄分布',
          x: '20',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          borderWidth: 0,
          top: 150,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          x: '5%',
          top: '10%',
          textStyle: {
            color: '#90979c'
          },
          data: ['Old People']
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0

          },
          data: xData
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitArea: {
            show: false
          }
        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [
            0
          ],
          bottom: 30,
          start: 0,
          end: 100,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#d3dee5'

          },
          textStyle: {
            color: '#fff'
          },
          borderColor: '#90979c'

        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [
        //   {
        //   name: '员工',
        //   type: 'bar',
        //   stack: 'total',
        //   barMaxWidth: 35,
        //   barGap: '10%',
        //   itemStyle: {
        //     normal: {
        //       color: 'rgba(255,144,128,1)',
        //       label: {
        //         show: true,
        //         textStyle: {
        //           color: '#fff'
        //         },
        //         position: 'insideTop',
        //         formatter(p) {
        //           return p.value > 0 ? p.value : ''
        //         }
        //       }
        //     }
        //   },
        //   data: [
        //     182,
        //     304,
        //     173,
        //     148,
        //     10,
        //     1,
        //     0,
        //     0
        //   ]
        // },
        //
        // {
        //   name: '义工',
        //   type: 'bar',
        //   stack: 'total',
        //   itemStyle: {
        //     normal: {
        //       color: 'rgba(0,191,183,1)',
        //       barBorderRadius: 0,
        //       label: {
        //         show: true,
        //         position: 'top',
        //         formatter(p) {
        //           return p.value > 0 ? p.value : ''
        //         }
        //       }
        //     }
        //   },
        //   data: [
        //     282,
        //     401,
        //     124,
        //     122,
        //     0,
        //     0,
        //     0,
        //     0
        //   ]
        // },
          {
            name: '老人',
            type: 'bar',
            stack: 'total',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
              normal: {
                color: 'rgba(252,230,48,1)',
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: 'top',
                  formatter(p) {
                    return p.value > 0 ? p.value : ''
                  }
                }
              }
            },
            data: this.ageData

          }
        ]
      })
  }


  private mounted () {
    this.initChart()
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
