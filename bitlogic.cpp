<script>
	
	function maximizingXor(l, r,k) {
        
        let xor = 0;
        for(let i = l; i <= r; i++) {
            for(let j = l; j <= r; j++) {
                xor = Math.max(i ^ j, xor);
            }
        }
    if(xor<=k){
        return xor;
    }
    }
	
	let lo = 2;
	let hi = 4;
    let K=8;
   
	document.write(maximizingXor(L, R,K));
	
</script>
