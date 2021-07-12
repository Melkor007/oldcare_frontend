<template>
    <div>
      <el-row>
        <link href="https://vjs.zencdn.net/7.3.0/video-js.min.css" rel="stylesheet">
        <script src="https://vjs.zencdn.net/7.3.0/video.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/videojs-flash@2/dist/videojs-flash.min.js"></script>
        <el-col style="width: 1000px;">
          <video id="liveVideo" class="video-js" controls autoplay preload="auto" width="960"
                 height="660" data-setup="{}">
            <source :src="mainSrc" type="rtmp/flv">
          </video>
        </el-col>
        <el-col>
          <div>"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"</div>
        </el-col>
      </el-row>
  </div>
</template>

<script>

export default {
name: "RtmpVideo",
  data() {
    return {
      mainSrc: "rtmp://localhost:1935/mylive/",
    }
  },
}
</script>

<style scoped>

</style>
