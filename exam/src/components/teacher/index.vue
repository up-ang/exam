// 展示组件页面
<template>
  <div id="index">
    <header1 class="topbar"></header1>

    <section class="container">
      <!--下拉列表-->
      <div class="left_side">
        <mainLeft>

        </mainLeft>
      </div>
      <!--中间动态显示列表对应内容-->
      <div class="main_wrapper">
      <!-- 标题部分  -->
        <navigator class="nav">

        </navigator>

        <router-view>

        </router-view>

      </div>
    </section>

  </div>
</template>

<script>
import header from '@/components/common/header'
import mainLeft from '@/components/common/mainLeft'
import navigator from '@/components/common/navigator'

export default {
  components:{
    header1: header,
    mainLeft: mainLeft,
    navigator:navigator
  },
  data() {
    return {
      username: '许如梦'
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
#index .nav {
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
.container {

  display: flex;
  background-color: #fff;

}
.main_wrapper {

  overflow: hidden;
  flex: 1;
  background-color: #fff;

}
</style>

