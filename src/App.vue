<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./public/reset.css";
@font-face {
  font-family: 'bbs';  /* project id 384510 */
  src:url('//at.alicdn.com/t/font_384510_7geq4jnvfinklnmi.woff') format('woff')
}
.vjs-custom-skin, .vjs-custom-skin > .video-js{
  height: 100%;
}
.vjs-big-play-button{

}
</style>
