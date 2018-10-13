var app = window.app || {};
var home;

app.home = {
  settings: {},

  init: function() {
    home = this;
    this.initContactMe();
    this.introBackground();
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

  introBackground: function() {
    var canvas = document.getElementById('intro-bg');
    var context = canvas.getContext('2d');
    var width = canvas.width / 4;
    var ratio = window.devicePixelRatio || 1;
    
    canvas.style.width = canvas.width +'px';
    canvas.style.height = canvas.height +'px';
    canvas.width *= ratio;
    canvas.height *= ratio;
    
    context.setTransform(ratio,0,0,ratio,0,0);

    context.strokeStyle = '#D2B48C';
    context.rect(50,50,width,width);
    context.stroke();
  
    

  }
}

$(document).ready(function() {
  app.home.init();
})

$(window).on('load', function() {
  app.home.pageLoaded();
})