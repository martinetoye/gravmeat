---
title: 'Say Hi'
id: contact
form:
    name: contact-form
    action: '/home'
    template: form-messages
    refresh-prevention: true
    fields:
            - name: name
              label: Name
              placeholder: Enter your name
              autofocus: on
              autocomplete: on
              type: text
              validate:
                required: true

            - name: email
              label: email
              placeholder: Enter your email address
              autofocus: on
              autocomplete: on
              type: text
              validate:
                required: true

            - name: message
              label: message
              placeholder: Enter your message
              autofocus: on
              autocomplete: on
              type: Textarea
              validate:
                required: true

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
