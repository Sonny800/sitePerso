var scrollex = require('jquery.scrollex');
var charts = require('chart.js');


// CHART
window.onload = function() {
  var ctxf = document.getElementById("myChartFront");
  var ctxb = document.getElementById("myChartBack");
  var ctxa = document.getElementById("myChartAutres");
  // ctxf.height = "400vh";

  // FRONT CHART
  var myBarChart = new Chart(ctxf, {
    type: 'pie',
    data: {
      labels: ["HTML", "CSS/SASS", "Bootstrap", "JavaScript", "jQuery", "Ajax"],
      datasets: [{
        label: "FRONT-END",
        backgroundColor: [
          'rgba(228, 77, 38, 0.8)',
          'rgba(38, 77, 228, 0.8)',
          'rgba(155, 48, 242, 0.8)',
          'rgba(240, 219, 79, 0.8)',
          'rgba(0, 96, 165, 0.8)',
          'rgba(46, 229, 43, 0.8)',

        ],
        data: [
          85,
          80,
          45,
          30,
          30,
          25
        ]

      }]
    },
    options: {
      // legend: {
      //   display: false,
      // },

      title: {
          fontSize: 25,
           display: true,
           text: 'Compétences Front-End'
       },

      // aspectRatio: 1,
      responsive: true,
      maintainAspectRatio: false,

      // scales: {
      //   xAxes: [{
      //     ticks: {
      //       beginAtZero: true,
      //       suggestedMax: 100,
      //
      //     }
      //   }]
      // } // scales
    } // options
  }); // barchart


  // BACK CHART
  var myBarChart = new Chart(ctxb, {
    type: 'pie',

    data: {
      labels: ["MySQL", "PHP", "WordPress"],
      datasets: [{

        backgroundColor: [
          'rgba(0, 96, 165, 0.8)',
          'rgba(115, 119, 178, 0.8)',
          'rgba(255, 193, 22, 0.8)',
        ],
        data: [
          40,
          40,
          70
        ]
      }]
    },

    options: {
      // legend: {
      //   display: false,
      // },
      title: {
          fontSize: 25,
          display: true,
           text: 'Compétences Back-End'
       },
      // aspectRatio: 1,
      responsive: true,
      maintainAspectRatio: false,
      // scales: {
      //   xAxes: [{
      //     ticks: {
      //       beginAtZero: true,
      //       suggestedMax: 100,
      //     }
      //   }]
      // }
    }
  });

  // AUTRE CHART
  var myBarChart = new Chart(ctxa, {
    type: 'pie',
    data: {
      labels: ["GIT/Github", "Composer", "Brunch"],
      datasets: [{
        label: "AUTRES",
        backgroundColor: [
          'rgba(213, 77, 49, 0.8)',
          'rgba(108,69, 41, 0.8)',
          'rgba(61, 133, 72, 0.8)',


        ],
        data: [
          15,
          15,
          15,
        ]

      }]
    },
    options: {
      title: {
           display: true,
           fontSize: 25,
           text: 'Autres compétences'
       },
      aspectRatio: 1,
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

Chart.defaults.global.defaultFontFamily = 'Comfortaa';
// Chart.defaults.global.defaultFontSize = 10;

// SI la taille de l'écran est inférieur à 450px de large
if (document.documentElement.clientWidth < 450) {
  // La font size par défaut des éléments du graphique sera de 8px.
  Chart.defaults.global.defaultFontSize = 10;
} else {
  Chart.defaults.global.defaultFontSize = 19;

}
//// END OF CHART ///////////////////////


var app = {

  init: function() {

    // Panel
    var panels = $('.contact__item');
    panels.on('mouseenter', app.panelSize).on('mouseleave', app.panelDeleteSize);
    panels.on('transitionend', app.showText);

    // menu
    var bars = $('.fa-bars').on('click', app.showMenu);
    var closemenu = $('.fa-times').on('click', app.closeMenu);

    // Scroll
    var actionBtn = $('a[href*="#"]');
    actionBtn.on('click', app.smoothScroll);



    // SCROLLEX
    var whoiam = $('.main-whoiam').scrollex({
      mode: 'middle',
      enter: function() {
        $(this).addClass('is-fadeIn-right');
        $('.whoiam__informations').addClass('is-fadeIn-down');
      }

    });

    // IMG ReSIZE
    var imgElts = $('.portfolio__item__img');
    imgElts.on('click', app.resize);

    var skills = $('.skills').scrollex({
      mode: 'middle',
      enter: function() {
        $(this).addClass('is-fadeIn-downPhone');
        $(this).addClass('is-fadeIn-down');
      }
    })
  },

  showMenu: function(evt) {
    evt.preventDefault();
    var body = $('body');
    body.toggleClass('menu-is-open');
  },

  closeMenu: function(evt) {
    evt.preventDefault();
    var body = $('body');
    body.removeClass('menu-is-open');
  },

  smoothScroll: function(evt) {
    evt.preventDefault();
    if('.menu-is-open'){
      $('body').removeClass('menu-is-open');
    }

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
  },

  panelSize: function(evt) {
    $(this).addClass('is-open');
  },

  panelDeleteSize: function(evt) {
    $(this).removeClass('is-open');
  },

  resize: function(evt) {
    console.log($(this).prop('naturalWidth'));
    console.log($(this).prop('naturalHeight'));
  }
}
$(app.init);
