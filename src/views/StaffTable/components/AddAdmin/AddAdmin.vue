<template>
  <el-dialog title="添加账号" :visible.sync="dialogFormVisible" v-dialogDrag width="25%">
    <el-form :model="form">
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" class="formItem" placeholder="请输入账号名称"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio-group v-model="form.gender" class="formItem" style="width: auto; margin-top: 13px">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话号码" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off" class="formItem" placeholder="请输入电话号码"></el-input>
      </el-form-item>
<!--      <el-form-item label="地址" :label-width="formLabelWidth">-->
<!--        <el-cascader-->
<!--          placeholder="请选择地址"-->
<!--          v-model="form.addr"-->
<!--          :options="options"-->
<!--          class="formItem"-->
<!--          filterable>-->
<!--        </el-cascader>-->
<!--      </el-form-item>-->
      <el-form-item label="员工卡号" :label-width="formLabelWidth">
        <el-input v-model="form.id_card" autocomplete="off" class="formItem" placeholder="请输入员工卡号"></el-input>
      </el-form-item>
      <el-form-item label="生日" :label-width="formLabelWidth">
        <el-date-picker
          v-model="form.birthday"
          type="string"
          placeholder="选择日期"
          class="formItem">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="入职日期" :label-width="formLabelWidth">
        <el-date-picker
          v-model="form.hire_date"
          type="string"
          placeholder="选择日期"
          class="formItem">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="medium" @click="dialogFormVisible = false" >取 消</el-button>
      <el-button size="medium" type="primary" @click="addAdmin">添加</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import service from '@/service/index'
import {Message} from "element-ui";

interface Add {
  form: Object
  formLabelWidth: String
  dialogFormVisible: Boolean
}

@Component
export default class AddAdmin extends Vue implements Add{
  @Prop() private visible!: Boolean

  form = {
    username: '',
    gender: '',
    // addr: '',
    // email: '',
    phone: '',
    // buildtime: '',
    id_card: '',
    birthday:'',
    hire_date: '',
    // resign_data: ''
  }
  formLabelWidth = '120px'

  // 通过计算属性获取父级组件传值，并进行form表单清空
  get dialogFormVisible() {
    if (this.visible) {
      for (let key in this.form) {
        this.form[key] = ''
      }
    }
    return this.visible
  }

  set dialogFormVisible(val) {
    !val && this.$emit('update:visible', false)  // 更新父组件状态，注意.sync修饰符
  }

  public addAdmin() {
    service.postStaffList(this.form).then(res => {
      this.dialogFormVisible = false
      // let { code, msg } = res.data
      // if (code == 0) {
      //   this.$message({
      //     message: msg,
      //     type: 'success'
      //   })
      // }
      this.$emit('getAdmin')
      Message({
        message: `添加成功`,
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
  float: left;
}
</style>
