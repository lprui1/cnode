<template>
  <div class="box">
    <!-- <p>CNode: Node.js专业中文社区</p>
    <p>您可以登录或注册，也可以</p>
    <button type="button" class="btn btn-primary">通过GitHub登录</button> -->
    <div class="panel">
      <div class="header">
        <span class="col_fade">个人信息</span>
      </div>
      <div class="inner">
        <div class="user_card">
        <div>
          <a class="user_avatar" href="/loginname">
            <img src="https://avatars1.githubusercontent.com/u/43158608?v=4&amp;s=120">
          </a>
          <span class="user_name"><a class="dark" href="/user">lprui1</a></span>
          <div class="board clearfix">
            <div class="floor">
              <span class="big">积分: 40 </span>
            </div>
          </div>
          <div class="space clearfix"></div>
          <span class="signature">这家伙很懒，什么个性签名都没有留下。</span>
        </div>
      </div>


    </div>
    
  </div>
  </div>
</template>

<script>
    export default {
        // name: "in"
    }
    $(document).ready(function () {
    $('.follow_btn').click(function () {
      var $me = $(this);
      var action = $me.attr('action');
      var params = {
        follow_id: '5b97781537b3005a0b0e6de1',
        _csrf: 'x3NR3feM-q6Cpr_QwzNCTMwnYDbZLmq1R4pE'
      };
      $.post('/user/' + action, params, function (data) {
        if (data.status === 'success') {
          var $btns = $('.follow_btn');
          if (action === 'follow') {
            $btns.html('取消关注');
            $btns.attr('action', 'un_follow');
          } else {
            $btns.html('加入关注');
            $btns.attr('action', 'follow');
          }
          $btns.toggleClass('btn-success');
        }
      }, 'json');
    });
  });
</script>

<style scoped lang="scss">
  .box{
    width:100%;
    // padding:10px;
    /* height:115.2px; */
    background:#fff;
    margin-bottom: 13px;
    img{
      width:48px;
      height:48px;
    }
    .panel .header {
      padding: 10px;
      background-color: #f6f6f6;
    }
    .inner{
      padding:10px;
    }
    .board{
      padding-top:10px;
    }
  }
</style>
