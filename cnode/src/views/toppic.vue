<template>
    <div class="box">
        <!--left-->
        <div class="left">
            <!--面包屑-->
            <ol class="breadcrumb">
                <router-link to="/">主页</router-link> /
                <router-link to="/toppic" class="active">发布话题</router-link>
            </ol>
            <!--内容-->
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
                <button type="submit" class="btn btn-primary submit" @click="submit">提交</button> 
            </div>  
        </div>
        <!--right-->
        <div class="right">
            <div id="sidebar">
            <div class="panel">
                <div class="header">
                <span class="col_fade">Markdown 语法参考</span>
                </div>
                <div class="inner">
                <ol>
                    <li><tt>### 单行的标题</tt></li>
                    <li><tt>**粗体**</tt></li>
                    <li><tt>`console.log('行内代码')`</tt></li>
                    <li><tt>```js\n code \n```</tt> 标记代码块</li>
                    <li><tt>[内容](链接)</tt></li>
                    <li><tt>![文字说明](图片链接)</tt></li>
                </ol>
                <span><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
                </div>
            </div>
            <div class="panel">
                <div class="header">
                <span class="col_fade">话题发布指南</span>
                </div>
                <div class="inner">
                <ol>
                    <li>尽量把话题要点浓缩到标题里</li>
                    <li>代码含义和报错可在 <a href="http://segmentfault.com/t/node.js">SegmentFault</a> 提问</li>
                </ol>
                </div>
            </div>
            </div>
        </div>                
    </div>
</template>
<script>
 import Axios from 'axios'
    export default {
        data() {
            return {
                ceshi:[],
                title:"",
                content:"",
                topic_id:""
            }  
        },
    methods: {
        submit() {
            // alert("aaa")
            Axios.post('https://cnodejs.org/api/v1/topics',{
                accesstoken:"ac306b79-2d2e-41d8-9b30-ebc1af8f407d",
                title:this.title,
                content:this.content,
                tab:"dev"
            }).then(res=>{
                // console.log(res)
                let { topic_id } = res.data
                location.href = '/detail/'+topic_id 
            })
        }        
    }
}
</script>
<style scoped lang="scss">
.form-group{
    width:100%;
    margin-top:20px;
}
.box{
    width:100%;
    
    .left{
        width:78%;
        background:#fff;
        float:left;
        //面包屑
        .breadcrumb{
            a{
                color:#80bd01;
            }
            a.active{
                color:#999;
            }    
        }
        //内容
        .main{
            padding:10px 20px;
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
                    margin-bottom: 10px;
                    font-size: 14px;
                    // line-height: 20px;
                    color: #555;
                    vertical-align: middle;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    border-radius: 4px;
                }
            }
        }
    }
    .right{
        float:right;
        #sidebar {
            width: 290px;
            font-size: 14px;
            float: right;
            margin-bottom: 20px;
            
            #sidebar .header {
                color: #51585c;
                border-radius: 3px 3px 0 0;
            }
            .panel .header {
                padding: 10px;
                background-color: #f6f6f6;
                border-radius: 3px 3px 0 0;
            }
            .panel .inner {
                padding: 10px;
                border-radius: 0 0 3px 3px;
            }
        }
    }
    

}

</style>

