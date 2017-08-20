import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import { CreditcardForm, CardCVCInput, CardExpiresInput } from './CreditcardForm';

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
});
