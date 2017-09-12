angular.module('video-player')
.service('youTube', function($http) {
  this.search = (string = '', cb = (e) => (e)) => {
    const obj = {};
    obj.q = string;
    obj.key = window.YOUTUBE_API_KEY;
    obj.maxResults = '5';
    obj.videoEmbeddable = true;
    obj.part = 'snippet';
    obj.type = 'video';

    let url = 'https://www.googleapis.com/youtube/v3/search?';

    for (let key in obj) {
      url += `${key}=${obj[key]}&`;
    }
    url = url.slice(0, url.length - 1);

    $http.get(url).then((results) => {
      cb(results.data.items);
    }, (results) => {
      console.log('FAILED', results);
    });

  };

  // this.debounced = _.debounce(this.search, 500);



});
