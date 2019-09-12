var card1 = $('.card1');
// var card2 = $('.card2');
// var card = $('.card');

$('.card').click(function (event) {
  TweenMax.to(event.currentTarget, 1, { opacity: 0, y: -50, delay: .5, height: 0, display: 'none' });
})

// TweenMax.to(card1, 1, { opacity: 0, y: -50, delay: .5, height: 0 });
// TweenMax.from(card2, 1, { opacity: 0, x: 50 });
// TweenMax.from(card, 3, { opacity: 0, x: 20 });