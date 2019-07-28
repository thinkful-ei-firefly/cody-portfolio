
const handleSmoothScroll = () => {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    const position = $($(this).attr('href')).offset().top;

    $('body, html').animate({
      scrollTop: position
    });
  });
};


function runHandlers() {
  handleSmoothScroll();
}

$(runHandlers());
