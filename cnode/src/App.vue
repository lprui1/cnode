<template>
  <div id="app">
    <cnode-header></cnode-header>
    <div class="main">
      <router-view/>    <!--组件容器-->
      <!-- <cnode-aside></cnode-aside>       -->
    </div>
    <cnode-footer></cnode-footer> 
  </div>
</template>

<script>

  import cnodeHeader from '@/components/cnode/common/header'
  // import cnodeAside from '@/components/cnode/aside'
  import cnodeFooter from '@/components/cnode/common/footer'
  export default {
    components: {
      cnodeHeader,
      // cnodeAside,
      cnodeFooter
    }
  }
</script>

<style scoped lang="scss">
  h1,h2,h3,h4,h5,h6{
  border-bottom:1px solid #ccc;
  padding-bottom:20px;
}
  #app {
    width:100%;
    padding:0;
    color: #2c3e50;
    // position: absolute;
    .main{
      width:100%;
      padding:15px 58px;
      display: flex;
      justify-content: space-between;
      cnode-aside{
        width:20%;
        // border:1px solid red;
        padding:10px;
        float: right;
       
      }
    }
  }
</style>
