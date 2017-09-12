const app = angular.module('video-player');

app.component('app', {

  templateUrl: 'src/templates/app.html',

  controller: function(youTube) {
    this.videos = [];
    this.currentVideo = {};

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = (data) => {
      this.videos = data;
      this.currentVideo = data ? this.videos[0] : {};
    };

    // this.result = (string) => {
    //   console.log('Calling youTube...')
    //   youTube.search(string, this.searchResults);
    // };

    youTube.search('puppies', this.searchResults);
  },
});
