playingBeat="pene";
function playBeat(id){
	beat = document.getElementById(id);
	beat.volume = 0.2;
	if(playingBeat === "pene"){
		playingBeat = beat;
	}
	else{
		playingBeat.pause();
		playingBeat.currentTime = 0;
		playingBeat = beat;
	}
	if(beat.paused){
		beat.currentTime = 0;
		beat.play();
	}
	else{
		beat.pause();
		beat.currentTime = 0;
	}
}
function playSample(id){
	sample = document.getElementById(id);
	sample.currentTime = 0;
	sample.play();
}