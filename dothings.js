$('#1_abm').click(function () {
    $('#cardcontainer').hide()
    $('#test').show()
})

$('.gohome').click(function () {
    $('#cardcontainer').show()
    $('#test').hide()
})

$('#topicfilter a').click(function() {
    $('.card').removeClass('d-none');
    topicselect = ($(this).text())
    if (topicselect != 'All'){
        $('#cardcontainer').find('.card .card-text:not(:contains("'+topicselect+'"))').parent().parent().addClass('d-none');
    }
})

$.ajax({
    type: "GET",
    url: "projects.csv",
    dataType: "text",
    success: function (data) {
        dat2 = $.csv.toObjects(data)
        console.log(dat2)
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