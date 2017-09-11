const app = angular.module('video-player');

app.component('app', {

  templateUrl: 'src/templates/app.html',

  // bindings: {
  //   videos: '<',
  // },

  controller: function($scope, $window) {

    this.selectVideo = () => {

    };
    this.searchResults = () => {

    };
    this.videos = $window.exampleVideoData;
    // console.log('videos are ', this.videos);
    this.currentVideo = this.videos[0];
  },
});
