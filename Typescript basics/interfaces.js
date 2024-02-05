var player = {
    currentSong: "Beliver",
    currentSongLenght: 35000,
    playNext: function () { return console.log("Playing next"); },
    playPrevios: function () { return console.log("Playing previos"); }
};
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(songInfo) {
        this.playNext = function () { return console.log("Playing next"); };
        this.playPrevios = function () { return console.log("Playing previos"); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLenght = songInfo.lenght;
    }
    return AudioPlayer;
}());
var audioPlayer = new AudioPlayer({ name: 'shape of you', lenght: 40000 });
var anotherAudioPlayer = new AudioPlayer({ name: 'closer', lenght: 50000 });
console.log(audioPlayer.currentSong, audioPlayer.currentSongLenght);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLenght);
