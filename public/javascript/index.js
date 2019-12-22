$(document).ready(function () {
    $("#button-login").click(function () {
        var body = {
            email: $("#email").val(),
            password: $("#password").val()
        }
        $.ajax({
            url: "/login",
            type: "POST",
            data: body,
            dataType: "json"
        }).then((data) => {
            if (data.messenger === '200') {
                location.reload();
            } else {
                $(".attr").attr("class", "alert alert-danger").text(data);
            }

        })

    });
});