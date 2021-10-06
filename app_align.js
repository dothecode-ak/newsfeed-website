const app_align_selector = document.querySelector('#align_app');
var fecth_li = app_align_selector.querySelectorAll('li');
var width = $(window).width();
if (width > 768) {
    // for (let a = 0; a < 6; a++) {
    //     console.log("1 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '154px');
    // }
    // for (let a = 6; a < 12; a++) {
    //     console.log("2 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '148px');
    // }
    // for (let a = 12; a < 18; a++) {
    //     console.log("3 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '140px');
    // }
    // for (let a = 18; a < 24; a++) {
    //     console.log("4 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '156px');
    // }
    // for (let a = 24; a < 30; a++) {
    //     console.log("5 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '150px');
    // }
    // for (let a = 30; a < 36; a++) {
    //     console.log("6 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '150px');
    // }
    // for (let a = 36; a < 42; a++) {
    //     console.log("7 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '150px');
    // }
    // for (let a = 42; a < 45; a++) {
    //     console.log("8 section")
    //     console.log(fecth_li[a].id);
    //     $('#' + fecth_li[a].id + '>.overDiv').css('height', '160px');
    // }
    // for (let a = 0; a < 45; a++) {
    //     $('#' + fecth_li[a].id + '>.overDiv').css({ 'height': '157px', 'margin-bottom': '0px' });
    // }


}
else if (width > 767 && width < 992) {
    $('#align_app').css('margin', '!important unset');
}