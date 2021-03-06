define(function(){
	var getImage = function(src){
		var img = new Image();
		img.src = src;
		return img
	};
	return {
		archer : {
			shape : {
				image : getImage('images/unit/hero/Archer/action/attack/0.png'),
				sourceX : 0,
				sourceY : 0,
				sourceWidth : 81,
				sourceHeight : 99,
				destX : 0,
				destY : 0,
				destWidth : 81,
				destHeight : 99
			},size : {
				width : 30,
				height : 65,
				shiftX : 55,
				shiftY : 38
			}
		},arrow : {
			shape : {
				image : getImage('images/unit/hero/Archer/action/attack/skill.3121004.ball.7.png'),
				sourceX : 0,
				sourceY : 0,
				sourceWidth : 68,
				sourceHeight : 19,
				destX : 0,
				destY : 0,
				destWidth : 68,
				destHeight : 19
			},size : {
				width : 68,
				height : 19,
				shiftX : 0,
				shiftY : 25
			}
		}
	}
});