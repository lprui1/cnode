<template>
    <div class="box">
      <p>无人回复的话题</p>
      <ul>
        <li>express响应问题</li>
        <li>理解 Node.js Stream 模块</li>
        <li>推荐一个解决身份认证的云服务dbohsdhuha</li>
        <li>VIM 代码片段插件 Ultisnips 使用jisjkskjsshsh</li>
        <li>mongDB 分页操作</li>

      </ul>
    </div>
</template>

<script>
    export default {
        // name: "aside3"
    }
</script>

<style scoped lang="scss">
  .box{
    width:100%;
    // height:218px;
    background:#fff;
    padding:0;
    p{
      height:40px;
      line-height:40px;
      // border:1px solid red;
      background:#f6f6f6;
      text-indent:10px;
      border-radius:3px 3px 0 0;
    }
    ul{
      list-style:none;
      padding:10px;
      margin-top:0;
      li{
        //设置超出部分...
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;      
        line-height:30px;
      }
    }
  }
</style>
