<template>
  <el-container class="app">
    <start></start>
    <ent-member></ent-member>
    <ent-prj-cfg></ent-prj-cfg>
  </el-container>
</template>

<script>
import Start from "./components/start";
import EntMember from "./components/ent-member";
import EntPrjCfg from "./components/ent-prj-cfg";
import StoryCard from "./components/story-card";

export default {
  name: 'app',
  components: {
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
