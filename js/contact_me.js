$(function() {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            console.log('submit error');
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour

            var q1 = $("select#q1").val();
            var q2 = $("select#q2").val();

            console.log('q1=' + q1);
            // console.log('group='+group_num);
            $.ajax({
                url: "mail/contact_me.php",
                type: "POST",
                data: {
                    q1: q1,
                    q2: q2

                },
                cache: false,
                success: function() {
                    $('p').hide();
                    $('form').hide();
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success')
                        .append("<strong>ありがとうございました. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    $('#gohome').html("<a>HOME</a>");
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry it seems that my mail server is not responding. Please try again later!");                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus( ()=> {
    $('#success').html('');
});

/*gohome*/
$('#gohome').on('click', function() {
  // alert("ホームページに移動します");
  location.replace('http://www.narabikke.com/');

});
