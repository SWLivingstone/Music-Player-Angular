(function() {
    function SongPlayer() {
         /**
         * @desc Factory object
         * @type {Object}
         */
         var SongPlayer = {};
         /**
         * @desc Current song object
         * @type {Object}
         */
         var currentSong = null;
         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;

         /**
         *@function setSong
         *@desc Stops currently playing song and loads new audio file as currentBuzzObject
         *@param {Object} song
         */
         var setSong = function(song) {
           if (currentBuzzObject) {
             currentBuzzObject.stop();
             currentSong.playing = null;
           }

           currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['m4a'],
             preload: true
           });

           currentSong = song;
         };

         /**
         *@function playSong
         *@desc Plays currentBuzzObject and set song.playing to true
         *@param {Object} song
         */
         var playSong = function(song) {
           currentBuzzObject.play();
           song.playing = true;
         };

         /**
         *@function SongPlayer.play
         *@desc Called in the view when song item number is clicked.  Pauses
         *currentBuzzObject, sets new currentBuzzObject and plays it.
         *@param {Object} song
         */
         SongPlayer.play = function(song) {
           if (currentSong !== song) {
             setSong(song);
             playSong(song);
           } else if (currentSong === song) {
            if (currentBuzzObject.isPaused()) {
              playSong(song);
            }
           }
         };

         /**
         *@function SongPlayer.pause
         *@desc Called in the view when pause button is clicked.  Pauses
         *currentBuzzObject. Sets song.playing to false.
         *@param {Object} song
         */
         SongPlayer.pause = function(song) {
           currentBuzzObject.pause();
           song.playing = false;
         };

         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
