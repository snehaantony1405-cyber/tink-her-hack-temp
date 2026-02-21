export const playAlarm = () => {
    const audio = new Audio('/path/to/alarm-sound.mp3');
    audio.loop = true;
    audio.play();
};

export const stopAlarm = () => {
    const audio = new Audio('/path/to/alarm-sound.mp3');
    audio.pause();
    audio.currentTime = 0;
};