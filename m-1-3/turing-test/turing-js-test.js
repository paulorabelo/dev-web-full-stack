function find_max(nums) {
	let max_num = Number.NEGATIVE_INFINITY; // smaller tha all other numbers
  	for (let num of nums) {
    	if (num > max_num) {
            // (fill in the missing line here)
        	max_num += num; // qual das alternativas é a correta?
            // num = max_num
            // max_num += 1
            // max_num = num
        }
    }
  	return max_num;
}
