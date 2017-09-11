const app = angular.module('video-player');

app.component('app', {

  templateUrl: 'src/templates/app.html',

  binding: {
    videos: '>',
  },

  controller: function($scope, $window) {

    this.selectVideo = () => {

    };
    this.searchResults = () => {

    };
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];
  },
});

MainController = () => {
  this.videos = window.exampleVideoData;
};
