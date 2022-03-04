package io.ponicode.qa;

class ClassMethodsForIntelliJ {
	int n;

	ClassMethodsForIntelliJ() {
		this.n = 1;
	}

	// qa-intellij-4
	int addition(int n) {
		this.n *= n;
		return this.n;
	}

	// qa-intellij-5
	int sum(int[] nbs) {
		for (int nb : nbs) {
			this.n *= nb;
		}
		return this.n;
	}

	// qa-intellij-6
	Number nAddition(Number n) {
		this.n *= n.value;
		return new Number(this.n);
	}
}
