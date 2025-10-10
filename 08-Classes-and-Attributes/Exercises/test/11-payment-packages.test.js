import { PaymentPackage } from "../PaymentPackage.js";
import { expect } from 'chai';

describe('Main test suite', () => {

  // Initialization tests

  it('should initialize correctly with valid params', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    expect(pkg.name).to.equal('HR Services');
    expect(pkg.value).to.equal(1500);
    expect(pkg.VAT).to.equal(20);
    expect(pkg.active).to.be.true;
  });

  // Name property validation

  it('should throw an error when name is not a string', () => {
    expect(() => new PaymentPackage(1500, 1500)).to.throw('Name must be a non-empty string');
  });

  it('should throw an error when name is an empty string', () => {
    expect(() => new PaymentPackage('', 1500)).to.throw('Name must be a non-empty string');
  });

  it('should allow changing name when given a different valid string', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    pkg.name = 'Consultation';
    expect(pkg.name).to.equal('Consultation');
  });

  // Number property validation

  it('should throw an error when value is not a number', () => {
    expect(() => new PaymentPackage('HR Services', '1500')).to.throw('Value must be a non-negative number');
  });

  it('should throw an error when value is a negative number', () => {
    expect(() => new PaymentPackage('HR Services', -1500)).to.throw('Value must be a non-negative number');
  });

  it('should allow changing value to 0 or a positive number', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    pkg.value = 0;
    expect(pkg.value).to.equal(0);
    pkg.value = 150;
    expect(pkg.value).to.equal(150);
  });

  // VAT Validation

  it('should have VAT default set to 20', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    expect(pkg.VAT).to.equal(20);
  })

  it('should set VAT to a positive number', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    pkg.VAT = 30;
    expect(pkg.VAT).to.equal(30);
    pkg.VAT = 0;
    expect(pkg.VAT).to.equal(0);
  })

  it('should throw an error when trying to set VAT to a negative number', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    expect(() => pkg.VAT = -30).to.throw('VAT must be a non-negative number');
  })

  it('should throw an error when trying to set VAT to a non-number', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    expect(() => pkg.VAT = '').to.throw('VAT must be a non-negative number');
  })

  // Active validation

  it('should have Active status set as true', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    expect(pkg.active).to.be.true;
  })

  it('should have Active status set as false', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    pkg.active = false
    expect(pkg.active).to.be.false;
  })

  it('should throw an error when trying to set Active status to a non-boolean', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    expect(() => pkg.active = '').to.throw('Active status must be a boolean');
  })

  //toString method

  it('should return correct when active = true', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    const expected = 
      'Package: HR Services\n' + 
      '- Value (excl. VAT): 1500\n' + 
      '- Value (VAT 20%): 1800';
    expect(pkg.toString()).to.equal(expected);
  })

  it('should append inactive to output when active = true', () => {
    const pkg = new PaymentPackage('HR Services', 1500);
    pkg.active = false;
    const expected = 
      'Package: HR Services (inactive)\n' + 
      '- Value (excl. VAT): 1500\n' + 
      '- Value (VAT 20%): 1800';
    expect(pkg.toString()).to.equal(expected);
  })
})