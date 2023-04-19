//your code here
function app(arr){
	let n = arr.length
	let f = Math.floor(n / 2)
	arr.sort()
	let i = 0, count = 0
	
	while(i < n){
	    count = 0
	    let j = i
	    while(j < n){
	        if(arr[i] == arr[j]){
	            count++
	            j++
	        }
	        else{
	            break
	        }
	    }
	    if(count > f)
	    {
	        break
	    }
	    i = j
	}
	return arr[i]
}
	
module.exports = app;