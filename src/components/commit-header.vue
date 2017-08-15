<template>
  <div class="commit-header">
    <figure>
      <img class="commit-header-img" src="http://temp.im/32x32" alt="">
    </figure>
    <span class="commit-title">卡车之家超级群</span>
    <span class="commit-floor">1楼</span>
  </div>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
<style scoped>
  .commit-header figure{
    position: absolute;
    left: -40px;
    top: 12px;
    width: 32px;
    height: 32px;
  }
  .commit-header .commit-header-img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 50%;
    object-fit: cover;
  }
  .commit-title{
    width: 250px;
    margin-right: 10px;
    font-size: 12px;
    color: #143966;
    line-height: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .commit-floor{
    flex: 1;
    width: 40px;
    text-align: right;
    font-size: 12px;
    color: #A1A9B3;
    line-height: 12px;
  }
</style>
