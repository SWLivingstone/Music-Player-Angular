(function() {
    function AlbumCtrl() {
      this.albumData = angular.copy(albumLaLaLand);
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
