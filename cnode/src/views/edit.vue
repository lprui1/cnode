<template>
    <div class="box">
        <div class="left">
            <div class="pannle1">
                <!--面包屑-->
                <ol class="breadcrumb">
                    <router-link to="/">主页</router-link> /
                    <a class="active">编辑话题</a>
                </ol>
                <div class="main">
                    <!--选择板块-->
                    <div class="sel">
                        <span>选择板块:</span>
                        <select name="tab" id="tab-value">
                            <option value="">请选择</option>                        
                            <option value="share">分享</option>                       
                            <option value="ask">问答</option>                        
                            <option value="job">招聘</option>                       
                            <option value="dev">客户端测试</option>
                        </select>                   
                    </div>
                    <!--下拉列表-->
                    <input type="type" class="form-control" id="exampleInputEmail1" placeholder="标题字数10字以上" v-model="title"> 
                    <div class="form-group">
                        <textarea class="form-control" id="exampleInputEmail1" placeholder="请发表评论" v-model="content"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary submit" @click="subedit">提交</button> 
                </div>
            </div>
            <!--pannle2-->
            <div class="pannle2">
                <p class="breadcrumb">最近参加的话题</p>
                <div class="main">
                    
                </div>
            </div>
            
        </div>
        <!--aside-->

    </div>
</template>
<script>
import Axios from 'axios'
export default{
    data() {
        return{
            content:'',
            title:''
            // id:''
        }
    },
    methods: {
        subedit() {
            Axios.post("https://cnodejs.org/api/v1/topics/update",{
                accesstoken: 'ac306b79-2d2e-41d8-9b30-ebc1af8f407d',
                topic_id:this.id,
                title:this.title,
                content:this.content,
                tab:'dev'
            }).then( res=>{
                // console.log(res)
                location.href='/detail/'+ this.id
            })
        }
    },
    created() {
    //    console.log(this.$route)
       let {id} = this.$route.params
       this.id = id
    }
}

</script>

<style seoped lang="scss">
.breadcrumb{
    margin:0; 
    a{
        color:#80bd01;
    }  
}
.form-control{
    margin-bottom:13px;
}
.box{
    width:78%;
    .pannle1{
        margin-bottom:13px;
        //内容
        .main{
            padding:10px 20px;
            background:#fff;
            //选择板块
            .sel{
                margin-bottom:13px;
                select {
                    width: 220px;
                    border: 1px solid #ccc;
                    height: 30px;
                    line-height: 30px;
                    display: inline-block;
                    padding: 4px 6px;
                    color: #555;
                    vertical-align: middle;
                    border-radius: 4px;
                }
            }
        }
    }   
}
</style>
