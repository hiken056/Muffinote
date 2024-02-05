interface Player {
    currentSong : string;
    currentSongLenght: number;
    playNext: () => void;
    playPrevios: () => void;
}

const player: Player = {
    currentSong: "Beliver",
    currentSongLenght: 35_000,
    playNext: () => console.log("Playing next"),
    playPrevios: () => console.log("Playing previos")
}

type song = {
    name: string;
    lenght: number
};

class AudioPlayer implements Player {
    currentSong: string;
    currentSongLenght: number;

    constructor(songInfo: song) {
        this.currentSong =songInfo.name;
        this.currentSongLenght = songInfo.lenght;
    }

    playNext = () => console.log("Playing next");
    playPrevios = () => console.log("Playing previos");

    stopAudio = () => {}
}

const audioPlayer = new AudioPlayer ({name: 'shape of you', lenght: 40_000});
const anotherAudioPlayer = new AudioPlayer ({name: 'closer', lenght: 50_000});


console.log(audioPlayer.currentSong, audioPlayer.currentSongLenght);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLenght);
