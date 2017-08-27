export function getOnlineBankInformation() {
  return Promise.resolve({
    banks: [
      {
        name: 'Swedbank',
      },
      {
        name: 'SEB',
      },
      {
        name: 'Nordea',
      },
      {
        name: 'Danske Bank',
      },
    ],
  })
}

export function payForReservation(details = '') {
  // eslint-disable-next-line no-console
  console.log(details)
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}
