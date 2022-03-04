package io.ponicode.qa;

class StaticMethodsForIntelliJ {
	// qa-intellij-1
	static int multiplication(int a, int b) {
		return a * b;
	}

	// qa-intellij-2
	static int sum(int[] nbs) {
		int res = 1;

		for (int nb : nbs) {
			res *= nb;
		}
		return res;
	}

	// qa-intellij-3
	static Number nMultiplication(Number a, Number b) {
		return new Number(a.value * b.value);
	}
}
