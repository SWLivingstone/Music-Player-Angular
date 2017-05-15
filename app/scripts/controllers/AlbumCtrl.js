(function() {
    function AlbumCtrl() {
      this.albumData = albumLaLaLand;
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
