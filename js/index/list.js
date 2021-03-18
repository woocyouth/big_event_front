$(function () {
    let words = decodeURI(window.location.search.split("=")[1]);
    //encodeURI 与之对应 相互转码 解决中文传值乱码问题
    // console.log(decodeURI(window.location.search));
    initList();

    function initList() {
        $.ajax({
            url: '/index/search',
            type: 'get',
            data: {
                key: words
            },
            dataType: 'json',
            success: (res) => {
                console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                let htmlStr = template("list", {
                    list: res.data.data
                });
                $(".left_con").html(htmlStr);
            }
        })
    }
})