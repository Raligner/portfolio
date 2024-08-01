var o = {
	init: function(){
		this.diagram();	
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('chart', 1100, 1100),
			rad = 180;

		r.circle(1000, 1000, 128).attr({ stroke: 'none', fill: '#0b282900' });

		var title = r.text(550, 550, 'SKILLS').attr({
			font: '3vw DIN Neuzeit Grotesk',
			fill: '#b92522'
            
		}).toFront();

		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 550 + rad * Math.cos(b),
				sy = 550 - rad * Math.sin(b),
				x = 550 + rad * Math.cos(a),
				y = 550 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}

		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val();

			rad += 60;	
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 52 });
		});
	}
}
$(function(){ o.init(); });