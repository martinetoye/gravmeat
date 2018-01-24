---
title: 'Say Hi'
id: contact
cache_enable: false

form:
    template: form-messages
    refresh_prevention: true
    name: contact-form
    fields:
            - name: name
              label: Name
              placeholder: Enter your name
              autofocus: on
              autocomplete: on
              type: text
              validate:
                required: false

    buttons:
          submit:
                  - type: submit
                    value: Submit

    process:
          message: 'Thanks'
---

<div id="form-result"></div>

<script>
$(document).ready(function(){

    var form = $('#contact-form');
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
