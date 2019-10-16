app=new Vue({
    el: "#app",

    data:{
	col: "cyan",
	conf:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
	labelBoxX:[0,1,2,3,4],
	labelBoxY:[0,1,2,3,4],	
    },
    
    
    computed:{
	
    },

    methods:{
	toggle: function(i,j){
	    if(this.conf[i][j]==0){
		this.conf[i].splice(j,1,1);
	    }else{
		this.conf[i].splice(j,1,0);		
	    }
	},

	change: function(i,j){
	    this.toggle(i,j);
	    
	}
    }
    
})
