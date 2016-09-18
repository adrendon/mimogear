/* ================
// Harmonica
//   http://codepen.io/mimoduo/pen/epZaMq
// ============= */

var h,
Harmonica = {

  settings: {
    container: document.querySelector('.harmonica'),
    headings: document.querySelectorAll('.harmonica-header'),
    articles: document.querySelectorAll('.harmonica-content')
  },

  init: function(options) {

    h = this.settings;

    for (var key in options) {
      if(options.hasOwnProperty(key)) {
        h[key] = options[key];
      }
    }

    h.headings.forEach(function(heading) {
      heading.addEventListener('click', function() {
        Harmonica.toggleNote(event);
      });
    });

    h.headings[0].click();

  },

  clearClasses: function() {

    h.headings.forEach(function(heading) {
      heading.classList.remove('active');
    });

  },

  assignClasses: function(note) {

    note.classList.add('active');

  },

  toggleNote: function(event) {

    Harmonica.clearClasses();
    Harmonica.assignClasses(event.currentTarget);

  }

};