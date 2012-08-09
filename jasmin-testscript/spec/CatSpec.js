describe("About cat,", function(){
	var cat = null;
	
	// itの前に実行される
	beforeEach(function(){
		cat = new Cat(10, 10);
	});
		
	// itの後に実行される
	afterEach(function(){
		cat = new Cat(10, 10);
	});
		
	it("if you don't give food, then become hungry", function(){
		expect(function(){
			new Cat(null, 10);
		}).toThrow("meow!!(hungry)");
	});
		
		
	it("if food dish is empty, then want food", function(){
		expect(function(){
			new Cat(0, 10);
		}).toThrow("meow!!(please fill food)");
	});
		
	it("if you don't give water, then become thirsty", function(){
		expect(function(){
			new Cat(10, null);
		}).toThrow("meow!!(thirsty)");
	});
	
	it("if water dish is empty, then want water", function(){
		expect(function(){
			new Cat(10, 0);
		}).toThrow("meow!!(please fill water)");
	});
	
	it("if water is too much, then it become angry", function(){
		expect(function(){
			new Cat(10, 30);
		}).toThrow("meow!!(too much water)");
	});
	
	it("if you give food, cat feel happy", function(){
		expect(cat.feeding()).toEqual(11);
	});	
	
		
	it("if you give water, cat feel happy", function(){
		expect(cat.giveWater()).toEqual(11);
	});	
});
	