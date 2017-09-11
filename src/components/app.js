const app = angular.module('video-player');

app.component('app', {

  templateUrl: 'src/templates/app.html',

  // bindings: {
  //   videos: '<',
  // },

  controller: function($scope, $window) {

    this.selectVideo = (video) => {
      console.log('clicked on', video);
      this.currentVideo = video;
    };
    this.searchResults = () => {

    };
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];
  },
});
