// filter dropdown adapted from https://bbbootstrap.com/snippets/multiselect-dropdown-list-83601849
// filter action apapted from https://www.codeply.com/go/KvTSAFv2bv/bootstrap-filter-and-sort-cards-with-jquery 

var topicselected = [];
var purposeselected = [];
var whichproj

$('.card-link').click(function () {
    $('#homepage').hide()
    whichproj = $(this).attr("id")
    $('#test').show()
    updateprojpage(whichproj)
});

$('.gohome').click(function () {
    $('#homepage').show()
    $('#test').hide()
    $('#resources').hide()
});

$('.resources').click(function () {
    $('#homepage').hide()
    $('#test').hide()
    $('#resources').show()
});

function updateprojpage(whichproj) {
    var z
    for (var i = 0; i < dat2.length; i++) {
        if (dat2[i].selector == whichproj){
            z = i
        }
    } 
    $('#projname').text(dat2[z].title)
    $('#topdescription').html("<p style='font-size: 20px;'>" + dat2[z].description + "</p>")
    $('#firstcol').html("<b>Topic: </b>" + dat2[z].topic +
        "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Purpose: </b>" + dat2[z].purpose +
        "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Product: </b>" + dat2[z].product)
    $('#secondcol').html("<b>Difficulty: </b>" + dat2[z].difficulty +
        "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Open Source: </b>" + dat2[z].open +
        "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Interactive: </b>" + dat2[z].interactive)
    $('#thirdcol').html("<b>Includes Map: </b>" + dat2[z].map +
        "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Uses Time Variable: </b>" + dat2[z].time)
    $('#detail2').html("<b>Data: </b>" + dat2[z].data +
        "<hr style='height:15px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Tools: </b>" + dat2[z].tools +
        "<hr style='height:15px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Text: </b>" + dat2[z].text +
        "<hr style='height:15px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Staff: </b>" + dat2[z].staff)
    $('#documentation').attr('href',dat2[z].docurl)
    if (dat2[z].dmodal == 'yes'){
        $('#documentation').attr('data-toggle','modal')
    }
    if (dat2[z].dmodal == 'no'){
        $('#documentation').attr('data-toggle','')
    }
    $('#visitproj').attr('href',dat2[z].projecturl)
    if (dat2[z].pmodal == 'yes'){
        $('#visitproj').attr('data-toggle','modal')
    }
    if (dat2[z].pmodal == 'no'){
        $('#visitproj').attr('data-toggle','')
    }
    $('#carouselone').attr('src',dat2[z].pic1)
    $('#carouseltwo').attr('src',dat2[z].pic2)
    $('#carouselthree').attr('src',dat2[z].pic3)
};


$('#topicfilter').change(function () {
    topicselected = [];
    var choices = $(this).find("option:selected")
    $(choices).each(function () {
        topicselected.push($(this).text())
    })
    if (topicselected.length != 0) {
        $('.card').removeClass('d-none')
        topicselected.forEach(element => $('#cardcontainer').find('.card .topic:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
        purposeselected.forEach(element => $('#cardcontainer').find('.card .purpose:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))

    }
    if (topicselected.length == 0) {
        $('.card').removeClass('d-none')
        if (purposeselected.length > 0) {
            purposeselected.forEach(element => $('#cardcontainer').find('.card .purpose:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
        }
        else {
            $('.card').removeClass('d-none');
        }
    }
});

$('#purposefilter').change(function () {
    purposeselected = [];
    var choices = $(this).find("option:selected")
    $(choices).each(function () {
        purposeselected.push($(this).text())
    })
    if (purposeselected.length > 0) {
        $('.card').removeClass('d-none')
        purposeselected.forEach(element => $('#cardcontainer').find('.card .purpose:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
        topicselected.forEach(element => $('#cardcontainer').find('.card .topic:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
    }
    if (purposeselected.length == 0) {
        $('.card').removeClass('d-none')
        if (topicselected.length > 0) {
            topicselected.forEach(element => $('#cardcontainer').find('.card .topic:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
        }
        else {
            $('.card').removeClass('d-none')
        }
    }
});


$(document).ready(function () {

    var multipleCancelButton = new Choices('#topicfilter', {
        removeItemButton: true,
    });

    var multipleCancelButton2 = new Choices('#purposefilter', {
        removeItemButton: true,
    });

});


$.ajax({
    type: "GET",
    url: "projects.csv",
    dataType: "text",
    success: function (data) {
        dat2 = $.csv.toObjects(data)
    }
});