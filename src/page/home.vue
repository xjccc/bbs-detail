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
      Optionsrc: 'http://vali.cp31.ott.cibntv.net/youku/6977FE005FC4471AABD8B32AF/030008010058F85C40E85D131CB68414F4E96E-0C01-DB32-F4E0-360BF28EB1E9.mp4?sid=050269412500010007890_00&sign=5f8645d070d2bd8edc96ef840c2bda6a&ctype=50'
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
