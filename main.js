var a=[-1,3,-4,-5,-6,-68,8]; 
var y=[]; 
for(i=0;i<a.length;i++) 
	{ 
		if(a[i]<0)
		{ 
			y.push(Math.abs(a[i]));
		} 
	} 
	console.log(y); 