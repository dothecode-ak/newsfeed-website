//dropdown script
var platformArr = ['all', 'newsfeed', 'swipeupgames'],
    platformFilter = ['newsfeed,swipeupgames', 'newsfeed', 'swipeupgames'];

//indusry list array
var industryArr = ['all', 'alcohol', 'automobile', 'aeronautics', 'automotive', 'cosmetics', 'eCommerceInternet', 'telecommunication', 'education', 'electronics', 'fashion', 'financialservices', 'fmcg', 'foodRestaurants', 'foodBeverage', 'healthcare', 'hospitality', 'insurance', 'manufacturing', 'entertainment', 'personalcare', 'publishing', 'realestate', 'retail', 'sport', 'technology', 'tourism', 'transport', 'others', 'ott'],
    industryFilter = ['alcohol,automobile,aeronautics,automotive,cosmetics,eCommerceInternet,telecommunication,education,electronics,fashion,financialservices,fmcg,foodRestaurants,foodBeverage,healthcare,hospitality,insurance,manufacturing,entertainment,personalcare,publishing,realestate,retail,sport,technology,hospitality,tourism,transport,others,ott', 'alcohol', 'automobile', 'aeronautics', 'automotive', 'cosmetics', 'eCommerceInternet', 'telecommunication', 'education', 'electronics', 'fashion', 'financialservices', 'fmcg', 'foodRestaurants', 'foodBeverage', 'healthcare', 'hospitality', 'insurance', 'manufacturing', 'entertainment', 'personalcare', 'publishing', 'realestate', 'retail', 'sport', 'technology', 'tourism', 'transport', 'others', 'ott']

var platformValue = "",
    industryValue = "";
// blank array list
var ansArr = [],
    ansArr2 = [],
    filtArr = [],
    filtArr2 = [];
var ans1 = "",
    ans2 = "";
var count = 0,
    count2 = 0;


//platform change event
$('#platform').on('change', function () {
    platformValue = $(this).find(":selected").val();
    checkApp();
});

// industry change event
$('#industry').on('change', function () {
    industryValue = $(this).find(":selected").val();
    checkApp();

});



function checkApp() {

    ansArr.length = 0;
    ansArr2.length = 0;
    filtArr.length = 0;
    filtArr2.length = 0;

    //check platform event
    if (platformValue != "") {
        for (var df = 0; df < platformArr.length; df++) {
            if (platformValue == platformArr[df]) {
                ans1 = platformFilter[df];
            }
        }
        // console.log(ans1);
        if (ans1 != "") {
            if (ans1.split(",").length > 1) {
                console.log("if")
                for (var d = 0; d < arr1.length; d++) {
                    for (var f = 0; f < ans1.split(",").length; f++) {
                        if (arr1[d].includes(ans1.split(",")[f])) {
                            count++;
                            ansArr.push(arr1[d]);
                            filtArr.push(filterArr[d]);
                        }
                    }
                }
            } else {

                for (var d = 0; d < arr1.length; d++) {
                    if (arr1[d].includes(ans1)) {
                        //console.log("uses caesss",ans1)
                        count++;
                        ansArr.push(arr1[d]);
                        filtArr.push(filterArr[d]);
                    }
                }
            }

            // console.log('Test' + ansArr);
        }
    }

    //change event industry
    if (industryValue != "") {
        if (platformValue == "") {
            addPlatformAll()
        }
        // if (industryValue == "all") {
        //     addPlatformAll();
        //     console.log("dl0ejf9rkeofp");
        // }
        for (var df = 0; df < industryArr.length; df++) {
            if (industryValue == industryArr[df]) {
                ans2 = industryFilter[df];
                // console.log(platformValue, industryValue,)
            }
        }
        if (ans2 != "") {
            if (ans2.split(",").length > 1) {
                // console.log(platformValue, industryValue, ansArr)
                if (platformValue != "" && industryValue != "") {
                    for (var d = 0; d < ansArr.length; d++) {
                        for (var f = 0; f < ans2.split(",").length; f++) {
                            if (ansArr[d].includes(ans2.split(",")[f])) {
                                count++;
                                ansArr2.push(ansArr[d]);
                                filtArr2.push(filtArr[d]);
                            }
                        }
                    }
                } else {
                    for (var d = 0; d < arr1.length; d++) {
                        for (var f = 0; f < ans2.split(",").length; f++) {
                            if (arr1[d].includes(ans2.split(",")[f])) {
                                count++;
                                ansArr2.push(arr1[d]);
                                filtArr2.push(filterArr[d]);
                            }
                        }
                    }
                }
            } else {
                for (var d = 0; d < ansArr.length; d++) {
                    if (ansArr[d].includes(ans2)) {
                        count2++;
                        ansArr2.push(ansArr[d]);
                        filtArr2.push(filtArr[d]);
                    }
                }
            }
        }
    }

    this.finalArr = [];
    this.finalArrVal = [];
    if (platformValue != "" && industryValue == "") {
        finalArr = filtArr;
        finalArrVal = ansArr;
        console.log("XXXXXXXXXXXXXXXXXXX")
    }
    else if (platformValue == "" && industryValue != "") {
        finalArr = filtArr2;
        finalArrVal = ansArr2;
        console.log("YYYYYYYYYYYYYYYYY");
    }
    else if (platformValue != "" && industryValue != "") {
        finalArr = filtArr2;
        finalArrVal = ansArr2;
        console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZ');
    }

    // console.log(finalArr);
    $('.app').hide();
    $('#loadMore').hide();
    // check the filter list for showing in the each and every div
    // console.log(this.finalArr);
    var uniqueNames = [];
    $.each(finalArr, function (i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });

    console.log(uniqueNames.length);
    if (uniqueNames.length == 0) {
        $('#notavailable').show();
    } else {
        $('#notavailable').hide();
        for (var f = 0; f < uniqueNames.length; f++) {
            $('#' + uniqueNames[f] + '').show();

        }
    }


}

function addPlatformAll() {
    platformValue = "all";
    for (var df = 0; df < platformArr.length; df++) {
        if (platformValue == platformArr[df]) {
            ans1 = platformFilter[df];
        }
    }
    if (ans1.split(",").length > 1) {
        console.log("if")
        for (var d = 0; d < arr1.length; d++) {
            for (var f = 0; f < ans1.split(",").length; f++) {
                if (arr1[d].includes(ans1.split(",")[f])) {
                    count++;
                    ansArr.push(arr1[d]);
                    filtArr.push(filterArr[d]);
                }
            }
        }
    }
}

// input search script
var data = [];
data = source_search;
// console.log(data);
const searchBar = document.forms['search_app'].querySelector('input');

// console.log(searchBar, 'YYYYYYYYYYYYYyy')
searchBar.addEventListener('keyup', function (e) {
    const term = e.target.value.toLocaleLowerCase();
    const filters = document.getElementsByClassName('overtext');
    // const titleHead = document.getElementsByClassName('titleHead');
    // const filters = filters1;
    // console.log('XXX', filters);
    var hasResults = false;
    Array.from(filters).forEach(function (landingApp) {
        const title = landingApp.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            landingApp.parentElement.parentElement.style.display = 'block';
            // landingApp.style.backgroundColor = 'red';
            hasResults = true;


        } else {
            landingApp.parentElement.parentElement.style.display = 'none';

        }
    });
    notavailable.style.display = hasResults ? 'none' : 'block';
    loadMore.style.display = 'none';
});


//json data 

// $('#inputForm').keyup(function () {
//     var searchField = $(this).val();
//     if (searchField === '') {
//         $('#applist').html('');
//         return;
//     }

//     var regex = new RegExp(searchField, "i");
//     var output = '<div class="row">';

//     $.each(data, function (key, val) {
//         if ((val.title.search(regex) != -1)) {
//             output += '<div">';
//             output += '<ul><li>' + val.title + '</li></ul>'

//         }
//     });
//     output += '</div>';
//     $('#applist').html(output);
// });

