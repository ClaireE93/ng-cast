angular.module('video-player')

.component('app', {

  templateUrl: 'src/templates/app.html',

  videos: window.exampleVideoData,

  // currentVideo: window.exampleVideoData[0],

  controller: function() {
    const selectVideo = () => {

    };

    const searchResults = () => {

    };

    this.selectVideo = selectVideo;
    this.searchResults = searchResults;
  }
});


// document.addEventListener('DOMContentLoaded', function () {
//   angular.bootstrap(document, ['video-player']);
// });
