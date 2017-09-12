const app = angular.module('video-player');

app.component('app', {

  templateUrl: 'src/templates/app.html',

  // bindings: {
  //   videos: '<',
  // },

  controller: function($window, youTube) {

    this.selectVideo = (video) => {
      console.log('clicked on', video);
      this.currentVideo = video;
    };
    this.searchResults = (data) => {
      this.videos = data;
      this.currentVideo = data ? this.videos[0] : {};
    };

    youTube.search('puppies', this.searchResults);
  },
});
