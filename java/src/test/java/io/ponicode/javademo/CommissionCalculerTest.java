package io.ponicode.javademo;

import org.junit.jupiter.api.*;

public class CommissionCalculerTest {
    @Nested
    @DisplayName("Tests for the method calculateCommissionJava")
    class calculateCommissionJavaTests {
        @Test
        void test1() {
            double value = 1.0;
            AwardCalculer object = new AwardCalculer();
            CommissionCalculer object2 = new CommissionCalculer();
            object2.calculateCommissionJava(value,object);
        }
        @Test
        void test2() {
            double value = -1.0;
            AwardCalculer object = new AwardCalculer();
            CommissionCalculer object2 = new CommissionCalculer();
            object2.calculateCommissionJava(value,object);
        }
        @Test
        void test3() {
            double value = 0.5;
            AwardCalculer object = new AwardCalculer();
            CommissionCalculer object2 = new CommissionCalculer();
            object2.calculateCommissionJava(value,object);
        }
        @Test
        void test4() {
            double value = 10.23;
            AwardCalculer object = new AwardCalculer();
            CommissionCalculer object2 = new CommissionCalculer();
            object2.calculateCommissionJava(value,object);
        }
        @Test
        void test5() {
            double value = 10.0;
            AwardCalculer object = new AwardCalculer();
            CommissionCalculer object2 = new CommissionCalculer();
            object2.calculateCommissionJava(value,object);
        }
        @Test
        void test6() {
            double value = 0.0;
            AwardCalculer object = new AwardCalculer();
            CommissionCalculer object2 = new CommissionCalculer();
            object2.calculateCommissionJava(value,object);
        }
    }
}
