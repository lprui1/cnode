<template>
    <div class="box">
        <div class="left">
            <div class="pannle1">
                <!--面包屑-->
                <ol class="breadcrumb">
                    <router-link to="/">主页</router-link> /
                    <router-link to="/toppicCollect" class="active">{{colist.loginname}}收藏的话题</router-link>
                </ol>
                <!--main-->
                <div class="main">
                    <ul v-for="item in colist">
                        <li>
                            <div class="mainl">
                                <img :src="item.author.avatar_url">
                                <span>数量</span>
                                <span><a href="">{{item.title}}</a></span>
                            </div>
                            <span>8:00</span>                            
                        </li>
                    </ul>
                </div>
            </div>  <!--pannle1-->
        </div><!--left end-->
        <!--aside-->
        <cnode-aside></cnode-aside>
    </div>
</template>
<script>
import Axios from 'axios'
import cnodeAside from '@/components/cnode/aside'
// import loginnameVue from './loginname.vue';
export default {
    data() {
        return{
            colist:{}
        }
    },
   components: {
    cnodeAside
   },
   created() {
        let{ loginname } = this.$route.params
        // console.log(loginname)
    Axios.get('https://cnodejs.org/api/v1/topic_collect/'+loginname). then( res=> {
      this.colist = res.data.data
      console.log(this.colist)
    })
  }
}
</script>
<style scoped lang="scss">
.breadcrumb{
    margin:0;
}
.box{
    width:100%;
    .left{
        width:78%;
        float:left;
        .main{
            background:#fff;
            padding:10px 20px;
            // height:500px;
            ul{
                padding:0;
                li{
                    display: flex;
                    justify-content: space-between;
                    padding:10px 20px;
                    border-bottom:1px solid #999;
                    img{
                        width:30px;
                        height:30px;
                    }
                    span:first-child{
                        margin-right:20px;
                    }
                }
            }
        }
    }
    cnode-aside{
        width:100%;
    }
}
</style>
