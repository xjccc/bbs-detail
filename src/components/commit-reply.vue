<template>
  <div class="reply">
    <div class="content">
      <span class="reply-name">追风少年刘全友：</span>
      <span class="reply-content">我上次好像可以</span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
<style scoped>
  .reply{
    position: relative;
    margin-top: 11px;
    width: 244px;
    max-height: 65px;
    padding: 10px 15px 15px 15px;
    background: #F5F5F5;
    border-radius: 2px;
  }
  .reply:before{
    content:'';
    position:absolute;
    left: 10px;
    top:-2px;
    width:4px;
    height:4px;
    background-color:#f5f5f5;
    border-bottom:solid 1px #f5f5f5;
    border-right:solid 1px #f5f5f5;
    transform:rotate(135deg);
  }
  .content{
    font-size: 14px;
    height: 14px;
    line-height: 14px;
  }
  .content span{
    display: inline-block;
    color: #17181A;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .content span.reply-name{
    color: #143966;
  }
</style>
