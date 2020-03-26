var app = window.app || {};
var home;

app.home = {
  settings: {},

  init: function() {
    home = this;
    this.initContactMe();
    this.scrollToLink();
  },

  /**
   * Spam prevention. Overrides click event on "email me" links and fires mailto
   * Prevents bots/spammers from seeing my email address.
   */
  initContactMe: function() {
    const mailto = 'mailto:hello@davidallenby.com';
    // On Click
    $(document).on('click', '.cntct-me', function(e) {
      e.preventDefault();
      window.location.href = mailto;
    });
    // On Hover
    $(document).on('mouseenter', '.cntct-me', function(e) {
      e.target.href = mailto;
    });
  },

  /**
   * Fade out spinner when page resources have loaded
   */
  pageLoaded: function() {
    setTimeout(function() {
      $('.spinner').fadeOut('slow', function() {
        $('.panel-loading').fadeOut('slow');
      })
    }, 1000);
  },

  /**
   * Fade in content on scroll.
   */
  fadeInContent: function() {
    var triggerPoint = 
      $(window).scrollTop() + $(window).innerHeight();

    $('.fade-in-section').each(function() {
      var contentTop = $(this).offset().top;

      if (triggerPoint >= contentTop) $(this).addClass('is-visible');
    });
  },

  scrollToLink: function() {
    $(document).on('click', '.scroll-to', function(e) {
      e.preventDefault();
      var contentId = $(this).attr('href');

      $('html, body').animate({
        'scrollTop': $(contentId).offset().top
      })
    })
  }
}

$(document).ready(function() {
  app.home.init();
})

window.onload = function() {
  app.home.pageLoaded();
  app.home.fadeInContent();
}

$(window).scroll(function() {
  app.home.fadeInContent();
})