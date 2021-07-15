<template>
  <el-dialog title="添加账号" :visible.sync="dialogFormVisible" v-dialogDrag width="25%">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
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
      <el-form-item label="健康状况" :label-width="formLabelWidth">
        <el-input v-model="form.health_state" autocomplete="off" class="formItem" placeholder="请输入健康状况"></el-input>
<!--        <el-cascader-->
<!--          placeholder="健康状况"-->
<!--          v-model="form.healthState"-->
<!--          :options="options"-->
<!--          class="formItem"-->
<!--          filterable>-->
<!--        </el-cascader>-->
      </el-form-item>
      <el-form-item label="房间编号" :label-width="formLabelWidth">
        <el-input v-model="form.room_number" autocomplete="off" class="formItem" placeholder="请输入房间编号"></el-input>
      </el-form-item>
      <el-form-item label="监护人姓名" :label-width="formLabelWidth">
        <el-input v-model="form.firstguardian_name" autocomplete="off" class="formItem" placeholder="请输入监护人姓名"></el-input>
      </el-form-item>
      <el-form-item label="监护人关系" :label-width="formLabelWidth">
        <el-input v-model="form.firstguardian_relationship" autocomplete="off" class="formItem" placeholder="请输入监护人与老人的关系"></el-input>
      </el-form-item>
      <el-form-item label="监护人电话" :label-width="formLabelWidth">
        <el-input v-model="form.firstguardian_phone" autocomplete="off" class="formItem" placeholder="请输入监护人电话"></el-input>
      </el-form-item>
      <el-form-item label="入住时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="form.checkin_date"
          type="string"
          placeholder="输入日期"
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
import {Message} from "element-ui";
import service from '@/service/index'

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
    phone:'',
    // addr: '',
    // email: '',
    checkin_date: '',
    health_state: '',
    room_number: '',
    firstguardian_name:'',
    firstguardian_relationship:'',
    firstguardian_phone:''
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
    service.postOldList(this.form).then(res => {
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

.pic_list_box {
  display: flex;
}
.upload_btn {
  width: 100px;
  height: 100px;
  padding-left: 15px;
}
.pic_list {
  display: flex;
}
</style>
