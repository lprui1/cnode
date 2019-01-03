<template>
  <div class="box">
    <nav class="navbar navbar-inverse" role="navigation">
    <!-- 按钮 -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <!-- 左边导航 -->
      <div class="nav navbar-nav pic">
        <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
        <input type="text" class="form-control" placeholder="Search">
      </div>
      <!-- 右边导航 -->
      <ul class="nav navbar-nav navbar-right">
        <router-link  to="/">首页</router-link>
        <router-link  to="/message"><span v-if="num>0">{{num}}</span>未读消息</router-link>
        <router-link  to="/getstart">新手入门</router-link>
        <router-link  to="/api">API</router-link>
        <router-link  to="/about">关于</router-link>
        <router-link to="/user">注册</router-link>
        <!-- <li><a href="https://github.com/account/unverified-email">注册</a></li> -->
        <router-link to="/signin">登录</router-link>
        <!-- <li><a href="https://cnodejs.org/signin">登录</a></li> -->
      </ul>
    </div><!-- /.navbar-collapse -->
  </nav> 
  </div>
</template>
<script>
import Axios from 'axios'
export default{
  data() {
    return {
      num:''
    }
  },
  created() {
    // console.log('aaaaa')
    //获取未读消息数
    Axios.get('https://cnodejs.org/api/v1/message/count',{
      params:{
        accesstoken: 'ac306b79-2d2e-41d8-9b30-ebc1af8f407d'
      }
    }).then(res=>{ 
      let { data } = res.data; 
      this.num = data
      console.log(data)
    })
  }
}
</script>

<style scoped lang="scss">
.box{
  width:100%;
  height:50px;
  background: #444;
  nav{
    line-height:50px;
    //左边导航
    .pic{
      width:40%;
      display: flex;
      justify-content: space-between;
      margin-top:12px;
      img{
        width:120px;
        height:26px;   
      }
      .form-control{
        width:233px;
        height:26px;
        padding: 3px 5px 3px 22px;
        background:#888;
        color: #666;
        border: 0;
        margin-top: 2px;
        border-radius:15px;
        &:hover{
             transition: all .5s;
             background:#fff;
        }
       
      }
    }
    //右边导航
    .navbar-right{
       width:50%;
      display:flex;
      justify-content: space-around;
      a{
        color:#fff;
      }
      a:nth-child(2){
        span{
          padding:10px;
          background:red;
          border-radius:100%;
          color:#fff;
          padding:6px;
          margin-right:10px;
        }
      }
    }
  }
}
</style>
