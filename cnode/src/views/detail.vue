<template>
  <div class="box">
    <div class="pannle">
        <h3><span v-if="detailInfo.top" class="zd">置顶</span>{{detailInfo.title}}</h3>
        <div class="headerb">
            <ul>
              <li>发布于<span>{{detailInfo.create_at | filtersa}}</span></li>
              <!-- <li>作者<span>{{detailInfo.author.loginname}}</span></li> -->
              <li><span>{{detailInfo.visit_count}}</span>次浏览</li>
              <li>来自
                <span v-if="detailInfo.top">置顶</span>
                <span v-else-if="detailInfo.good">精华</span>
                <span v-else-if="detailInfo.tab==='share'">分享</span>
                <span v-else-if="detailInfo.tab==='ask'">问答</span>
              </li>
            </ul>
            <button type="button" class="btn btn-success" @click="collect" v-if="!detailInfo.is_collect">收藏</button> 
            <button type="button" class="btn btn-info" @click="nocollect" v-if="detailInfo.is_collect">取消收藏</button>
        </div>
        <p class="headbott">
          <span @click="edit">编辑</span>
          <!-- <span @click="del">删除</span> -->
        </p>
        <br>
        <hr>  
         <p v-html="detailInfo.content"></p>   
    </div><!--pannle1结束-->
    <!--pannle2-->
    <div class="pannle2">
      <p class="breadcrumb">{{huifu.length}}条回复</p>
      <div class="main">  
        <dl v-for="(item,index) in huifu" :key="index">
          <!-- {{item}} -->
          <dt>
            <img :src="item.author.avatar_url">
            <div class="author">
              <p><span>{{item.author.loginname}}</span><span>{{index+1}}楼</span><span>{{item.last_reply_at | filtersa}}</span></p>
              <p v-html="item.content"></p>
            </div>  
          </dt>
          <dd>
            <!--点赞-->
            <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" @click="zan(item.id)">&nbsp;{{item.ups.length}}</span>
            <!--评论-->
            <span class="glyphicon glyphicon-tree-deciduous"></span>
          </dd>
        </dl>
          
      </div>
    </div>
    <!--pannle3-->
    <div class="pannle3">
      <p class="breadcrumb">添加回复</p>
      <div class="main">
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入内容" v-model="content">
          <button type="button" class="btn btn-primary" @click="hf">回复</button>
      </div>
    </div> 
  </div>
</template>
<script>  
  import Axios from 'axios'
    export default {
      data() {
          return{
            detailInfo:{},
            id: '',
            content:'',
            huifu:{}
          }
      },
      methods: {
        //收藏主题
        collect(){
           Axios.post("https://cnodejs.org/api/v1/topic_collect/collect", {
            accesstoken: 'ac306b79-2d2e-41d8-9b30-ebc1af8f407d',
            topic_id: this.id
        }).then(res=>{
          this.detailInfo.is_collect=true
          console.log(this.detailInfo)
        })
        },
        //取消收藏  
       nocollect() {
         Axios.post("https://cnodejs.org/api/v1/topic_collect/de_collect",{
           accesstoken: 'ac306b79-2d2e-41d8-9b30-ebc1af8f407d',
            topic_id: this.id
         }).then(res=>{
          //  console.log(res)
          this.detailInfo.is_collect=false
         })
       },
       //编辑
      edit(){
        location.href = '/edit/' + this.id
      },
      //回复
      hf() {
        // console.log(this.$route.params);
        let { id } = this.$route.params;
        // console.log(id)
        Axios.post('https://cnodejs.org/api/v1/topic/'+id+'/replies',{
          accesstoken:"ac306b79-2d2e-41d8-9b30-ebc1af8f407d",
          content:this.content
        }).then( res=> {
          location.href='/detail/'+ id
          console.log(res)
        }) 
      },
      //点赞
      zan(id){
        // // alert('aaa')
        // let { id } = this.$route.params;
        // console.log(this.$route)
        Axios.post('https://cnodejs.org/api/v1/reply/'+id+'/ups',{
          accesstoken:"ac306b79-2d2e-41d8-9b30-ebc1af8f407d"
        }).then( res=> {
          console.log(res);
          history.go(0)
        })
      }
      },   
        created() {
          let {id} = this.$route.params  //传参第三步 通过this.$route接收到传递过来的数据
          this.id = id;
          // let { id }=this.$route.query     //通过query获取id
          Axios.get('https://cnodejs.org/api/v1/topic/'+id).then( res => {
            // console.log(res);
            let { data } = res.data;
            this.detailInfo=data;
            //回复
            let { replies } = res.data.data
            this.huifu = replies
          })
        }
    }
</script>
<style scoped lang="scss">
// dt{
//   font-weight:bold;
// }
.breadcrumb,hr{
  margin:0;
}
.box{
  width:78%;
  margin-right:30px;
  .pannle{
    margin-bottom:13px;
    padding:20px;
    width:100%;
    background:#fff;
    border-radius:10px;
    p{
      margin-top:20px;
    }
    h3{
      //置顶
      span.zd{
        background: #80bd01;
        padding: 2px 4px;
        border-radius: 3px;
        color: #fff;
        font-size: 14px;
        margin-right:10px;
      }
    }
    .headerb{
      width:100%;
      height:34px;
      line-height:34px;
      display:flex;
      justify-content: space-between;
      margin-bottom:10px;
        ul{
        width:100%;
        // border-bottom:0;
        padding:0;
        li{
          float:left;
          padding-right:40px;
          color:#999;
        }
      }
    } 
    //编辑删除
    .headbott{
      span{
        margin-right:10px;
      }
    }  
  }
  //pannle2
  .pannle2{
    margin-bottom:13px;
    .main{
      width:100%;
      // height:190px;
      background:#fff;
      padding:10px;
      dl{
        border-bottom:1px solid #ccc;
        width:100%;
        display:flex;
        justify-content: space-between;
        padding:10px;
        dt{
          display:flex;
          justify-content: space-between;
          img{
            width:30px;
            height:30px;
            margin-right:10px;
          }
          div.author{
            // float:left;
            // flex-grow:1;
            // border:1px solid red;
            p{
              span{
                margin-right:10px;
              }
            }
          }
        }
        dd{
          display:flex;
          justify-content: space-between;
          span:first-child{
            margin-right:10px;
          }
        }
      }
      
    }
  }
  //pannle3
  .pannle3{
    .main{
      width:100%;
      height:190px;
      background:#fff;
      padding:10px;
      position:relative;
      .btn-primary{
        position:absolute;
        bottom:10px;
      }
    }
  }
  //内容部分
  article{
    padding:0 20px;
  }
}
</style>
