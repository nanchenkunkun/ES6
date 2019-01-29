function BB(name){
	this.name=name;
}

let bb=new BB("Cyan");
class AA{
	constructor(name){
		this.name=name;
	}
}


let aa=new AA("Aqing");
console.log(aa);


let a1=new class{
	constructor(name){
		console.log(name);
	}
}("Cyan");//"Cyan"