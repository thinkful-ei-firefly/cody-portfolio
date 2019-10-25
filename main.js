const handleSmoothScroll = () => {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault()

    const position = $($(this).attr('href')).offset().top

    $('body, html').animate({
      scrollTop: position
    })
  })
}

// const handleHoverSection = () => {
//   $('section').hover(
//     // function(){ $(this).css('background-color', 'red')},
//     function(){ console.log($(this))},
//     () => $(this).css('background-color', 'white')
//   )

// }

function runHandlers() {
  handleSmoothScroll()
  // handleHoverSection()
}

$(runHandlers())
