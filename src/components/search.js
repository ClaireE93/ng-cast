angular.module('video-player')

.component('search', {

  bindings: {
    result: '<',
    // service: '<'
  },

  controller: function(youTube) {
    this.searchResults = (text) => {
      youTube.search(text, this.result);
    };

    this.searchEnter = (text) => {
      if (event.keyCode === 13) {
        this.searchResults(text);
      }
    };
  },

  templateUrl: 'src/templates/search.html',
});
