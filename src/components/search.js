angular.module('video-player')

.component('search', {

  bindings: {
    result: '<',
  },

  controller: function(youTube) {
    this.debounced = _.debounce(youTube.search, 500);
    this.searchResults = (text) => {
      youTube.search(text, this.result);
    };

    this.searchEnter = (text) => {
      this.debounced(text, this.result);
    };
  },

  templateUrl: 'src/templates/search.html',
});
