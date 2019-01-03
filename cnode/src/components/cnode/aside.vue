<template>
    <div class="aside hideen-xs hidden-sm">
      <cnode-aside1></cnode-aside1>
      <cnode-aside6></cnode-aside6>
      <cnode-aside2></cnode-aside2>
      <cnode-aside3></cnode-aside3>
      <cnode-aside4></cnode-aside4> 
      <cnode-aside5></cnode-aside5>

      <!--<router-view/>-->
    </div>

</template>

<script>
  import cnodeAside1 from '@/components/cnode/common/aside1'
  import cnodeAside6 from '@/components/cnode/common/aside6'
  import cnodeAside2 from '@/components/cnode/common/aside2'
  import cnodeAside3 from '@/components/cnode/common/aside3'
  import cnodeAside4 from '@/components/cnode/common/aside4'
  import cnodeAside5 from '@/components/cnode/common/aside5'
  export default {
    components: {
      cnodeAside1,
      cnodeAside6,
      cnodeAside2,
      cnodeAside3,
      cnodeAside4,
      cnodeAside5
    }
  }
</script>

<style scoped lang="scss">
.aside{
  width:290px;
  float: right;
}
</style>
