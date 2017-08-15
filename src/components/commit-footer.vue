<template>
  <div class="commit-footer">
    <span class="date">1分钟前</span>
    <div class="commit-opration">
      <span class="like liked">19</span>
      <span class="reply">回复</span>
      <span class="more"></span>
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
  .commit-footer{
    margin: 17px 0;
    display: flex;
    flex-direction: row;
    color: #A1A9B3;
    align-items: center;
  }
  .date{
    font-size: 12px;
    line-height: 12px;
  }
  .commit-opration{
    flex: 1;
    align-items: center;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
  }
  .like, .reply, .more{
    display: inline-block;
    height: 14px;
  }
  .like{
    margin-right: 24px;
  }
  .liked{
    color: #1571E5;
  }
  .like:before, .reply:before, .more:before{
    font-family: "bbs";
    font-size: 12px;
    line-height: 12px;
  }
  .like:before{
    content: "\e698";
    margin-right: 4px;
  }
  .reply{
    margin-right: 16px;
  }
  .reply:before{
    content: "\e695";
    margin-right: 4px;
  }
  .more{
    text-align: center;
    width: 22px;
  }
  .more:before{
    content: "\e699";
  }
</style>
