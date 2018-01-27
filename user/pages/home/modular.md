---
title: Home
content:
    items: '@self.modular'
    order:
        custom:
            - _banner
            - _about
            - _blogrecent
            - _portfoliorecent
            - _contact
body_classes: modular
---
<script>
$(document).ready(function(){

    var form = $('#contact-home');
    form.submit(function(e) {
        // prevent form submission
        e.preventDefault();

        // submit the form via Ajax
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                // Inject the result in the HTML
                $('#form-result').html(result);
            }
        });
    });
});
</script>
