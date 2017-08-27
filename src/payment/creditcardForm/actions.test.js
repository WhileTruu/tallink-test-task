/* global describe, it, expect */
import { CHANGE_CVC } from './constants'

const actions = require('./actions')

describe('Login actions', () => {
  it('can change CVC', () => {
    const CVC = '123'
    const action = actions.changeCVC(CVC)
    expect(action).toEqual({
      CVC,
      type: CHANGE_CVC,
    })
  })

  it('does not include non-digits when changing CVC', () => {
    const CVC = '123a'
    const action = actions.changeCVC(CVC)
    expect(action).toEqual({
      CVC: '123',
      type: CHANGE_CVC,
    })
  })
})
