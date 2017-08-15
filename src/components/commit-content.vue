<template>
  <div class="commit-content">
    <span>
      七月四号从柳州出发，历经八个地方装卸货物！第一站北京！
    </span>
    <commit-reply></commit-reply>
  </div>
</template>
<script>
import CommitReply from './commit-reply'
export default {
  components: {
    CommitReply
  },
  data: () => ({

  })
}
</script>
<style scoped>
  .commit-content{
    width: 274px;
    margin: 8px;
    margin-left: 0;
    font-size: 16px;
    color: #17181A;
    line-height: 24px;
  }
</style>
