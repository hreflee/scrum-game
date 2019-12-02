<template>
  <el-dialog :visible="globalState === GS.DICE_AND_DRAW"
             title="Get your dice and draw card result"
             :show-close="false">
    <div slot="footer">
      <el-button type="primary" @click="submit">Submit</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';

  export default {
    name: 'dice-draw-result',
    data () {
      return {
        GS
      }
    },
    computed: mapState(['globalState', 'diceAndDrawResult']),
    methods: {
      submit() {
        fsm[GSTrans.GOT_RESULT]();
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
