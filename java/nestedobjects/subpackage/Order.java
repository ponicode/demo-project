// Copyright 2016-2018 Diffblue limited. All rights reserved.

package io.ponicode.javademo.nestedobjects.subpackage;

public class Order {
  public Item item;

  /**
   * Checks if this order has an item.
   */
  public boolean hasItem() {
    if (item == null) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Sets the item for this order.
   */
  public boolean setItem(Item item) {
    boolean exists = hasItem();
    this.item = item;
    return exists;
  }

  /**
   * Gets the item for this order.
   */
  public Item getItem() {
    return item;
  }
}
