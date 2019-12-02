<template>
  <el-dialog :visible="show">
    <div ref="chartContainer"></div>
    <div slot="footer">
      <el-button type="primary" @click="submit">Continue</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';
  import Highcharts from 'highcharts'

  export default {
    name: 'summary',
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['globalState', 'remainTimeForEachDay']),
      show() {
        return [GS.SPRINT_SUM, GS.GAME_END].includes(this.globalState);
      }
    },
    watch: {
      show(newShow) {
        if (newShow) {
          this.$nextTick(() => {
            Highcharts.chart(this.$refs.chartContainer, {
              chart: {
                type: 'bar'
              },
              title: {
                text: 'Fruit Consumption'
              },
              xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
              },
              yAxis: {
                title: {
                  text: 'Fruit eaten'
                }
              },
              series: [{
                name: 'Jane',
                data: [1, 0, 4]
              }, {
                name: 'John',
                data: [5, 7, 3]
              }]
            });
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
