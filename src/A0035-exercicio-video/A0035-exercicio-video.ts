interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
    highVolButton: HTMLButtonElement;
    lowVolButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
    playToggle(): void;
    stop(): void;
    startEvents(): void;
    highVolume(): void;
    lowVolume(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;
    private highVolButton: HTMLButtonElement;
    private lowVolButton: HTMLButtonElement;

    constructor(videoPlayerElements: VideoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
        this.highVolButton = videoPlayerElements.highVolButton;
        this.lowVolButton = videoPlayerElements.lowVolButton;
    }

    startEvents(): void {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });

        this.stopButton.addEventListener('click', () => {
            this.stop();
        });

        this.highVolButton.addEventListener('click', () => {
            this.highVolume();
        });

        this.lowVolButton.addEventListener('click', () => {
            this.lowVolume();
        });
    }

    playToggle(): void {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        } else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }

    stop(): void {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }

    highVolume() {
        this.videoPlayer.volume = Math.min(this.videoPlayer.volume + 0.1, 1);
    }

    lowVolume() {
        this.videoPlayer.volume = Math.max(this.videoPlayer.volume - 0.1, 0);
    }
}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video') as HTMLVideoElement,
    playButton: document.querySelector('.play') as HTMLButtonElement,
    stopButton: document.querySelector('.stop') as HTMLButtonElement,
    highVolButton: document.querySelector('.highVol') as HTMLButtonElement,
    lowVolButton: document.querySelector('.lowVol') as HTMLButtonElement,
});

videoPlayer.startEvents();
