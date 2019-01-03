<template>
    <div class="box">
        <!--left-->
        <div class="left">
            <!--pannle1-->
            <div class="pannle1">
                <!--面包屑-->
                <ol class="breadcrumb">
                    <router-link to="/">主页</router-link> /
                    <!-- <router-link to="/toppic" class="active">{{listuse.loginname}}</router-link> -->
                </ol>
                <!--main-->
                <div class="main">
                    <div class="top">
                        <img :src="listuse.avatar_url">
                        <span>{{listuse.loginname}}</span>
                    </div>
                    <div class="bottom">
                        <p style="color:#000">{{listuse.score}}积分</p>
                        <p><a :href="'/toppicCollect/'+listuse.loginname">收藏的话题</a></p>
                        <p>@ {{listuse.githubUsername}}</p>
                        <p>注册时间 {{listuse.create_at}}</p>    
                    </div>
                </div>
            </div>  
            <!--pannle2-->
            <div class="pannle2">
                <!--面包屑-->
                <p class="breadcrumb">最近创建的话题</p>
                <!--main-->
                <div class="main">
                    <ul v-for="item in listuse.recent_topics">
                        <li>
                            <div class="mainl">
                                <img :src="item.author.avatar_url">
                                <span>数量</span>
                                <span><a href="">{{item.title}}</a></span>
                            </div>
                            <span>8：00</span>                            
                        </li>
                    </ul>
                    <p>查看更多>></p>
                </div>
            </div> 
            <!--pannle3-->
            <div class="pannle3">
                <p class="breadcrumb">最近参加的话题</p>
                <div class="main">
                    <ul v-for="(item,index) in listuse.recent_replies" :key="index">
                        <li>
                            <div class="mainl">
                                <img :src="item.author.avatar_url">
                                <span>数量</span>
                                <span><a href="">{{item.title}}</a></span>
                            </div>
                            <span>8：00</span>                            
                        </li>
                    </ul>
                    <p>查看更多>></p>
                </div>
            </div> 
        </div>
        <!--侧边栏-->
        <cnode-aside></cnode-aside>                          
    </div>
</template>
<script>
import cnodeAside from '@/components/cnode/aside'
import Axios from 'axios'
export default {
    data() {
        return{
            listuse:{}
        }
    },
    components: {
        cnodeAside
    },
    created() {
        let{ loginname } = this.$route.params
        console.log(loginname)
        Axios.get("https://cnodejs.org/api/v1/user/"+loginname,{
            
        }).then( res=> {
            this.listuse = res.data.data;
            console.log(this.listuse)
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
         .pannle1,{
            width:100%;
            background:#fff;
            margin-bottom:13px;  
            //main
            .main{
                width:100%;
                padding:10px;
                background:#fff;
                .top{
                    img{
                        width:48px;
                        height:48px;
                    }
                }
                .bottom{
                    margin-top:20px;
                    p{
                        color:#999;
                    }
                }
            }
        }
        //pannle2
        .pannle2,.pannle3{
            margin-bottom:13px;
            .main{
                width:100%;
                background:#fff;
                ul{
                    padding:0;
                    li{
                        list-style:none;
                        border-bottom:1px solid red;
                        padding:10px 20px;
                        width:100%;
                        display: flex;
                        justify-content: space-between;
                        .mainl{
                            img{
                                width:30px;
                                height:30px;
                            }
                            span{
                                margin-left:10px;
                            }
                        }
                        
                    }
                    li:last-child{
                        border-bottom:none;
                    }
                }
                p{
                    padding:10px;
                    padding-top:0px;
                }
            }
        }
    }
    //right
    cnode-aside{
        float: right;
    }
}

</style>

