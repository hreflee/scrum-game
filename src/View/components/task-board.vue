<template>
  <el-main v-if="showComponent" class="comp-task-board">
    <el-table :data="taskBoard">
      <el-table-column v-for="colName in colNames"
                       :key="colName"
                       :prop="colName"
                       :label="colName.toUpperCase()"
                       class-name="col"
                       header-align="center">
        <div class="card-wrapper" slot-scope="{ row }">
          <story-card v-if="row[colName]"
                      :story="row[colName]"
                      :show-select="shouldShowSelect(row[colName], colName)"
                      @select="selectStory(row[colName])">
          </story-card>
        </div>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapGetters } from 'vuex';
  import { GS, GSTrans, fsm } from '../store/fsm';
  import StoryCard from "./story-card";

  export default {
    components: {StoryCard},
    name: 'task-board',
    data() {
      return {
        colNames: ['todo', 'processing', 'done'],
      };
    },
    computed: {
      ...mapState(['globalState']),
      taskBoard() {
        const { colNames } = this;
        const { taskBoard } = this.$store.state;
        const tableContent = this.colNames.reduce((reducer, item) => ({...reducer, [item]: taskBoard[item]}), {});
        const maxLen = Math.max(...colNames.map(item => tableContent[item].length));
        const ret = [];
        for (let i = 0; i < maxLen; i++) {
          let retItem = {};
          colNames.forEach(key => {
            if (tableContent[key][i]) {
              retItem[key] = tableContent[key][i];
            }
          });
          ret.push(retItem);
        }
        return ret;
      },
      showComponent() {
        return ![GS.INIT, GS.ENT_MEMBER, GS.ENT_PRJ_CFG].includes(this.globalState);
      },
      showStorySelect() {
        return [GS.PICK_STORY, GS.UNBLOCK_STORY].includes(this.globalState);
      }
    },
    methods: {
      selectStory(story) {
        const trans = {
          [GS.PICK_STORY]: GSTrans.PICK_STORY,
          [GS.UNBLOCK_STORY]: GSTrans.SELECT_UNBLOCK
        }[this.globalState];
        fsm[trans](story);
      },
      shouldShowSelect(story, colName) {
        if (!this.showStorySelect || colName === 'done') {
          return false;
        }
        if (this.globalState === GS.PICK_STORY) {
          return !story.isBlocked;
        }
        if (this.globalState === GS.UNBLOCK_STORY) {
          return story.isBlocked;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .comp-task-board {
    .card-wrapper {
      display: flex;
      justify-content: center;
    }
    & /deep/ .col:not(:first-child) {
      border-left: 1px solid #EBEEF5;
    }
    & /deep/ tbody .col {
      border-bottom: none;
      background: transparent !important;
    }
  }
</style>
