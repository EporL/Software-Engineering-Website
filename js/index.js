/*信息通知*/
$(function () {
    Date.prototype.format = function(format){
        var o = {
            "M+" : this.getMonth()+1,
            "d+" : this.getDate(),
            "h+" : this.getHours(),
            "m+" : this.getMinutes(),
            "s+" : this.getSeconds(),
            "q+" : Math.floor((this.getMonth()+3)/3),
            "S" : this.getMilliseconds()
        }
        if(/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
            }
        }
        return format;
    }
    function time() {
        var mydate=new Date();
        var str=mydate.format("YYYY年MM月dd日 hh:mm:ss");
        var num=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var flag=mydate.getDay();
        str+=' ';
        str+=num[flag];
        return str;
    }
    var oTime=$('#time');
    var timer=setInterval(function () {
        var str=time();
        oTime.text(str);
    })
});
/*针对input的样式*/
$(function (){
    $('#inputSearch').focus(function () {
        $(this).addClass("focus");
        if($(this).val()==this.defaultValue)
        {
            $(this).val("");
        }
        $('#button-search').addClass('focus');
        $('#keywords').addClass('focus');
    }).blur(function () {
        $(this).removeClass('focus');
        if($(this).val()==this.defaultValue||$(this).val()=='')
        {
            $(this).val(this.defaultValue);
        }
        $('#button-search').removeClass('focus');
        $('#keywords').removeClass('focus');
    });
});
/* 超链接文字提示 */
$(function(){
    var x = 10;
    var y = 20;
    $("a.tooltip").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>";
        $("body").append(tooltip);
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            }).show("fast");
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function(e){
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            });
    });
});
/*轮播图*/
$(function(){
    var $timer;
    var $imgrolls = $("#jnImageroll div a");
    $imgrolls.css("opacity","0.7");
    var len  = $imgrolls.length;
    var index = 0;
    var adTimer = null;
    $imgrolls.mouseover(function(){
        index = $imgrolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
    $('#jnImageroll').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            showImg(index);
            index++;
            if(index==len){index=0;}
        },2000);
    }).trigger("mouseleave");
})
function showImg(index){
    var $rollobj = $("#jnImageroll");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href",newhref)
        .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
        .eq(index).addClass("chos").css("opacity","1");
};
/*点击事件*/
$(function () {
    var flag=true;
   $('#touxiang').click(function () {
       if(flag){
       $('.icon-icon8').css('color','#ff6700');
       $('#tx_fix').css('display','block');
       flag=false;
       }
       else {
           $('.icon-icon8').css('color','#BABEBF');
           $('#tx_fix').css('display','none');
           flag=true;
       }
   });
});
/*文章管理中的点击事件*/
$(function () {
    var flag=true;
   $('#add').click(function () {
       if(flag)
       {
           $('#btn').removeClass('icon-iconjia').addClass('icon-sub');
           $('.add_content').css('display','block');
           flag=false;
       }
       else
       {
           $('#btn-').removeClass('icon-sub').addClass('icon-iconjia');
           $('.add_content').css('display','none');
           flag=true;
       }
   });
   $('.add_content li').click(function () {
      $(this).addClass('selected').siblings().removeClass('selected');
      var t=$(this).index();
      var s='.div'+t;
      $(s).addClass('selected').siblings().removeClass('selected');
   });
   $('#button-search').click(function () {
      $('#search_result') .addClass('selected').siblings().removeClass('selected');
   });
});


