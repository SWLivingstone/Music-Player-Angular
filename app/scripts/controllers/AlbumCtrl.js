(function() {
    function AlbumCtrl(Fixtures, SongPlayer) {
      this.albumData = Fixtures.selectedAlbum;
      this.songPlayer = SongPlayer;
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
