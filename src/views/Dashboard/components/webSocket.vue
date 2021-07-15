<template>
    <div class="test">
    </div>


</template>

<script>
    export default {
        name: "webSocket",
        data() {
            return {
                websock: null,
            }
        },
        created() {
            this.initWebSocket();
        },
        destroyed() {
            this.websock.close() //离开路由之后断开websocket连接
        },
        methods: {
            initWebSocket(){ //初始化weosocket
              // const wsuri = "ws://192.168.1.186:8000"
                const wsuri = "ws://192.168.1.164:8000/ws/link/client/";
                if ('WebSocket' in window) {
                  this.websock = new WebSocket(wsuri);
                // websocket = new WebSocket("ws://" + window.location.host + '/rtcp-web/createClusterWebSocket');
              } else {
                alert('Not support websocket')
              }
                // this.websock = new WebSocket(wsuri);
                alert('lianjiechenggong')
                console.log('链接成功')
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onclose = this.websocketclose;
            },
            websocketonopen(){ //连接建立之后执行send方法发送数据
                let actions = {"test":"测试消息"};
                this.websocketsend(JSON.stringify(actions));
            },
            websocketonerror(){//连接建立失败重连
              alert('duankailianjie')
                this.initWebSocket();
            },
            websocketonmessage(e){ //数据接收
                alert(e.data)
                console.log(e.data)
                // const redata = JSON.parse(e.data);
                let res = e.data["message"]
                console.log('message='+res)
                this.refresh()
                if(res === 'refresh'){
                    this.refresh()
                }
            },
            websocketsend(Data){//数据发送
                this.websock.send(Data);
            },
            websocketclose(e){  //关闭
                console.log('断开连接',e);
            },
            refresh(){
                this.$emit('getEvents')
                console.log('我刷新啦!')
                this.$message({
                    message: '有新事件,已刷新消息',
                    type: 'warning'
                });
            }
        },
    }
</script>

<style scoped>

</style>
