var Cat = function(food, water){

  if(food==0){
  	throw "meow!!(please fill food)";
  }
  
  if(water==0){
  	throw "meow!!(please fill water)";
  }

  if(water>15){
  	throw "meow!!(too much water)";
  }

  if(!food){
  	throw "meow!!(hungry)";
  }
  
  if(!water){
  	throw "meow!!(thirsty)";
  }
  
  this.food = food;
  this.water = water;
}; 
  
Cat.prototype.feeding = function(){
	return this.food + 1;
};
  
Cat.prototype.giveWater = function(){
  	return this.water + 1;
};
