<template>
    <div class="box">
        <!--面包屑-->
        <ol class="breadcrumb">
            <router-link to="/">主页</router-link> /
            <router-link to="/api" class="active">登录</router-link>
        </ol>
        <!--内容-->
        <div class="main">
           <form role="form">
                <div class="form-group">
                    <label for="exampleInputEmail1">用户名</label>
                    <input type="type" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">密码</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="anniu">
                    <button type="button" class="btn btn-primary">登录</button>
                </div>               
            </form>
        </div>              
    </div>
</template>
<script>
</script>
<style scoped lang="scss">
.box{
    width:78%;
    background:#fff;
    // padding:20px;
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
    }
}
</style>
