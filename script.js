import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))

//$('.toast').toast(option)

$('toast d-flex align-items-center').toast('show')