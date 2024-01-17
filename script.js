const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



     (() => {
          'use strict'

          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          const forms = document.querySelectorAll('.needs-validation')
          Array.from(forms).forEach(form => {
               form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                         event.preventDefault()
                         event.stopPropagation()
                    }

                    form.classList.add('was-validated')
               }, false)
          })
     })()