<template>
    <div class="box">
        <div class="pannle1">
            <!--面包屑-->
            <ol class="breadcrumb">
                <router-link to="/">主页</router-link> /
                <router-link to="/" style="color:#999;">新消息</router-link>
            </ol>
            <!--内容-->
            <div class="main">
                <!-- <p>无消息</p> -->
                <ul v-for="(item,index) in listhfno" :key="index">
                    <li><router-link to="/">{{item.author.loginname}}&nbsp;</router-link>回复了你的话题<router-link to="/">&nbsp;{{item.topic.title}}</router-link></li>
                </ul>
            </div>  
        </div>
        <!--pannle2-->
        <div class="pannle2">
            <!--面包屑-->
            <ol class="breadcrumb">
                <router-link to="/" style="color:#000;">过往消息</router-link> 
                <!-- <router-link to="/api" class="active">登录</router-link> -->
            </ol>
            <!--内容-->
            <div class="main">
                <!-- <p>无消息</p> -->
                <ul v-for="(item,index) in listhf" :key="index">
                    <li><router-link to="/">{{item.author.loginname}}&nbsp;</router-link>回复了你的话题<router-link to="/">&nbsp;{{item.topic.title}}</router-link></li>
                </ul>
            </div>  
        </div>            
    </div>
</template>
<script>
    import Axios from 'axios'
    export default{  
        data() {
            return{
                listhf:[],
                listhfno:[]
            }
        },
        //获取已读和未读消息
        created() { 
            // console.log(this.$route)
           Axios.get("https://cnodejs.org/api/v1/messages",{
               params: {
                   accesstoken:'ac306b79-2d2e-41d8-9b30-ebc1af8f407d'
               }     
           }).then(res=>{  
               //已读
               let { has_read_messages } = res.data.data;
               this.listhf = has_read_messages
               //未读
                let { hasnot_read_messages } = res.data.data;
                this.listhfno = hasnot_read_messages
                // console.log(hasnot_read_messages)
           })
           //标记全部已读
           Axios.post('https://cnodejs.org/api/v1/message/mark_all',{
               accesstoken:'ac306b79-2d2e-41d8-9b30-ebc1af8f407d'
           }).then( res=> {
            //    console.log(res.data)
           })
           //标记单个消息为已读
           Axios.post("https://cnodejs.org/api/v1/message/mark_one/id",{
               accesstoken:"ac306b79-2d2e-41d8-9b30-ebc1af8f407d"
           }).then( res=> {
               console.log(res.data)
           })
        }
    }
</script>
<style scoped lang="scss">
.box{
    width:78%;
    // background:#fff;
    .pannle1{
        margin-bottom:13px;
        //面包屑
        .breadcrumb{
            margin:0;
            a{
                color:#80bd01;
            }   
        }
        //内容
        .main{
            width:100%;
            padding:10px 20px;
            background:#fff;
            ul{
                width:100%;
                // display:flex;
                // flex-direction:column;
                padding:0;
                li{
                    width:100%;
                    // border-bottom:1px solid red;
                    list-style:none;
                    padding:10px;
                }
            }
        }
    }
    //pannle2
    .pannle2{
        //面包屑
        .breadcrumb{
            margin:0;
            a{
                color:#80bd01;
            }   
        }
        //内容
        .main{
            padding:10px 20px;
            background:#fff;
            ul{
                width:100%;
                // display:flex;
                // flex-direction:column;
                padding:0;
                li{
                    width:100%;
                    // border-bottom:1px solid red;
                    list-style:none;
                    padding:10px;
                }
            }
        }
    }
    
}
</style>
