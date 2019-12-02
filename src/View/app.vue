<template>
  <el-container class="app" direction="vertical">
    <start></start>
    <ent-member></ent-member>
    <ent-prj-cfg></ent-prj-cfg>
    <sel-todo></sel-todo>
    <state-hint></state-hint>
    <dice-draw-result></dice-draw-result>
    <task-board></task-board>
    <summarize></summarize>
  </el-container>
</template>

<script>
import Start from "./components/start";
import EntMember from "./components/ent-member";
import EntPrjCfg from "./components/ent-prj-cfg";
import StoryCard from "./components/story-card";
import StateHint from "./components/state-hint";
import TaskBoard from "./components/task-board";
import Summarize from "./components/summarize";
import SelTodo from "./components/sel-todo";
import DiceDrawResult from "./components/dice-draw-result";

export default {
  name: 'app',
  components: {
    DiceDrawResult,
    SelTodo,
    Summarize,
    TaskBoard,
    StateHint,
    StoryCard,
    EntPrjCfg,
    EntMember,
    Start
  },
  mounted() {

  },
};
</script>

<style lang="less">
  @import "~reset-css";
  .app {
    height: 100vh;
  }
</style>
