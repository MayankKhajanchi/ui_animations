$('.card').append('<div class="clear"><i class="fas fa-times"></i></div>');
$('.card').append('<div class="more"><i class="fas fa-ellipsis-v"></i></div>');
$('.card').append(`<ul class="list-group list-group-flush">
<li class="list-group pin d-flex justify-content-center align-items-center"><i class="fas fa-thumbtack"></i></li>
<li class="list-group-item dismiss d-flex justify-content-center align-items-center">Dismiss</li>

</ul>`);

$('.card .clear').click(function (event) {
  const dismissed = event.currentTarget.closest('.card');
  TweenMax.to(dismissed, 1, { opacity: 0, y: -500, delay: .5, height: 0, display: 'none' });
})
$('.card .dismiss').click(function (event) {
  const more = event.currentTarget.closest('.card').children[0];
  TweenMax.to(more, 1, { opacity: 1, x: 0 });
  const options = event.currentTarget.closest('.card').children[3];
  TweenMax.to(options, 1, { opacity: 0, display: 'none' });
})
$('.card .more').click(function (event) {
  const more = event.currentTarget.closest('.card').children[0];
  TweenMax.to(more, 1, { opacity: 0, x: 20 });
  const options = event.currentTarget.closest('.card').children[3];
  TweenMax.fromTo(options, 1, { x: 20 }, { opacity: 1, x: -1, display: 'block' });
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
