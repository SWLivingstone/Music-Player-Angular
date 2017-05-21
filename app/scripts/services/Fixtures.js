(function() {
  function Fixtures() {
    var Fixtures = {};

    var collection = {
      albumPicasso: {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtUrl: '/assets/images/album_covers/01.png',
        songs: [
            { title: 'Blue', duration: 161.7, audioUrl: '/assets/music/blue' },
            { title: 'Green', duration: 103.9, audioUrl: '/assets/music/green' },
            { title: 'Red', duration: 268.45, audioUrl: '/assets/music/red'  },
            { title: 'Pink', duration: 153.14, audioUrl: '/assets/music/pink'},
            { title: 'Magenta', duration: 374.22, audioUrl: '/assets/music/magenta'}
        ]
    },

      albumAwesomeWave: {
        title: 'An Awesome Wave',
        artist: 'Alt-J',
        label: 'Infectious',
        year: '2011',
        albumArtUrl: '/assets/images/album_covers/altJ.jpg',
        songs: [
            { title: 'Breezeblocks', duration: 228, audioUrl: '/assets/music/Breezeblocks' },
            { title: 'Dissolve Me', duration: 240, audioUrl: '/assets/music/Dissolve_Me' },
            { title: 'Fitzpleasure', duration: 220, audioUrl: '/assets/music/Fitzpleasure'},
            { title: 'Matilda', duration: 229, audioUrl: '/assets/music/Matilda' },
            { title: 'Tessellate', duration: 183, audioUrl: '/assets/music/Tessellate'}
        ]
    },

      albumLaLaLand: {
        title: 'LaLa Land',
        artist: 'Original Soundtrack',
        label: 'Interscope',
        year: '2016',
        albumArtUrl: '/assets/images/album_covers/La_La_Land_soundtrack.jpg',
        songs: [
          { title: 'Another Day of Sun', duration: 228, audioUrl: '/assets/music/Another_Day_of_Sun' },
          { title: 'Someone in the Crowd', duration: 260, audioUrl: '/assets/music/Someone_in_the_Crowd' },
          { title: 'City of Stars', duration: 111, audioUrl: '/assets/music/City_of_Stars'},
          { title: 'Audition', duration: 228, audioUrl: '/assets/music/Audition' },
          { title: 'A Lovely Night', duration: 237, audioUrl: '/assets/music/A_Lovely_Night' }
        ]
    }
  };


    Fixtures.getCollection = function () {
      var collectionArray = [];
      for (var album in collection) {
        collectionArray.push(collection[album]);
      }
      return collectionArray;
    };

    Fixtures.setAlbum = function (album) {
      Fixtures.selectedAlbum = album;
    };

    Fixtures.getAlbum = function () {
      return Fixtures.selectedAlbum;
    };

    return Fixtures;
  }

  angular
      .module('blocJams')
      .factory('Fixtures', Fixtures);
})();
