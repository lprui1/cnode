<template>
    <div class="con">
      <div class="main">
        <p class="navm">
          <router-link to="/?tab=all">全部</router-link>
          <router-link to="/?tab=good">精华</router-link>
          <router-link to="/?tab=share">分享</router-link>
          <router-link to="/?tab=ask">回答</router-link>
          <router-link to="/?tab=job">招聘</router-link>
          <router-link to="/?tab=dev">客户端测试</router-link>
        </p>
      </div>
      <ul class="list">
        <li v-for="item in listData">   
            <div class="left">
              <a :href="'/loginname/'+item.author.loginname"><img :src="item.author.avatar_url" class="pic"></a>   
              <span class="num"><span>{{item.reply_count}}</span>/<span>{{item.visit_count}}</span></span>
              <!--置顶分享-->
              <span class="both top" v-if="item.top">置顶</span>
              <span class="both top" v-else-if="item.good">精华</span>
              <span class="both other" v-else-if="item.tab==='share'">分享</span>
              <span class="both other" v-else-if="item.tab==='ask'">问答</span>
              <!--传参第二步  在跳转到页面的时候传递所需的数据-->
              <!-- <router-link :to='"/detail/"+item.id'><span class="nr">{{item.title}}</span></router-link> -->
              <a :href="'/detail/'+item.id"><span class="nr">{{item.title}}</span></a>
            </div>
            <div class="right">
              <a href=""><img :src="item.author.avatar_url" alt=""></a>
              <span>{{item.last_reply_at |filtersa}}</span>
            </div>          
        </li>
      </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return{
      listData:[]
    }
  },
  created() {
    let { tab } = this.$route.query
    tab = tab === undefined ? '' : tab
    Axios.get('https://cnodejs.org/api/v1/topics?tab='+tab).then(res=>{
      let {data} = res.data
      this.listData = data
    // console.log(this.listData)
    })
  },
  watch: {
    $route () {
      let { tab } = this.$route.query
      tab = tab === undefined ? '' : tab
      Axios.get('https://cnodejs.org/api/v1/topics?tab='+tab).then( res=> {
        let {data} = res.data
        this.listData = data
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .con{
    width:78%;
    background:#fff;
    float: left;
    .main{
      width:100%;
      // padding:10px 0;
      background:#f6f6f6;
      p.navm{
        margin: 0px;
        width:100%;
        padding:10px 0;
        a{
          text-align: center;
          color:#80bd01;
          padding:1px 5px;
          // list-style:none;
          // float:left;
          // padding:10px;
          margin:0 20px;
        }
        a:hover,ai.active{
          background: #80bd01;
          color:#fff;
          border-radius:3px;
        }
      }
    }
    ul.list{
      list-style:none;
      padding:0px;
      width:100%;
      li{
        width:100%;
        border-bottom:1px solid #ccc;
        display:block;
        height:45px;
        line-height:45px;
        text-align:left;
        // text-indent:10px;
        text-decoration:none;
        color:#888;
        display: flex;
        justify-content: space-between;
        padding:0 20px;
        //list左边
        .left{
          width:85%;
          //超出部分...
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
            //图片
            .pic{
              width:30px;
              height:30px;
            }
            //数量
            span.num{
                display: inline-block;
                text-align:center;
                width:70px;
            }
            //置顶
            span.top{
              background: #80bd01;
              padding: 2px 4px;
              border-radius: 3px;
              -webkit-border-radius: 3px;
              -moz-border-radius: 3px;
              -o-border-radius: 3px;
              color: #fff;
              font-size: 12px;
            }
            //分享
            span.other{
              background: #ccc;
              padding: 2px 4px;
              border-radius: 3px;
              -webkit-border-radius: 3px;
              -moz-border-radius: 3px;
              -o-border-radius: 3px;
              color: #fff;
              font-size: 12px;
            }
            span.nr{
            //超出部分...
              width:50%;
              padding-left:10px;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap
            }
        }
        //list右边
        .right{
          width:10%;
          img{
            width:18px;
            height:18px;
            margin-right:20px;
          }
        }
      }
      a:hover{
          background:#f6f6f6;
          text-decoration:none
      }
    }
  }

</style>
