var kthGrammar = function(n, k) {
	if (n === 1) return 0;

	const mid = Math.pow(2, n - 1) / 2;

	if (k <= mid) return kthGrammar(n - 1, k);
	else return (1 - kthGrammar(n - 1, k - mid));
}
