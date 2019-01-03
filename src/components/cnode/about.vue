<template>
    <div class="box">
        <div class="left">
            <!--面包屑-->
            <ol class="breadcrumb">
                <router-link to="/">主页</router-link> /
                <router-link to="/getstart" class="active">新手入门</router-link>
            </ol>
            <div class="main">
                <h3>关于</h3><hr>
                <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>社区目前由 <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p>
                <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>
                <h3>移动客户端</h3>
                <p>客户端由 <a href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。</p>
                <p>源码地址： <a href="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</a>。</p>
                <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
                <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>

                <div class="link">
                    <h3>友情链接</h3><hr>
                    <div class="linkss">
                        <a href="https://www.huoban.com/" target="_blank">
                            <img src="//dn-cnode.qbox.me/Ftmw28ed0I_rir7YYz3c_jVPkCGx">
                        </a>
                        <a href="http://100offer.com/" target="_blank">
                                <img src="//dn-cnode.qbox.me/FmU1Ik57z6wrl9JDTNdcYBTDetFq">
                        </a>
                        <a href="https://www.teambition.com/" target="_blank">
                            <img src="//dn-cnode.qbox.me/FkMR_SqpCp4Q0eDIaWrQlALiXdmP">
                        </a>
                        <a href="http://yunzhihui.com/" target="_blank">
                            <img src="//dn-cnode.qbox.me/Fq2cV_14IFHwelZ-6jey42Z0-eOR">
                        </a>
                        <a href="http://www.jiguang.cn/" target="_blank">
                            <img src="//dn-cnode.qbox.me/FijGJbij9GObh5AXw-Vyu5LGn08a">
                        </a>
                        <a href="http://segmentfault.com/" target="_blank">
                            <img src="//o4j806krb.qnssl.com/public/images/temp/sf.png">
                        </a>
                        <a href="http://ionichina.com/" target="_blank">
                            <img src="//o4j806krb.qnssl.com/public/images/temp/ionichina.png">
                        </a>
                    </div>
                </div>
                <div class="foot">
                    <h3>LOGO</h3><hr>
                    <p>
                        白底： <a href="/public/images/cnodejs.svg" target="_blank">/public/images/cnodejs.svg</a>
                    </p>
                    <p>
                        黑底： <a href="/public/images/cnodejs_light.svg" target="_blank">/public/images/cnodejs_light.svg</a>
                    </p>
                </div>
            </div> <!--mian-->
        </div><!--left end-->
        
      
      
      <!--侧边栏-->
     <cnode-aside></cnode-aside>
    </div>
</template>

<script>
    import cnodeAside from '@/components/cnode/aside'
export default {
    components: {
          cnodeAside
        }
}
</script>

<style scoped lang="scss">
.box{
    width:100%;
    .left{
        width:78%;
        height:100%;
        background:#fff;
        float:left;
        .main{
            padding:0 20px;
            // padding-bottom:200px;
        }
        .link{
            width:100%;
            .linkss{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                a{
                    width:25%;
                    img{
                        width:100%;
                    }
                }
            }     
    }
 
    }
    
    
}
</style>
