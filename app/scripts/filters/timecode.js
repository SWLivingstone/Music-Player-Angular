(function (){
  function timecode() {
    return function(seconds) {
      seconds = Number.parseFloat(seconds);

      if (Number.isNaN(seconds)) {
          return '-:--';
      }

      output = buzz.toTimer(seconds);

      return output;
    };
  }

  angular
      .module('blocJams')
      .filter('timecode', timecode);
})();
