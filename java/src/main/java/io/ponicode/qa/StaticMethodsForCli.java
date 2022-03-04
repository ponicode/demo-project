package io.ponicode.qa;

// qa-cli-java-1
class StaticMethodsForCli {
	static int addition(int a, int b) {
		return a + b;
	}

	static int sum(int[] nbs) {
		int res = 0;

		for (int nb : nbs) {
			res += nb;
		}
		return res;
	}

	static Number nAddition(Number a, Number b) {
		return new Number(a.value + b.value);
	}
}
