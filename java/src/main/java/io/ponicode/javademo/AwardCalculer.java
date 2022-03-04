package io.ponicode.javademo;

public class AwardCalculer {
  /**
   * Calculates an award from a commission a bonus and a fee.
   */
  public double calculateAward(double commission, double bonus, double fee) {
    return commission + bonus - fee;
  }
}
