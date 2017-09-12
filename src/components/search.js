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
  },

  templateUrl: 'src/templates/search.html',
});
