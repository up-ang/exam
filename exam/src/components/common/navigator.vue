<template>
  <div id="nav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="title">{{active.title}}</el-breadcrumb-item>

    </el-breadcrumb>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      active: [],
      index1: null,

    }
  },
  computed: mapState(["menu"]),
  methods: {
    getIndex() {

      this.bus.$on('sendIndex',(data)=>{ //通过总线获取index
        this.index1 = data

        this.active = this.menu[data-1]

        // console.log(JSON.stringify(this.active)+'----')
      })
    }
  },

  created() {
    this.getIndex()
  },
  beforeDestroy() {
    // this.bus.$off('sendIndex') //销毁
  },
}
</script>

<style scoped>
#nav .el-breadcrumb {
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
}
#nav .el-breadcrumb .title{
  font-weight: bold;
}
</style>
