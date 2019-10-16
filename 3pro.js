app=new Vue({
    el: "#app",

    data:{
	col: "cyan",
	conf:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
	labelBoxX:[0,1,2,3,4],
	labelBoxY:[0,1,2,3,4],
	ans:[[0,1,0,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]],
	msg:"できた",
	msg1:"クリア!",
	msg2:"残念!",
	board:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
    },
    
    
    computed:{
	horizontalsum:function(){
	    let sums=[];	    
	    for(let i in this.ans){
		sums.push([]);
		let length =0;
		for(let d of this.ans[i]){
		    if(d == 1){
			length++;
		    }else if(length>0){
			sums[i].push(length);
			length=0;
		    }
		}
		if(length>0){
		    sums[i].push(length);
		}
	    }
	    return sums;
	},

	verticalsum:function(){
	    let sums=[];	    
	    for(let j in this.ans[0]){
		sums.push([]);
		let length =0;
		for(let i in this.ans ){
		    if(this.ans[i][j] == 1){
			length++;
		    }else if(length>0){
			sums[j].push(length);
			length=0;
		    }
		}
		if(length>0){
		    sums[j].push(length);
		}
	    }
	    return sums;
	},

    },

    methods:{
	trans: function(x){
	    return "translate("+(50*x+220)+",120)";
	},
	transY: function(y){
	    return "translate(130,"+(50*y+230)+")";
	},
	
	toggle: function(i,j){
	    if(this.conf[i][j]==0){
		this.conf[i].splice(j,1,1);
	    }else{
		this.conf[i].splice(j,1,0);	
	    }
	},

	change: function(i,j){
	    this.toggle(i,j);
	    
	},
	message: function(){
	    if(JSON.stringify(this.conf)==JSON.stringify(this.ans)){
		alert(this.msg1);
	    }else{
		alert(this.msg2);
	    }
	},

	solve: function(i,j){
	    
	    let sumsH=this.horizontalsum;	    	    
	    let sumsV=this.verticalsum;	    	    

	    if(i>=5){
		console.log(this.board);
		return;
	    }
	    for(let d of [0,1]){//dに０か１を入れて作業しなさい
	//	console.log([i,j]);
		this.board[i][j]=d;
		if(j<4){
		    this.solve(i,j+1);
		}else{//i行目が終わったら
		    let length =0;
		    let sumsHC=[];
		    for(let bn of this.board[i]){
			if(bn == 1){
			    length++;
			}else if(length>0){
			    sumsHC.push(length);
			    length=0;
			}			
		    }
		    console.log(sumsHC);
		    console.log(this.board[i]);
		    if(JSON.stringify(sumsH[i])==JSON.stringify(sumsHC)){	   
			this.solve(i+1,0)
		    }else{
			return;
		    }
		}
	    }

	    /* 	      
	    //水平方向で、指定されたブロックの個数が一辺のブロック数と同じなら全て塗りつぶす
	    //(〜一辺のブロック数まで↑と同じ)の半分より多かったら左右の端から塗った時に重なる部分を塗りつぶす
	    for(let i in sumsH){
	    if(sumsH[i]==sumsH.length){
	    for(let j in this.conf[i])
	    this.conf[i].splice(j,1,1);
	    }else if(sumsH[i]>Math.ceil(sumsH.length/2)){
	    let dH =sumsH.length-sumsH[i]+1;
	    let sH =sumsH.length-sumsH[i]-1;
	    for (let k=0; k<dH; k++){
	    this.conf[i].splice(sH+k,1,1);
	    }
	    }	    
	    }

	    //縦方向で、指定されたブロックの個数が一辺のブロック数と同じなら全て塗りつぶす
	    //(〜一辺のブロック数まで↑と同じ)の半分より多かったら左右の端から塗った時に重なる部分を塗りつぶす
	    for(let i in sumsV){
	    if(sumsV[i]==sumsV.length){
	    for(let j=0;j<sumsV.length;j++){
	    this.conf[i].splice(j,1,1);
	    }
	    }else if(sumsV[i]>Math.ceil(sumsV.length/2)){
	    let dV =sumsV.length-sumsV[i]+1;
	    let sV =sumsV.length-sumsV[i];
	    for (let k=0; k<dV+1;k++){
	    this.conf[i].splice(sV+k,1,1);
	    }
	    }		
	    }	    	    
	    }*/
	}
    }
    
})
