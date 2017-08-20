import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import { CreditcardForm, CardCVCInput } from './CreditcardForm';

describe('creditcard form', () => {
  let props;
  let component;

  beforeEach(() => {
    component = shallow(<CardCVCInput />);
  });

  it('calls function to change cvc value when input value changed', () => {
    const changeCVC = jest.fn();
    const value = '123';
    component.setProps({ changeCVC, CVC: null });

    expect(changeCVC).not.toHaveBeenCalled();
    component.find('input#cc-csc').simulate('change', { target: { value } });
    expect(changeCVC).toHaveBeenCalledTimes(1);
    expect(changeCVC).toHaveBeenCalledWith(value);
  });
});
