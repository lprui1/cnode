<template>
    <div class="box">
        <div class="header">
            <span class="col_fade">友情社区</span>
        </div>
        <ol class="friendship-community">
            <li>
            <a href="https://ruby-china.org/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
            </a>
            </li>
            <div class="sep10"></div>
            <li>
            <a href="http://golangtc.com/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
            </a>
            </li>
            <div class="sep10"></div>
            <li>
            <a href="http://phphub.org/" target="_blank">
                <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
            </a>
            </li>
            <div class="sep10"></div>
            <li>
            <a href="https://testerhome.com/" target="_blank">
                <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
            </a>
            </li>
        </ol>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .box{
        width:100%;
        background: #fff;
        margin-bottom:13px;
        .header{
            padding:10px;
            color:#51585c;
            background:#f6f6f6;
        }
        ol{
            padding:10px;
            li{
                list-style:none;
                padding:5px;
                img{
                    width:150px;
                    height:auto;
                    // border:1px solid red;
                }
            }
        }
    }
</style>
