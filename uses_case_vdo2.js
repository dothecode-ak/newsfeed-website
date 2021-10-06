
var user_cases_data = [


    {
        app_type: "eCommerceInternet electronics cosmetics fashion ott retail newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/PrimeB.mp4",
        app_url: "https://newsfeedsmartapp.com/amazonprimeday/",
        app_title: "Amazon Prime Day Game",
        desc_text: "Dive into the world of offers. Collect offers and win exciting vouchers from Amazon!"
    },
    {
        app_type: "eCommerceInternet electronics financialservices newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/PhonePeB.mp4",
        app_url: "https://www.phonepe.newsfeedsmartapp.com/",
        app_title: "Play the PhonePe Gold Rush Game",
        desc_text: "Collect all the falling gold coins & bricks & set a high score!"
    },

    {
        app_type: "automobile transport newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/Castrol.mp4",
        app_url: "http://bit.ly/3xpuUp8",
        app_title: "Castrol Stress Test Game",
        desc_text: "Collect Castrol Cans for a longer engine life."
    },
    {
        app_type: "tourism hospitality newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/ClubMahindra.mp4",
        app_url: "https://www.newsfeedsmartapp.com/club/index.php?utm_source=Facebook",
        app_title: "Club Mahindra Discover India Game",
        desc_text: "Take the quiz and find out how well you have discovered India."
    },
    {
        app_type: "sport entertainment eCommerceInternet electronics newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/ManchesterCity.mp4",
        app_url: "https://www.newsfeedsmartapp.com/Manchester/en/index.php?UID=0",
        app_title: "Manchester City",
        desc_text: "Engrave your name in History"
    },
    {
        app_type: "sport entertainment eCommerceInternet electronics newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        app_url: "https://www.newsfeedsmartapp.com/MideaHomeChallenge/EN/",
        vdo_url:"assets/videos/usecases/2/MideaHomeChallenge.mp4",
        app_title: "Midea Home Challenge",
        desc_text: "Take the Interactive Video Quiz to win prizes!"
    },
    {
        app_type: "retail eCommerceInternet newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/HomeCenter.mp4",
        app_url: "https://www.newsfeedsmartapp.com/HomeCenter/InfinitePossibilities",
        app_title: "Home Centre Infinite Possibilities",
        desc_text: "Play this Modular Furniture Tile Matching game and win vouchers."
    },
    {
        app_type: "foodBeverage foodRestaurants fmcg newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/Philadelphia.mp4",
        app_url: "https://www.newsfeedsmartapp.com/philadelphiacreamcheese/web/index.php?source=",
        app_title: "Philadelphia Feta & Cucumber",
        desc_text: "Discover your favourite recipe by answering a few personality type questions."
    },
    {
        app_type: "fmcg foodBeverage newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/CookieShots.mp4",
        app_url: "https://bit.ly/3tfgea1",
        app_title: "Tap to hit Cookie Shots",
        desc_text: "Score high runs to enter the leaderboard and stand a chance to win exciting prizes."
    },
    {
        app_type: "fmcg retail newsfeed",
        img_url: "assets/distImg/useCases/Mobile_FrameV2.png",
        vdo_url:"assets/videos/usecases/2/CadburyThankYou.mp4",
        app_url: "https://cadburysaythankyou.com/",
        app_title: "Cadbury #SayThankYou",
        desc_text: "Create Cadbury #SayThank You cards for those who stand behind you!"
    },
    

]

var count_app = user_cases_data.length
var filterArr = [],
    arr1 = [];
var source_search = [];
for (var l = 0; l < count_app; l++) {
    $('.usecase-holder>.row').
        append('<li class="col-md-2"><div class="vdo_banner"><a href="" target="_blank"><img src=""><video  poster="assets/images/loading.gif" autoplay muted playsinline loop><source src=""></video></a></div><div class="overDiv"><div class="titleHead"></div><div class="overtext"></div></div><div class="tryTheApp"><a href="" target="_blank">TRY IT</a></div></li>');
}

//add the app type
$('.usecase-holder>.row>li').each(function (i, obj) {
    $(obj).addClass(user_cases_data[i].app_type);
});

//add the image
$('.usecase-holder>.row>li>.vdo_banner>a>img').each(function (m, obj) {
    // $(obj).attr('src', user_cases_data[m].img_url);
    // $(obj).css('background-image', 'url(' + user_cases_data[m].img_url + ')');
    $(obj).attr('src', user_cases_data[m].img_url);
});
//add the URL link
$('.usecase-holder>.row>li>.vdo_banner>a>video>source').each(function (m, obj) {
    $(obj).attr('src', user_cases_data[m].vdo_url);
});
//add the app url
$('.usecase-holder>.row>li>.vdo_banner>a').each(function (j, obj) {
    $(obj).attr('href', user_cases_data[j].app_url);
});
//try the app link
$('.usecase-holder>.row>li>.tryTheApp>a').each(function (j, obj) {
    $(obj).attr('href', user_cases_data[j].app_url);
});
//add the app id
$('.usecase-holder>.row>li').each(function (n, obj) {
    n = n + 1;
    $(obj).attr('id', 'app' + n);

    filterArr.push('app' + n);
    arr1.push(document.getElementById("app" + n).className.split(",").toString());
});

// //add the app class
$('.usecase-holder>.row>li').each(function (n, obj) {
    $(obj).addClass('app');
});

// add the hover text
$('.usecase-holder>.row>li>.overDiv>.overtext').each(function (text, obj) {
    $(obj).text(user_cases_data[text].desc_text);
    source_search.push(user_cases_data[text].desc_text)
});

$('.usecase-holder>.row>li>.overDiv>.titleHead').each(function (titletext, obj) {
    $(obj).text(user_cases_data[titletext].app_title);
    // source_search.push(user_cases_data[text].desc_text)
});
//add title
// console.log(source_search);