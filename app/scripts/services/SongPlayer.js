(function() {
    function SongPlayer($rootScope, Fixtures) {
         /**
         * @desc Factory object
         * @type {Object}
         */
         var SongPlayer = {};
         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
         SongPlayer.currentBuzzObject = null;

         /**
         *@function setSong
         *@desc Stops currently playing song and loads new audio file as SongPlayer.currentBuzzObject
         *@param {Object} song
         */
         var setSong = function(song) {
           if (SongPlayer.currentBuzzObject) {
             stopSong();
           }

           SongPlayer.currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['m4a','mp3'],
             preload: true
           });

           SongPlayer.currentBuzzObject.bind('timeupdate', function() {
               $rootScope.$apply(function() {
                   SongPlayer.currentTime = SongPlayer.currentBuzzObject.getTime();
               });
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
           return Fixtures.selectedAlbum.songs.indexOf(song);
         };

         /**
         *@function playSong
         *@desc Plays SongPlayer.currentBuzzObject and sets currentSong.playing to true
         */
         var playSong = function(song) {
           SongPlayer.currentBuzzObject.play();
           SongPlayer.currentSong.playing = true;
         };

         /**
         *@function stopSong
         *@desc Stops SongPlayer.currentBuzzObject and sets song.playing to null
         *@param {Object} song
         */
         var stopSong = function() {
           SongPlayer.currentBuzzObject.stop();
           SongPlayer.currentSong.playing = null;
         };

         /**
         * @desc Current song object
         * @type {Object}
         */
         SongPlayer.currentSong = null;

         /**
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
         SongPlayer.currentTime = null;

         /**
         * @desc Volume from 0 to 100
         * @type {Number}
         */
         SongPlayer.volume = 80;

         SongPlayer.setVolume = function(volume) {
           if (SongPlayer.currentBuzzObject) {
             SongPlayer.currentBuzzObject.setVolume(volume);
            }
         };

         /**
         *@function SongPlayer.play
         *@desc Called in the view when song item number is clicked.  Pauses
         *SongPlayer.currentBuzzObject, sets new SongPlayer.currentBuzzObject and plays it.
         *@param {Object} song
         */
         SongPlayer.play = function(song) {
           song = song || SongPlayer.currentSong;
           if (SongPlayer.currentSong !== song) {
             setSong(song);
             playSong(song);
           } else if (SongPlayer.currentSong === song) {
            if (SongPlayer.currentBuzzObject.isPaused()) {
              playSong(song);
            }
           }
         };

         /**
         *@function SongPlayer.pause
         *@desc Called in the view when pause button is clicked.  Pauses
         *SongPlayer.currentBuzzObject. Sets song.playing to false.
         *@param {Object} song
         */
         SongPlayer.pause = function(song) {
           song = song || SongPlayer.currentSong;
           SongPlayer.currentBuzzObject.pause();
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
             previousSongIndex = Fixtures.selectedAlbum.songs.length -1;
           }
           var previousSong = Fixtures.selectedAlbum.songs[previousSongIndex];
           SongPlayer.play(previousSong);
         };

         /**
         *@function SongPlayer.next
         *@desc When the next button is clicked on the player bar
         * the next song is played.
         */
         SongPlayer.next = function() {
           var nextSongIndex = getSongIndex(SongPlayer.currentSong) + 1;
           if (nextSongIndex > Fixtures.selectedAlbum.songs.length - 1) {
             nextSongIndex = 0;
           }
           var nextSong = Fixtures.selectedAlbum.songs[nextSongIndex];
           SongPlayer.play(nextSong);
         };

         SongPlayer.setCurrentTime = function(time) {
             if (SongPlayer.currentBuzzObject) {
                 SongPlayer.currentBuzzObject.setTime(time);
             }
         };

         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope','Fixtures', SongPlayer]);
})();
