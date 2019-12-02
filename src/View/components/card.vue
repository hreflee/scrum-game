<template>
  <el-card class="comp-card">
    <div slot="header" class="header">
      <span>{{ cardType }}</span>
      <slot name="operation"></slot>
    </div>
    <div class="card-content">
      <p class="desc">{{desc}}</p>
      <slot></slot>
    </div>
  </el-card>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'card',
    props: {
      selected: Boolean,
      showSelectBtn: Boolean,

      cardType: String,
      desc: String
    },
    methods: {
      emitChange() {
        if (!this.selected) {
          this.$emit('select');
        } else {
          this.$emit('remove');
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .comp-card {
    width: 300px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 28px;
      font-weight: bold;
    }
    .desc {
      margin-bottom: 30px;
    }
  }
</style>
