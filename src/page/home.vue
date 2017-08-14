<template>
  <div>
  	<div class="content">
  		<ArticlHeader></ArticlHeader>
  		<div class="article">
  			
  		</div>
  		<!-- 总结与点评 -->
  		<div class="sum-up-comment">
	  		<ul class="sum-up-comment">
	  			<li>
	  				<CardList></CardList>
	  			</li>
	  		</ul>
  		</div>
  		<!-- 热门回帖 -->
  		<div class="hot-comment">
  			<ul>
  				<li>
  					<Commit></Commit>
  				</li>
  			</ul>
  		</div>
  		<!-- 全部评论 -->
  		<div class="all-comment">
  			<Commit></Commit>
  		</div>
  	</div>
	
  </div>
</template>

<script>
import ArticlHeader from '../components/articl-header.vue'
import CardList from '../components/card-list.vue'
import Commit from '../components/commit.vue'
export default {
  components: {ArticlHeader, CardList, Commit},
  data () {
    return {}
  }
}
</script>
<style scoped>
</style>
