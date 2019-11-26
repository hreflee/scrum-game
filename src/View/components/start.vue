<template>
  <div class="comp-start" v-if="globalState === GS.INIT">
    <el-button class="start-btn" type="primary" size="large" @click="startGame">Start</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';

  export default {
    name: 'start',
    data(){ return {GS} },
    computed: mapState(['globalState']),
    methods: {
      startGame() {
        fsm[GSTrans.CLICK_START_GAME]();
      }
    }
  }
</script>

<style lang="less" scoped>
  .comp-start {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
