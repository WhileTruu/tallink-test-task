export function getOnlineBankInformation() {
  return Promise.resolve({
    banks: [
      {
        name: 'Swedbank'
      },
      {
        name: 'SEB'
      },
      {
        name: 'Nordea'
      },
      {
        name: 'Danske Bank'
      }
    ]
  });
}
