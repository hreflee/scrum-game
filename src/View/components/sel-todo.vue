<template>
  <el-dialog :visible="show"
             title="Select some stories into todo list for current sprint"
             :show-close="false"
             width="80%"
             top="5vh">
    <div class="list">
      <story-card class="story-item"
                  v-for="story in backlog"
                  :key="story.id"
                  :story="story"
                  show-multi-select
                  :selected="isStorySelected(story.id)"
                  @select="selectStory(story)"
                  @remove="removeStory(story.id)">
      </story-card>
    </div>
    <div slot="footer">
      <el-button type="primary" @click="submit">Submit</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';
  import StoryCard from "./story-card";
  export default {
    components: {StoryCard},
    name: 'sel-todo',
    data () {
      return {
        GS,
        selectedStories: []
      }
    },
    computed: {
      ...mapState({
        globalState: 'globalState',
        backlog: state => state.taskBoard.backlog
      }),
      show() {
        return this.globalState === GS.SEL_TODO;
      }
    },
    watch: {
      show(n) {
        if (n) {
          this.selectedStories = []
        }
      },
    },
    methods: {
      isStorySelected(id) {
        return this.selectedStories.find(item => item.id === id) !== undefined;
      },
      selectStory(story) {
        this.selectedStories.push(story);
      },
      removeStory(id) {
        const index = this.selectedStories.findIndex(item => item.id === id);
        if (index >= 0) {
          this.selectedStories.splice(index, 1);
        }
      },
      submit() {
        fsm[GSTrans.SAVE_TODO](this.selectedStories)
      }
    }
  }
</script>

<style lang="less" scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 70vh;
    overflow-y: auto;
  }
</style>
