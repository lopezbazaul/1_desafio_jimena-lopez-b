
// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

// smooth scrollTop


// modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
