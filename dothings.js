var topicselected = [];
var purposeselected = [];

$('#1_abm').click(function () {
    $('#cardcontainer').hide()
    $('#test').show()
})

$('.gohome').click(function () {
    $('#cardcontainer').show()
    $('#test').hide()
})

$('#topicfilter').change(function () {
    topicselected = [];
    var choices = $(this).find("option:selected")
    $(choices).each(function () {
        topicselected.push($(this).text())
    })
    if (topicselected.length != 0){
        topicselected.forEach(element => $('#cardcontainer').find('.card .topic:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
    }
    if (topicselected.length == 0){
        $('.card').removeClass('d-none')
        if (purposeselected.length > 0){
        purposeselected.forEach(element => $('#cardcontainer').find('.card .purpose:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
    }
        else {
                $('.card').removeClass('d-none');

        }}
})

$('#purposefilter').change(function () {
    purposeselected = [];
    var choices = $(this).find("option:selected")
    $(choices).each(function () {
        purposeselected.push($(this).text())
    })
    if (purposeselected.length > 0){
    purposeselected.forEach(element => $('#cardcontainer').find('.card .purpose:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
    }
    if (purposeselected.length == 0){
        $('.card').removeClass('d-none')
        if (topicselected.length > 0){
            topicselected.forEach(element => $('#cardcontainer').find('.card .topic:not(:contains("' + element + '"))').parent().parent().addClass('d-none'))
        }
        else {
            $('.card').removeClass('d-none')
        }
    }
})


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
        $('#projname').text(dat2[0].title)
        $('#topdescription').html("<p style='font-size: 20px;'>" + dat2[0].description + "</p>")
        $('#firstcol').html("<b>Topic: </b>" + dat2[0].topic +
            "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Purpose: </b>" + dat2[0].purpose +
            "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Product: </b>" + dat2[0].product)
        $('#secondcol').html("<b>Difficulty: </b>" + dat2[0].difficulty +
            "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Open Source: </b>" + dat2[0].open +
            "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Interactive: </b>" + dat2[0].interactive)
        $('#thirdcol').html("<b>Map: </b>" + dat2[0].map +
            "<hr style='height:10px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Time: </b>" + dat2[0].time)
        $('#detail2').html("<b>Data: </b>" + dat2[0].data +
            "<hr style='height:15px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Tools: </b>" + dat2[0].tools +
            "<hr style='height:15px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Text: </b>" + dat2[0].text +
            "<hr style='height:15px; margin-top:0px; margin-bottom:0px; visibility:hidden;'/><b>Staff: </b>" + dat2[0].staff)
    }
});