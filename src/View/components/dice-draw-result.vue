<template>
  <el-dialog :visible="globalState === GS.DICE_AND_DRAW"
             title="Get your dice and draw card result"
             :show-close="false">
    <div v-if="globalState === GS.DICE_AND_DRAW"
         class="result-container">
      <div class="row">
        <p class="label">Dice result</p>
        <p class="dice-result">{{ diceAndDrawResult.workTime }}</p>
      </div>
      <div class="row">
        <p class="label">Draw card result</p>
        <card :cardType="CardTypeText[diceAndDrawResult.card.type]"
              :desc="diceAndDrawResult.card.description">
        </card>
      </div>
      <p class="hint">{{diceAndDrawResult.hint}}</p>
    </div>
    <div slot="footer" class="footer">
      <el-button type="primary" @click="submit">Got it</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';
  import { CardType } from '../../Game'

  import Card from "./card";

  const CardTypeText = {
    [CardType.EVENT]: 'Event',
    [CardType.PROBLEM]: 'Problem',
    [CardType.SOLUTION]: 'Solution'
  };

  export default {
    components: {Card},
    name: 'dice-draw-result',
    data () {
      return {
        GS, CardTypeText
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
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 0 auto 30px;
    .label {
      /*font-weight: bold;*/
      font-size: 20px;
    }
    .dice-result {
      width: 300px;
      padding: 20px 0;
      font-size: 50px;
      text-align: center;
      font-weight: bold;
      color: #303133;
    }
  }
  .hint {
    color: #909399;
    margin-right: 30px;
    line-height: 1.5;
    text-align: center;
  }
</style>
