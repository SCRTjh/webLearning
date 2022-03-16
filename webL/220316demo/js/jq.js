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
});