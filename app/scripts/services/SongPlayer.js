(function() {
    function SongPlayer(Fixtures) {
         /**
         * @desc Current album
         * @type {Object}
         */
         var currentAlbum = Fixtures.getAlbum();
         /**
         * @desc Factory object
         * @type {Object}
         */
         var SongPlayer = {};
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
             stopSong();
           }

           currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['m4a'],
             preload: true
           });

           SongPlayer.currentSong = song;
         };

         /**
         *@function getSongIndex
         *@desc returns the index of a song in the songs Object
         *@param {Object} song
         *@returns {number} indexOf song in songs
         */
         var getSongIndex = function(song) {
           return currentAlbum.songs.indexOf(song);
         };

         /**
         *@function playSong
         *@desc Plays currentBuzzObject and set song.playing to true
         *@param {Object} song
         */
         var playSong = function(song) {
           currentBuzzObject.play();
           SongPlayer.currentSong.playing = true;
         };

         /**
         *@function stopSong
         *@desc Stops currentBuzzObject and sets song.playing to null
         *@param {Object} song
         */
         var stopSong = function() {
           currentBuzzObject.stop();
           SongPlayer.currentSong.playing = null;
         };

         /**
         * @desc Current song object
         * @type {Object}
         */
         SongPlayer.currentSong = null;

         /**
         *@function SongPlayer.play
         *@desc Called in the view when song item number is clicked.  Pauses
         *currentBuzzObject, sets new currentBuzzObject and plays it.
         *@param {Object} song
         */
         SongPlayer.play = function(song) {
           song = song || SongPlayer.currentSong;
           if (SongPlayer.currentSong !== song) {
             setSong(song);
             playSong(song);
           } else if (SongPlayer.currentSong === song) {
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
           song = song || SongPlayer.currentSong;
           currentBuzzObject.pause();
           song.playing = false;
         };

         /**
         *@function SongPlayer.previous
         *@desc When the previous button is clicked on the player bar
         * the previous song is played.
         */
         SongPlayer.previous = function() {
           var previousSongIndex = getSongIndex(SongPlayer.currentSong) - 1;
           if (previousSongIndex < 0) {
             previousSongIndex = currentAlbum.songs.length -1;
           }
           var previousSong = currentAlbum.songs[previousSongIndex];
           SongPlayer.play(previousSong);
         };

         /**
         *@function SongPlayer.next
         *@desc When the next button is clicked on the player bar
         * the next song is played.
         */
         SongPlayer.next = function() {
           var nextSongIndex = getSongIndex(SongPlayer.currentSong) + 1;
           if (nextSongIndex > currentAlbum.songs.length - 1) {
             nextSongIndex = 0;
           }
           var nextSong = currentAlbum.songs[nextSongIndex];
           SongPlayer.play(nextSong);
         };

         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
