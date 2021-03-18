$(function () {
    initSearch();

    function initSearch() {
        $.ajax({
            url: '/index/search',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                console.log(res);
            }
        })
    }


    initCategory();

    function initCategory() {
        $.ajax({
            url: '/index/category',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }

                let htmlStr = template("category", {
                    list: res.data
                });
                $(".level_two").html(htmlStr);
            }
        })
    }

    initCategoryL();

    function initCategoryL() {
        $.ajax({
            url: '/index/category',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                // console.log('222');
                let htmlStr = template("category", {
                    list: res.data
                });
                $(".left_menu").html(htmlStr);
            }
        })
    }

    initHotpic();

    function initHotpic() {
        $.ajax({
            url: '/index/hotpic',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                // console.log('222');
                let htmlStr = template("hotpic", {
                    list: res.data
                });
                $(".focus_list").html(htmlStr);
            }
        })
    }

    initRank();

    function initRank() {
        $.ajax({
            url: '/index/rank',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                // console.log('222');
                let htmlStr = template("hotrank_list", {
                    list: res.data
                });
                $(".hotrank_list").html(htmlStr);
            }
        })
    }

    initLatest();

    function initLatest() {
        $.ajax({
            url: '/index/latest',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                // console.log('222');
                let htmlStr = template("common_news", {
                    list: res.data
                });
                $(".common_news").html(htmlStr);
            }
        })
    }

    // template.defaults.imports.commentData = function (date) {
    //     // console.log(date);
    //     let oldDate = new Date(date.date);
    //     console.log(oldDate.toLocaleString());
    //     let nowDate = new Date();
    //     // let delay = parseInt(nowDate - oldDate);
    //     console.log(nowDate.toLocaleString());
    // }

    template.defaults.imports.commentName = function (name) {
        return name[0];
    }

    initLatestComment();

    function initLatestComment() {
        $.ajax({
            url: '/index/latest_comment',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                // console.log('222');
                let htmlStr = template("latest_comment", {
                    list: res.data
                });
                $(".comment_list").html(htmlStr);
            }
        })
    }

    initAttention();

    function initAttention() {
        $.ajax({
            url: '/index/attention',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                // console.log('222');
                let htmlStr = template("attention", {
                    list: res.data
                });
                $(".guanzhu_list").html(htmlStr);
            }
        })
    }

    $(".search_btn").on("click", function () {
        // console.log($(this).val().trim());
        let words = $(".search_txt").val().trim();

        window.location.href = `list.html?key=` + words;
        // console.log(words);
    })

})