import { PaymentPackage } from "../PaymentPackage.js";
import { expect } from 'chai';

describe('Main test suite', () => {
  it('initiates with a string and a number', () => {
    const paymentPackage = new PaymentPackage('HR Services', 1500);
    expect(paymentPackage).to.be.an.instanceof(PaymentPackage);
  })
})