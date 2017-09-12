const app = angular.module('video-player');

app.component('app', {

  templateUrl: 'src/templates/app.html',

  controller: function($window, youTube) {

    this.selectVideo = (video) => {
      console.log('clicked on', video);
      this.currentVideo = video;
    };
    this.searchResults = (data) => {
      debugger;
      this.videos = data.items;
      this.currentVideo = data.items ? this.videos[0] : {};
    };

    youTube.search('puppies', this.searchResults);
  },
});
