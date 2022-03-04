package io.ponicode.javademo;

public class CommissionCalculer {
  private InnerCommissionCalculer innerCommissionCalculer = new InnerCommissionCalculer();

  /**
   * Calculates the commission from a money volume.
   */
  public double calculateCommissionJava(double volume, AwardCalculer awardCalculer) {
    double fee;
    double rate;
    double bonus;

    fee = 0.0;
    bonus = 0.0;
    if (volume > 200000.0) {
      rate = 0.15;
      bonus = 1000.0;
    } else {
      if (volume > 100000.0) {
        rate = 0.123;
      } else {
        if (volume > 50000.0) {
          rate = 0.1;
        } else {
          if (volume >= 10000.0) {
            rate = 0.075;
          } else {
            if (volume >= 5000.0) {
              rate = 0.05;
            } else {
              if (volume > 0.0) {
                rate = 0.025;
              } else {
                rate = 0;
                fee = 50.0;
              }
            }
          }
        }
      }
    }
    double commission = this.innerCommissionCalculer.calculateCommission(volume, rate);
    double award = awardCalculer.calculateAward(commission, bonus, fee);
    return (award * 100) / 100;
  }
}
