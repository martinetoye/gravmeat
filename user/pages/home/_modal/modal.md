---
title: modal
form:
    name: hire-me
    action: /home
    template: form-messages
    refresh_prevention: true
    fields:
          columns:
              type: columns
              fields:
                  column0:
                      type: column
                      fields:
                          firstname:
                              label: Name
                              placeholder: Enter Your Name
                              autocomplete: on
                              type: text
                              validate:
                                  required: true
                                  pattern: '[A-Za-z]{3,}'

                          email:
                              label: Email
                              placeholder: Enter Email
                              autocomplete: on
                              type: email
                              validate:
                                  required: true

                  column1:
                      type: column
                      fields:
                          phone:
                              label: phone
                              placeholder: Enter Phone Number
                              autocomplete: on
                              type: phone
                              rows: 4
                              validate:
                                  required: true

          message:
              label: Message
              placeholder: Enter Your message
              autocomplete: false
              type: textarea

    buttons:
        - type: submit
          value: Send
          classes: btn btn__blue

    process:
        - email:
            from: "{{ config.plugins.email.from }}"
            to: "{{ form.value.email }}"
            subject: "Hire me Form Filled Out"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: hire-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
            content_type: 'text/plain'
        - message: Thank you for getting in touch!
        - reset: true
---
<script>
$(document).ready(function(){
    $('#hire-form-result').hide();
    var form = $('#hire-me');
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
                $('#hire-form-result').show();
                $('#hire-form-result').html(result);
                form.hide();
                $('.modal').delay(100000).toggleClass('is-visible');
            }
        });
    });
});
</script>
