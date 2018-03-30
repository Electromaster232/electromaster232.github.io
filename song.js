function pickSong() {
    var song = ["https://www.youtube.com/embed/0yVWm6KIyMI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&iv_load_policy=3", "https://www.youtube.com/embed/SswdHwQu2wU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&iv_load_policy=3", "https://www.youtube.com/embed/kxopViU98Xo?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&iv_load_policy=3", "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&iv_load_policy=3", "https://www.youtube.com/embed/feA64wXhbjo?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&iv_load_policy=3", "https://www.youtube.com/embed/68ugkg9RePc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&iv_load_policy=3", "https://www.youtube.com/embed/tGcikUhQAG8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&iv_load_policy=3"];
    var random = Math.floor(Math.random() * (song.length - 1));
    document.getElementById("songURL").setAttribute("src", song[random]);
}
