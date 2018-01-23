---
title: 'Say Hi'
id: contact

form:
    name: contact-form
    fields:
        - name: name
          label:  
          placeholder: Enter your name
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: false

        - name: email
          label: Email
          placeholder: Enter your email address
          type: email
          validate:
            required: false

        - name: message
          label: Message
          placeholder: Your Message
          type: textarea
          validate:
            required: false

    buttons:
        - type: submit
          value: Submit

    process:
        - email:
            from: "{{ config.plugins.email.from }}"
            to:
              - "{{ config.plugins.email.from }}"
              - "{{ form.value.email }}"
            subject: "[Feedback] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your feedback!
        - redirect: '/'
---

---
