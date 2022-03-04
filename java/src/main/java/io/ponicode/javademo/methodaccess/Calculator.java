/**
 * This code comes from a small research done about method visibility in java
 * This is documented here https://ponicode.atlassian.net/wiki/spaces/PW/pages/2102001665/Experimentations+on+java+methods+accessibility
 */

package io.ponicode.javademo.methodaccess;

//CHECKSTYLE:OFF
public class Calculator {
  public Calculator() {}

  public int addition(int n1, int n2) {
    return n1 + n2;
  }

  protected int subtraction(int n1, int n2) {
    return n1 - n2;
  }

  // When nothing is indicated the method is package private
  int multiplication(int n1, int n2) {
    return n1 * n2;
  }

  private int division(int n1, int n2) {
    return n1 / n2;
  }

  public class PublicCurriedCalculator {
    public int n1;

    public PublicCurriedCalculator(int number) {
      this.n1 = number;
    }

    public int addition(int n2) {
      return n1 + n2;
    }
  }

  protected class ProtectedCurriedCalculator {
    public int n1;

    public ProtectedCurriedCalculator(int number) {
      this.n1 = number;
    }

    public int subtraction(int n2) {
      return n1 - n2;
    }
  }

  class PackagePrivateCurriedCalculator {
    public int n1;

    public PackagePrivateCurriedCalculator(int number) {
      this.n1 = number;
    }

    public int multiplication(int n2) {
      return n1 * n2;
    }
  }

  private class PrivateCurriedCalculator {
    public int n1;

    public PrivateCurriedCalculator(int number) {
      this.n1 = number;
    }

    public int division(int n2) {
      return n1 / n2;
    }
  }
}
//CHECKSTYLE:ON
