<template>
  <card class="comp-story-card"
        cardType="Story"
        showSelectBtn
        :selected="selected"
        :desc="story.description"
        @select="$emit('select')"
        @remove="$emit('remove')">
    <div slot="operation">
      <el-button v-if="showSelect"
                 size="mini"
                 type="primary"
                 @click="emitChange(true)">
        Select
      </el-button>
      <el-button v-if="showMultiSelect"
                 size="mini" circle
                 :type="selected ? 'primary' : 'info'"
                 icon="el-icon-check"
                 @click="emitChange(!selected)"></el-button>
    </div>
    <div class="story-more-info">
      <el-tag :style="{visibility: story.isBlocked ? 'visible' : 'hidden'}"
              slot="card-title-tag"
              size="mini"
              type="danger"
              effect="dark">Blocked</el-tag>
      <p class="work-time">work time: {{story.remainTime}}/{{story.totalTime}}</p>
    </div>
  </card>
</template>

<script type="text/ecmascript-6">
  import Card from "./card";
  export default {
    components: {Card},
    name: 'story-card',
    props: {
      story: Object,

      showSelect: {
        type: Boolean,
        default: false
      },

      selected: Boolean,
      showMultiSelect: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      emitChange(action) {
        if (action) {
          this.$emit('select');
        } else {
          this.$emit('remove');
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .comp-story-card {
    margin-bottom: 20px;
    .story-more-info {
      display: flex;
      justify-content: space-between;
      .work-time {
        text-align: right;
        color: #999;
      }
    }
  }
</style>
