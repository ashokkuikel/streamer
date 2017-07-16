function loadvideo() {
		// var channel = document.getElementById('hbohd').value;
		var channel = "hbohd";
		var upcase_channel = channel.toUpperCase();
				if(Hls.isSupported()) {
						var video = document.getElementById('video');
						var hls = new Hls();
						hls.loadSource('http://103.213.31.46/iptvlivestream/net'+ upcase_channel + '1500.stream/playlist.m3u8');
						hls.attachMedia(video);
						hls.on(Hls.Events.MANIFEST_PARSED,function() {
								video.play();
						});
				}
}
