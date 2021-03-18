$(function () {
    // console.log(window.location.search.split("=")[1]);
    let letter_id = window.location.search.split("=")[1];

    template.defaults.imports.checkName = function (name) {
        return name[0];
    }

    initLetter();

    function initLetter() {
        $.ajax({
            url: '/index/article',
            type: 'get',
            data: {
                id: letter_id
            },
            dataType: 'json',
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                let htmlStr = template("article", {
                    data: res.data,
                    prev: res.data.prev,
                    next: res.data.next
                });
                $(".left_con").prepend(htmlStr);
            }
        })
    }

    $("body").on("click", ".btn-prev", function () {

        letter_id = $(this).attr("data-id");
        initLetter();
    })

    $("body").on("click", ".btn-next", function () {

        letter_id = $(this).attr("data-id");
        initLetter();
    })


    initLatestComment();

    function initLatestComment() {
        $.ajax({
            url: '/index/latest_comment',
            type: 'get',
            data: {},
            dataType: 'json',
            success: (res) => {
                console.log(res);
                if (res.code != 200) {
                    return alert(res.msg);
                }
                // console.log('222');
                let htmlStr = template("comment_detail_list", {
                    list: res.data
                });
                $(".comment_list_con").html(htmlStr);
            }
        })
    }

    $("body").on("submit", ".comment_form", function (e) {
        e.preventDefault();
        // console.log('ok');
        $.ajax({
            url: '/index/post_comment',
            type: 'post',
            data: {
                author: $('.comment_name').val(),
                content: $('.comment_input').val(),
                articleId: letter_id
            },
            dataType: 'json',
            success: (res) => {
                console.log(res);
                if (res.code != 201) {
                    return alert(res.msg);
                }
                console.log('okok');
                $(this)[0].reset();
                initLatestComment();
                // window.location.reload();
            }
        })
    })
})