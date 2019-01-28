var app = window.app || {};
var home;

app.home = {
  settings: {},

  init: function() {
    home = this;
    this.initContactMe();
    this.canvas();
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

  canvas: function() {
    var canvas = document.getElementById('intro-bg');
    var ratio = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    var context = canvas.getContext('2d');

    // Update canvas for Retina Displays
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    context.scale(ratio,ratio);

    var squareSize = canvas.height / 6;
    var x = 175;
    var y = 200;
    var move = 1;

    function drawSquare() {
      context.beginPath();
      context.strokeStyle = '#D2B48C';
      context.lineWidth = 1;
      context.rect(x,y,squareSize,squareSize);
      context.stroke();
      context.closePath();
    }

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawSquare();

      
      if(y + move > rect.height - squareSize || y + move < 0) {
        move = -move;
      }
      if(x + move > rect.width - squareSize || x + move < 0) {
        move = -move;
      }

      x += move;
      y += move;
    }
    
    setInterval(draw,10)
  }
}

$(document).ready(function() {
  app.home.init();
})

window.onload = function() {
  app.home.pageLoaded();
}