<template>
  <el-dialog :visible="globalState === GS.ENT_PRJ_CFG" :show-close="false" title="Enter your project configuration">
    <el-form>
      <el-form-item label="Number of sprint">
        <el-input-number v-model="projectConfig.numOfSprint"></el-input-number>
      </el-form-item>
      <el-form-item label="Number of day pre sprint">
        <el-input-number v-model="projectConfig.numOfDayPreSprint"></el-input-number>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button type="primary" @click="submit">Submit</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";

  export default {
    components: {
      ElInput,
      ElFormItem},
    name: 'ent-prj-cfg',
    data () {
      return {
        GS,
        projectConfig: {
          numOfSprint: 3,
          numOfDayPreSprint: 3,
        }
      }
    },
    computed: mapState(['globalState']),
    methods: {
      submit() {
        fsm[GSTrans.ENTER_PRJ_CONFIG](this.projectConfig);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
