//Essentially just keeping a running average of the peaks
function bpm(peaks) {
	avg = 0.0
	for(i = 0; i < peak.length; i++){
		avg += peaks[i]
	}
	return avg/peak.length
}