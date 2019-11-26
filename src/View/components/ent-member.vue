<template>
  <el-dialog :visible="globalState === GS.ENT_MEMBER" :show-close="false" title="Enter your team member information">
    <el-form v-for="(memberItem, index) in members" :key="memberItem.id" inline class="member-item">
      <el-form-item label="Name">
        <el-input v-model="memberItem.name"></el-input>
      </el-form-item>
      <el-form-item label="Avatar">
        <el-avatar :src="memberItem.avatar"></el-avatar>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" size="mini" icon="el-icon-minus" circle @click="removeMember(index)"></el-button>
      </el-form-item>
    </el-form>
    <div class="add-btn-wrapper">
      <el-button type="success" icon="el-icon-plus" @click="addMember">Add a member</el-button>
    </div>
    <div slot="footer">
      <el-button type="primary" @click="submit">Submit</el-button>
    </div>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { GS, GSTrans, fsm } from '../store/fsm';
  import util from '../../util';
  function genAvatar() {
    return `https://www.gravatar.com/avatar/093e34c7f263445fd59ed8da31d1aa${Math.round(Math.random() * 100)}.jpg?s=256&d=identicon&f=y`;
  }
  export default {
    name: 'ent-member',
    data(){
      return {
        GS,
        members: [
          { id: util.getId(), name: 'Mary', avatar: genAvatar() },
          { id: util.getId(), name: 'James', avatar: genAvatar() },
          { id: util.getId(), name: 'John', avatar: genAvatar() }
        ]
      }
    },
    computed: mapState(['globalState']),
    methods: {
      removeMember(index) {
        this.members.splice(index, 1);
      },
      addMember() {
        this.members.push({
          id: util.getId(),
          name: '',
          avatar: genAvatar()
        })
      },
      submit() {
        fsm[GSTrans.ENTER_MEMBER_INFO](this.members);
      }
    }
  }
</script>

<style lang="less" scoped>
  .member-item {
    display: flex;
    justify-content: space-between;
    margin: 0 10%;
  }
  .add-btn-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
