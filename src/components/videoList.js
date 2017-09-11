// angular.module('video-player');

app.component('videoList', {

  binding: {
    'data-videos': '>',
  },

  templateUrl: 'src/templates/videoList.html',

  controller: function($scope, $window) {
    // debugger;
    // console.log('data videos are', $scope['data-videos']);
    // this.videos = $window.exampleVideoData;
    // this.currentVideo = this.videos[0];
  }
});
