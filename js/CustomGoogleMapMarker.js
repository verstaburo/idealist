function CustomMarker(latlng, map, args) {
	this.latlng = latlng;
	this.args = args;
	this.setMap(map);
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {

	var self = this;

	var div = this.div;
  var addClass, count;

  if(self.args.addclass) {addClass = "marker_" + self.args.addclass;} else {addClass = ''}
  if(self.args.eventcount) {count = self.args.eventcount;} else {count = '';}
	if (!div) {

		div = this.div = document.createElement('div');

		div.className = 'mapmarker';

		div.style.position = 'absolute';
		div.style.width = '1px';
		div.style.height = '1px';
        div.innerHTML = '<span class="marker ' + addClass + '">'+ count +'</span>';


		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}

        if (typeof(self.args.image) !== 'undefined') {
			div.getElementsByTagName("span").innerHTML = self.args.image;
		}


		google.maps.event.addDomListener(div, "click", function(event) {
			//alert('You clicked on a custom marker!');
			google.maps.event.trigger(self, "click");
		});


		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);

        $(".marker__content").click(function(){
	    	$(this).parents(".marker").addClass("active");
	    });

	    $(".marker__close").click(function(event){
	    	$(this).parents(".marker").removeClass("active");
            event.stopPropagation();
	    });
	}

	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

	if (point) {
		div.style.left = (point.x) + 'px';
		div.style.top = (point.y) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;
};
