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
    $('.cntct-me').attr({
      'href':'mailto:hello@davidallenby.com',
      'title': 'Get in touch'
    })
  },

  pageLoaded: function() {
    setTimeout(function() {
      $('.spinner').fadeOut('slow', function() {
        $('.panel-loading').fadeOut('slow');
      })
    }, 1000);
  }
}

$(document).ready(function() {
  app.home.init();
})

window.onload = function() {
  app.home.pageLoaded();
}