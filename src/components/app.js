const app = angular.module('video-player');

app.component('app', {

  templateUrl: 'src/templates/app.html',

  controller: function($window, youTube) {

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (data) => {
      this.videos = data.items;
      this.currentVideo = data.items ? this.videos[0] : {};
    };

    this.videos = [];
    this.currentVideo = {};
    youTube.search('puppies', this.searchResults);
  },
});
