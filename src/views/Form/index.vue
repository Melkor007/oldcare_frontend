<template>
  <div class="form">
    <button @click="test"></button>
    <form-demo @getFormData='getFormData'></form-demo>
    <table-data :tableData='tableData'></table-data>
  </div>
</template>

<script>
import FormDemo from './components/FormDemo'
import TableData from './components/TableData'

export default {
  components: {
    FormDemo,
    TableData
  },

  data() {
    return {
      tableData: []
    }
  },

  methods: {
    getFormData(val) {
      this.tableData.push(val)
    },
    test() {
      alert("request sent!")
      fetch('http://192.168.43.119:8000/api/web/login/',{
        method:'post',
        body:JSON.stringify({
          username:'liuyufan',
          password:'123456'
        })
      }).then(res => res.json())
        .then(data => console.log(data))
    }
  }
}
</script>

<style lang="less" scoped>
.form {
  width: 100%;
  min-height: 85%;
  margin: 20px 0;
  border: 1px solid rgba(173,216,230, 1);
  background-color: #fff;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
