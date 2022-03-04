package io.ponicode.javademo;

public class InnerCommissionCalculer {
  public double calculateCommission(double volume, double rate) {
    return (volume * rate * 100) / 100;
  }
}
