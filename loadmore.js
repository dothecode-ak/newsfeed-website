var app_li = $(".row>.app").size();
console.log(app_li);
x = 12;
$('.row>.app:lt(' + x + ')').show();

$('#loadMore').click(function () {
    $('#scroll').show();
    x = (x + 12 <= app_li) ? x + 12 : app_li;
    $('.row>.app:lt(' + x + ')').show();
    if (x == 45) {
        $('#loadMore').hide();
    }
});