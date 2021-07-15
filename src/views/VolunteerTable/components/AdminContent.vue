<template>
  <div class="content">
    <el-table
    :data="tableData"
    highlight-current-row
    :header-cell-style="{background:'rgba(255,218,185,0.4)',color:'#2F4F4F'}"
    @sort-change='sortChange'
    v-loading="listLoading"
    border>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="名字">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.gender }}</span>
            </el-form-item>
            <el-form-item label="手机号码">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="员工卡">
              <span>{{ props.row.id_card }}</span>
            </el-form-item>
            <el-form-item label="入职日期">
              <span>{{ props.row.checkin_date }}</span>
            </el-form-item>
            <el-form-item label="离职日期">
              <span>{{ props.row.checkout_data }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="ID"
        prop="id"
        align="center"
        min-width="150"
        sortable='custom'>
      </el-table-column>
      <el-table-column
        label="名字"
        prop="username"
        align="center"
        min-width="150">
      </el-table-column>
      <el-table-column
        label="性别"
        prop="gender"
        align="center"
        min-width="150">
      </el-table-column>
      <el-table-column
        label="手机号码"
        prop="phone"
        align="center"
        min-width="150">
      </el-table-column>
      <el-table-column
        label="员工卡号"
        prop="id_card"
        align="center"
        min-width="300">
      </el-table-column>
<!--      <el-table-column-->
<!--        label="email"-->
<!--        prop="email"-->
<!--        align="center"-->
<!--        min-width="300">-->
<!--      </el-table-column>-->
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="info" size="mini" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDel(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑子组件，点击编辑按钮可见 -->
    <edit-admin :editVisible.sync="editVisible" :row="row" @flushList='flushList'></edit-admin>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import EditAdmin from './EditAdmin/EditAdmin.vue'
import service from '@/service/index'
import {Message} from "element-ui";

@Component({
  components: { EditAdmin }
})
export default class AdminContent extends Vue{
  @Prop() private tableData!: Array<object>
  @Prop() private listLoading!: Boolean

  editVisible = false
  row = {}

  // 页面点击排序按钮
  public sortChange(column) {
    let { prop, order } = column
    if (order === 'descending') {
      this.tableData.sort((a, b) => b["id"] - a["id"])
    } else {
      this.tableData.sort((a, b) => a["id"] - b["id"])
    }
  }

  public handleEdit(index, row) {
    this.editVisible = true
    this.row = Object.assign({}, row)  // 该处要对对象进行浅拷贝
  }

  public handleDel(index, row) {
    let id = row.id
    service.deleteVolunteerList(id)
    Message({
      message: `删除成功`,
      type: 'success',
      duration: 3 * 1000
    });
    this.$emit('contentFlush')
  }

  // 当修改完成需要刷新数据（会返回最顶层）
  public flushList() {
    this.$emit('contentFlush')
  }
}
</script>

<style lang="less" scoped>
.content {
  flex: 1 0 auto;
  border: 1px solid rgba(	176,196,222, 1);
  width: 100%;
  margin: 20px 0;
  overflow: auto;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.el-table {
  width: 100%;
  text-align: center
}
</style>
