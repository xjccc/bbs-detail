<template>
  <ul class="reply">
    <li class="content">
      <span class="reply-name">追风少年刘全友：</span>
      我上次好像可以
    </li>
    <li class="content">
      <span class="reply-name">追风少年刘全友：</span>
      我上次好像可以我上次好像可以
    </li>
    <div class="total">
      共两条回复 >
    </div>
  </ul>
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
    padding: 8px 16px 16px 16px;
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
    width: 100%;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    margin-bottom: 4px;
    text-overflow: ellipsis;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
  }
  .content span{
    display: inline-block;
    color: #17181A;
  }
  .content span.reply-name{
    color: #143966;
  }
  .total{
    padding-top: 12px;
    padding-bottom: 16px;
    font-size: 14px;
    color: #1571E5;
    line-height: 14px;
  }
</style>
