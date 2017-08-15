<template>
  <div class="commit">
    <commit-header></commit-header>
    <commit-content></commit-content>
    <commit-footer></commit-footer>
  </div>
</template>

<script>
import CommitHeader from './commit-header'
import CommitContent from './commit-content'
import CommitFooter from './commit-footer'
export default {
  components: {
    CommitHeader,
    CommitContent,
    CommitFooter
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
  .commit{
    position: relative;
    margin-left: 40px;
    padding-top: 12px;
    border-top: 1px solid #eee;
  }
  .commit-header{
    display: flex;
    flex-direction: row;
  }
</style>
