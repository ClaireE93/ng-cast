const app = angular.module('video-player');

app.component('app', {

  bindings: {
    videoData: '=',
  },

  templateUrl: 'src/templates/app.html',


  controller: function($scope, $window) {
    $scope.videoData = $window.exampleVideoData;
    const selectVideo = () => {

    };

    const searchResults = () => {

    };

    console.log('controller data', $window);
    this.selectVideo = selectVideo;
    this.searchResults = searchResults;
    this.videos = $scope.videoData;
    this.currentVideo = this.videos[0];
  }
});
