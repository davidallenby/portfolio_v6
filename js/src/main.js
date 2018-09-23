var app = window.app || {};
var home;

app.home = {
  settings: {},

  init: function() {
    home = this;
    this.initContactMe();
  },

  // Spam prevention
  initContactMe: function() {
    $('.contact-me').attr({
      'href':'mailto:hello@davidallenby.com',
      'title': 'Get in touch'
    })
  },

  pageLoaded: function() {
    $('.spinner').fadeOut('slow', function() {
      $('.panel-loading').fadeOut('slow');
    })
  },
}

$(document).ready(function() {
  app.home.init();
})

$(window).on('load', function() {
  app.home.pageLoaded();
})