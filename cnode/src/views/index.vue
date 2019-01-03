<template>
  <div class="box">
    <!--<p>这是首页视图</p>-->
    <cnode-list></cnode-list>
    <cnode-aside></cnode-aside>
  </div>
</template>

<script>
  import cnodeList from '@/components/cnode/list'
  import cnodeAside from '@/components/cnode/aside'
    export default {
        components: {
          cnodeList,
          cnodeAside
        }

    }
</script>

<style scoped lang="scss">
.box{
  width:100%;
  height:100%;
  margin:0 auto;
  margin-right:30px;
  cnode-list{
    width:78%;
    float:left;
  }
  cnode-aside{
        width:20%;
        padding:10px;
        float: right;
       
      }


}
</style>
