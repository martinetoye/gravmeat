---
title: Say Hi
cache_enable: false

form:
    name: contact
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
                              label: name
                              placeholder: Enter Your Name
                              autocomplete: on
                              type: text
                              validate:
                                  required: true
                                  pattern: '[A-Za-z]{3,}'

                          email:
                              label: email
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

                          subject:
                              label: subject
                              placeholder: Subject
                              autocomplete: false
                              type: text
          message:
              label: message
              placeholder: Enter Your message
              autocomplete: false
              type: textarea

    buttons:
        - type: submit
          value: Submit
          classes: center-button

    process:
        - email:
            subject: "[Site Contact Form] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for getting in touch!
        - reset: true
---


<script>
$(document).ready(function(){

    var form = $('#contact');
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
