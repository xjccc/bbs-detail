<template>
  <div>
  	<div class="content">
  		<ArticlHeader></ArticlHeader>
  		<div class="article">
        <app-videos :Optionsrc="Optionsrc"></app-videos>
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
import AppVideos from '@/components/app-videos'
import ArticlHeader from '../components/articl-header.vue'
import CardList from '../components/card-list.vue'
import Commit from '../components/commit.vue'
export default {
  components: {ArticlHeader, CardList, Commit, AppVideos},
  data () {
    return {
      Optionsrc: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
    }
  }
}
</script>
<style scoped>
  .article{
    width: 345px;
    height: 258px;
    margin: 8px 15px;
  }
  .hot-comment li, .all-comment{
    padding: 0 16px;
  }
</style>
