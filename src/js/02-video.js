    import VimeoPlayer from "@vimeo/player";
    import throttle from "lodash.throttle";

    const iframeRef = document.querySelector('#vimeo-player');
    const player = new VimeoPlayer(iframeRef);
    
    player.on('timeupdate', throttle(function (event) {       
    localStorage.setItem("videoplayer-current-time", event.seconds)}, 1000));

    const time = localStorage.getItem("videoplayer-current-time")
    if (time) {
    player.setCurrentTime(time);
    };

    
  
