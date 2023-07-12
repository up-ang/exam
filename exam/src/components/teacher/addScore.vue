<!-- 添加成绩 -->
<template>
  <section class="add">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="试卷编号">
        <el-input v-model="form.examCode"></el-input>
      </el-form-item>
      <el-form-item label="学生学号">
        <el-input v-model="form.studentId"></el-input>
      </el-form-item>
      <el-form-item label="考试科目">
        <el-input v-model="form.subject"></el-input>
      </el-form-item>
      <el-form-item label="学生成绩">
        <el-input v-model="form.etScore"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">立即上传</el-button>
        <el-button type="text" @click="cancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: { //表单数据初始化
        examCode: null,
        studentId: null,
        subject:null,
        etScore: null,
        answerDate:"2023-07-13"
      }
    };
  },
  methods: {
    onSubmit() { //数据提交
      let date = new Date()
      this.$axios({
        url: '/api/score',
        method: 'post',
        data: {
          ...this.form
        }
      }).then(res => {
        if(res.data.code == 200) {
          this.$message({
            message: '数据添加成功',
            type: 'success'
          })
          this.$router.push({path: '/addScore'})
          this.form = {}
        }
      })
    },
    cancel() { //取消按钮
      this.form = {}
    },

  }
};
</script>
<style lang="less" scoped>
.add {
  padding: 0px 40px;
  width: 400px;
}
</style>

