(function() {
    function LandingCtrl() {
      this.heroTitle = "Another music player!";
    }

    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();
