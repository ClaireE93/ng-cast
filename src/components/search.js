angular.module('video-player')

.component('search', {

  bindings: {
    // searchResults: '<',
  },

  templateUrl: 'src/templates/search.html',

  // controller: function(youTube) {
  //   this.result = (value) => {
  //     console.log('searching')
  //     youTube.search(value, this.searchResults);
  //   };
  // },
});
