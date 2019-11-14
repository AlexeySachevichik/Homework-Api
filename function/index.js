const Func = {
	id: function(id){
		return id !== "" && id.length === 24;
	},
	randomCount: function(count){
		return !isNaN(Number(count)) && Number(count) > 0 && Number(count) <= 5000;
	},
	getLogTime: function(){
	    const date = new Date();
	    
	    let h = date.getHours();
	    if( h < 10 ) h = "0" + h;
	    let m = date.getMinutes();
	    if( m < 10 ) m = "0" + m;
	    let s = date.getSeconds();
	    if( s < 10 ) s = "0" + s;

	    return `${h}:${m}:${s}`;
	},
	mes: function(m){
		console.log(`[${this.getLogTime()}] ${m}`);
	},
	err: function(m){
		console.error(`[${this.getLogTime()}] ${m}`);
	}
};

module.exports = Func;