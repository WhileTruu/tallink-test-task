import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import { CreditcardForm, CardCVCInput, CardExpiresInput, CardNumberInput } from './CreditcardForm';

describe('creditcard form', () => {
  beforeEach(() => {});

  it('calls function to change cvc value when input value changed', () => {
    const changeCVC = jest.fn();
    const value = '123';
    const cardCVCInputComponent = shallow(<CardCVCInput />);
    cardCVCInputComponent.setProps({ changeCVC, CVC: null });

    expect(changeCVC).not.toHaveBeenCalled();
    cardCVCInputComponent.find('input#cc-csc').simulate('change', { target: { value } });
    expect(changeCVC).toHaveBeenCalledTimes(1);
    expect(changeCVC).toHaveBeenCalledWith(value);
  });

  it('calls function to change expiry date value when input value changed', () => {
    const changeExpiry = jest.fn();
    const value = '12 / 3131';
    const cardExpiresInputComponent = shallow(<CardExpiresInput />);

    cardExpiresInputComponent.setProps({ changeExpiry, expiry: null });

    expect(changeExpiry).not.toHaveBeenCalled();
    cardExpiresInputComponent.find('input#cc-exp').simulate('change', { target: { value } });
    expect(changeExpiry).toHaveBeenCalledTimes(1);
    expect(changeExpiry).toHaveBeenCalledWith(value);
  });

  it('calls function to change expiry date value when input value changed', () => {
    const changeCreditcardNumber = jest.fn();
    const value = '123131';
    const cardNumberInput = shallow(<CardNumberInput />);

    cardNumberInput.setProps({ changeCreditcardNumber, creditcardNumber: null });

    expect(changeCreditcardNumber).not.toHaveBeenCalled();
    cardNumberInput.find('input#cc-number').simulate('change', { target: { value } });
    expect(changeCreditcardNumber).toHaveBeenCalledTimes(1);
    expect(changeCreditcardNumber).toHaveBeenCalledWith(value);
  });
});
