function summ (num) {

    window.total = window.total || 0;
	
	if (undefined === num) {
		return window.total;
	}
	
	window.total += num;
	
    return summ;
}

summ(1)(2)(3)(4)();