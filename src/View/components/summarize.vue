<template>
  <el-dialog :visible="show"
             :show-close="false"
             :title="title">
    <div ref="chartContainer"></div>
    <div slot="footer">
      <el-button type="primary" @click="continueClick">{{globalState === GS.SPRINT_SUM ? 'Continue' : 'Replay'}}</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';
  import Highcharts from 'highcharts'

  export default {
    name: 'summarize',
    data () {
      return {
        GS
      }
    },
    computed: {
      ...mapState(['globalState', 'remainTimeForEachDay']),
      show() {
        return [GS.SPRINT_SUM, GS.GAME_END].includes(this.globalState);
      },
      title() {
        return {
          [GS.SPRINT_SUM]: 'Burn-down chart until now',
          [GS.GAME_END]: 'Burn-down chart for all days',
        }[this.globalState];
      }
    },
    watch: {
      show(newShow) {
        if (newShow) {
          this.drawChart();
        }
      }
    },
    methods: {
      drawChart() {
        const initTime = this.remainTimeForEachDay[0];
        const currentTime = this.remainTimeForEachDay.slice(-1)[0];
        console.log(initTime, currentTime);
        const workSpeed = (initTime - currentTime) / (this.remainTimeForEachDay.length - 1);
        const remainDay = Math.ceil(currentTime / workSpeed);
        this.$nextTick(() => {
          Highcharts.chart(this.$refs.chartContainer, {
            title: {
              text: null
            },
            xAxis: {
              categories: this.remainTimeForEachDay.map((item, index) => index)
            },
            yAxis: {
              title: {
                text: 'Remain time'
              }
            },
            legend: {
              enabled: false
            },
            series: [
              {
                type: 'line',
                color: 'black',
                zIndex: 2,
                marker: {
                  enabled: true,
                },
                enableMouseTracking: false,
                data: this.remainTimeForEachDay.map((item, index) => [index, item]),
              },
              {
                type: 'line',
                color: 'black',
                marker: {
                  enabled: false,
                },
                dashStyle: 'dash',
                zIndex: 2,
                enableMouseTracking: false,
                data: [
                  [this.remainTimeForEachDay.length - 1, currentTime],
                  [this.remainTimeForEachDay.length - 1 + remainDay, 0],
                ],
              },
              {
                type: 'column',
                name: 'remain time',
                data: this.remainTimeForEachDay
              }
            ]
          });
        })
      },
      continueClick() {
        if (this.globalState === GS.SPRINT_SUM) {
          fsm[GSTrans.SPRINT_SUM_DONE]();
        } else {
          location.reload();
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
