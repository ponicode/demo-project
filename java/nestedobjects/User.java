// Copyright 2016-2018 Diffblue limited. All rights reserved.

package io.ponicode.javademo.nestedobjects;

import io.ponicode.javademo.nestedobjects.subpackage.Item;
import io.ponicode.javademo.nestedobjects.subpackage.Order;

public class User {
  public User(Order order)  {
    this.order = order;
  }

  /**
   * Checks if an item costs the same as the user's order item.
   */
  public boolean checkItemCost(Item item) {
    if (!order.hasItem()) {
      return false;
    }
    return order.item.cost == item.cost;
  }

  private Order order;

  public User setOrder(Order newOrder) {
    order = newOrder;
    return this;
  }

  public Order getOrder() {
    return order;
  }
}
