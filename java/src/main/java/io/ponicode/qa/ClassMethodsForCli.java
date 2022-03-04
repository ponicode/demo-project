package io.ponicode.qa;

// qa-cli-java-2
class ClassMethodsForCli {
	int n;

	ClassMethodsForCli() {
		this.n = 0;
	}

	int addition(int n) {
		this.n += n;
		return this.n;
	}

	int sum(int[] nbs) {
		for (int nb : nbs) {
			this.n += nb;
		}
		return this.n;
	}

	Number nAddition(Number n) {
		this.n += n.value;
		return new Number(this.n);
	}
}
