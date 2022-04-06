$(document).ready(function () {
    $("#leadHide").click(function () {
        // $("#lead").hide(2000);
        // $("#lead").toggle(2000, "linear");
        // $("#lead").fadeToggle("fast"); fadeIn是出现
        $("#lead").fadeTo("slow", 0.5);
    });
    $("#ani").click(function () {
        $(".lead").animate({ fontSize: "3em" }, "slow");
    });
    $("#txt").click(function () {
        // alert("txt:" + $(".lead").text() + "\n" + "html:" + $("#lead").html());
        // $("#lead").text("改变文本")
        // $("#lead").html("<i>改变文本</i>")
        alert($(".lead").attr("class"));
    });
    $("#addDiv").click(function () {
        $("#boxout").append("<div class='col-md-6' id='box'>追加</div>");
    });

    function checkEmail(value) {
        return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value);
    }

    function checkPhone(value) {
        return /^1[34578][0-9]{9}/i.test(value);
    }



    $("#email1").change(function () {      //邮箱验证
        $("#fb").removeClass("glyphicon-ok").removeClass("glyphicon-remove");
        $('#checkEmail').removeClass('has-success').removeClass('has-error');
        // let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (checkEmail($("#email1").val())) {
            $("#fb").toggleClass("glyphicon-ok");
            $('#checkEmail').addClass('has-success');
        } else {
            $("#fb").toggleClass("glyphicon-remove");
            $('#checkEmail').addClass('has-error');
        }
    });

    $("#pho1").change(function () {      //电话验证
        $("#pfb").removeClass("glyphicon-ok").removeClass("glyphicon-remove");
        $('#checkPho').removeClass('has-success').removeClass('has-error');
        // let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (checkPhone($("#pho1").val())) {
            $("#pfb").toggleClass("glyphicon-ok");
            $('#checkPho').addClass('has-success');
        } else {
            $("#pfb").toggleClass("glyphicon-remove");
            $('#checkPho').addClass('has-error');
        }
    });
});