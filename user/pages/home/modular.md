---
form:
    name: contact-form
    action: '/home'
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

title: Home
content:
    items: '@self.modular'
    order:
        custom:
            - _banner
            - _about
            - _contact
body_classes: modular
---
