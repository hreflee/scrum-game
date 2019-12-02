<template>
  <el-header v-if="show" class="comp-state-hint" height="80px">
    <div class="current-state">
      <div class="col">
        <p class="label">Spring #</p>
        <p class="data">{{ currentSprint }}</p>
      </div>
      <div class="col">
        <p class="label">Day #</p>
        <p class="data">{{ currentDay }}</p>
      </div>
      <div class="col">
        <p class="label">Member</p>
        <p class="data">
          <el-avatar class="avatar" :src="currentMember.avatar" size="small"></el-avatar>
          <span>{{ currentMember.name }}</span>
        </p>
      </div>
    </div>
    <div class="hint">
      <p class="hint-text">{{ hintText }}</p>
      <el-button v-if="[GS.USER_DONE, GS.NO_STORY].includes(globalState)" type="primary" @click="setNextMember">
        Continue
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </div>
  </el-header>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapGetters } from 'vuex';
  import { GS, GSTrans, fsm } from '../store/fsm';

  import { OverallStoryStatus } from '../../TaskMgr';

  const HintTextMap = {
    [GS.PICK_STORY]: () => 'Select your job for today.',
    [GS.UNBLOCK_STORY]: () => 'Choose a story to unblock.',
    [GS.USER_DONE]: () => 'Your job today is done.',
    [GS.NO_STORY]: (reason) => ({
      [OverallStoryStatus.ALL_BLOCKED]: 'All stories are blocked, you must dice and draw card now.',
      [OverallStoryStatus.ALL_DONE]: 'Congratulation! All todo stories for current sprint are done. Go to next sprint now.'
    })[reason],
  };
  export default {
    name: 'state-hint',
    computed: {
      ... mapState(['globalState']),
      ...mapState({
        currentSprint: state => state.gameStatus.currentSprint,
        currentDay: state => state.gameStatus.currentDay,
        noStoryReason: state => state.gameStatus.noStoryReason,
      }),
      ...mapGetters(['currentMember']),
      show() {
        return ![GS.INIT, GS.ENT_MEMBER, GS.ENT_PRJ_CFG].includes(this.globalState);
      },
      hintText() {
        return (HintTextMap[this.globalState] || (() => ''))(this.noStoryReason);
      }
    },
    data () {
      return {
        GS
      }
    },
    methods: {
      setNextMember() {
        const trans = {
          [GS.USER_DONE]: GSTrans.SET_NEXT_MEMBER,
          [GS.NO_STORY]: GSTrans.GOT_REASON,
        }[this.globalState];
        fsm[trans]();
      }
    }
  }
</script>

<style lang="less" scoped>
  .comp-state-hint {
    display: flex;
    width: 100%;
    padding: 0;
    box-shadow: 1px 1px 4px rgba(51, 51, 51, 0.3);
    z-index: 10;
    .current-state {
      flex: 0 0 33%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 4px;
      border-right: 1px solid #E4E7ED;
      text-align: center;
      .col {
        flex: 1 1 30%;
        .label {
          color: #909399;
          padding: 10px 0;
        }
        .data {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #303133;
          min-height: 40px;
          font-size: 20px;
          .avatar {
            margin-right: 5px;
          }
        }
      }
    }
    .hint {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 67%;
      padding: 0 30px;
      .hint-text {
        color: #303133;
        font-size: 24px;
      }
    }
  }
</style>
