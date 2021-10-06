
//seraching logic
$("select.platform, select.industry").change(ChangeTheApp);
$('#inputForm').on('keyup', ChangeTheApp);

function ChangeTheApp() {
    var platform = $('select.platform').val();
    var industry = $('select.industry').val();
    var search = $("#myInput").val();
    $('.usecase-list >.usecase-holder >.row')
        .find('.col-md-2')
        .hide()
        .filter(function (v) {
            // $('#notavailable_new').css('display', 'block !important');
            var okPlatform = true;
            var okIndustry = true;
            var okSearch = true;
            if (platform !== "all") {
                okPlatform = $(this).attr('data-platform') === platform;
                $('#notavailable_new').hide();
                $('#loadMore_new').hide();
            }
            if (industry !== "all") {
                okIndustry = $(this).attr('data-industry') === industry;
                console.log(okIndustry);


                if (okIndustry === true) {
                    $('#loadMore_new').hide();
                    $('#notavailable_new').hide();
                }
                if (okIndustry == false) {
                    $('#loadMore_new').hide();
                    $('#notavailable_new').show();
                    console.log("XXXXXXXXXXXXX")
                }
            }
            if (platform === "all" || industry === "all") {
                $('#loadMore').hide();
                $('#notavailable').hide();
            }

            // else {
            //     $('#notavailable_new').show();
            // }

            if (search !== '') {
                okSearch = $(this).text().toLowerCase().indexOf(search) > -1;
                console.log("YYYYYYYYYYYYY")
            }
            return okPlatform && okIndustry && okSearch;
        }).fadeIn('fast');
}

