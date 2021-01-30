function escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode(string);
    pre.appendChild(text);
    return pre.innerHTML;
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '1292281667451957',
        xfbml: true,
        version: 'v2.7'
    });
    jQuery.get("assets/js/page_token", function (data) {
        FB.api('/722407097846107', {
            fields: 'posts',
            access_token: data
        }, function (response) {
            var postsArray = response["posts"]["data"]
            var count = 0;
            console.log(postsArray.length);
            for (i = 0; i < postsArray.length; i++) {
                var msg = response["posts"]["data"][count]["message"];
                console.log(msg);
                if (msg != undefined) {
                    //sorry for cancerous hardcoded html
                    document.getElementById("news").innerHTML += `
                <section class="wrapper style4 container special">
                    <div class="row" style="white-space:pre-wrap;overflow-wrap: break-word;">
                        <div class="4u important" style="padding-right:20px;border-right: 1px solid #ccc; ">
                            <img src="/images/logo.jpg" width=70%>
                            <br>
                            <h1>Stuyvesant Freshman Caucus</h1>
                        </div>
                        <div class="7u" style="margin-left:20px; border-left: 1px solid #ccc; text-align:left">` + escapeHTML(msg) + "<br><hr><br><br></div>";
                    count++;
                }
            }
        });
        return data;
    })
};


(function (d, s, id) {
    var js;
    var fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/all.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));