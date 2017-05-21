(function() {
    function CollectionCtrl(Fixtures) {
      this.albums = Fixtures.getCollection();
      this.fixtures = Fixtures;
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
