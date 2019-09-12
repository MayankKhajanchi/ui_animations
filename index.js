var closeButton = '';
$('.card').append('<div class="clear"><i class="fas fa-times"></i></div>');
var card1 = $('.card1');

$('.card .clear').click(function (event) {
  console.log(event.currentTarget.closest('.card'));
  TweenMax.to(event.currentTarget.closest('.card'), 1, { opacity: 0, y: -50, delay: .5, height: 0, display: 'none' });
})

// TweenMax.to(card1, 1, { opacity: 0, y: -50, delay: .5, height: 0 });
// TweenMax.from(card2, 1, { opacity: 0, x: 50 });
// TweenMax.from(card, 3, { opacity: 0, x: 20 });