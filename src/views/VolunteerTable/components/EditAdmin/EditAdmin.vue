<template>
  <el-dialog title="编辑账号" :visible.sync="dialogFormVisible" v-dialogDrag width="25%">
    <el-form :model="form">
      <el-form-item label="账号ID" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off" class="formItem" placeholder="请输入账号id" disabled></el-input>
      </el-form-item>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" class="formItem" placeholder="请输入账号名称"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off" class="formItem" placeholder="请输入电话号码"></el-input>
      </el-form-item>
      <el-form-item label="员工卡号" :label-width="formLabelWidth">
        <el-input v-model="form.id_card" autocomplete="off" class="formItem" placeholder="请输入员工卡号"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="medium" @click="dialogFormVisible = false" >取 消</el-button>
      <el-button size="medium" type="primary" @click="editAdmin" :loading="loading">编辑</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import service from '@/service/index'
import {Message} from "element-ui";

interface Edit {
  form: Object
  formLabelWidth: String
  dialogFormVisible: Boolean
  loading: Boolean
}

@Component
export default class AddAdmin extends Vue implements Edit{
  @Prop() private editVisible!: Boolean
  @Prop() private row !: Object

  formLabelWidth = '120px'
  loading = false

  // 计算属性，拿到要修改的数据
  get form() {
    return this.row
  }

  // 计算属性，获得父组件传值
  get dialogFormVisible() {
    return this.editVisible
  }

  // set进行父组件状态的修改
  set dialogFormVisible(val) {
    !val && this.$emit('update:editVisible', false)
  }

  // 编辑数据并修改
  public editAdmin() {
    let params = this.form
    let id = this.row.id
    this.loading = true
    service.putVolunteerList(params, id).then(res => {
      this.loading = false
      this.dialogFormVisible = false
      this.$emit('flushList')  // 修改后刷新数据
      Message({
        message: `修改成功`,
        type: 'success',
        duration: 3 * 1000
      });
    })
  }
}
</script>

<style lang="less" scoped>
.formItem {
  width: 200px;
  float: left
}
</style>
