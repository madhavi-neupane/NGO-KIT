document.addEventListener('DOMContentLoaded', function () {
  const amountInput = document.getElementById('amount-input')
  const amountButtons = document.querySelectorAll('.amount-btn')
  const customButton = document.getElementById('custom-btn')

  amountButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const amount = this.getAttribute('data-amount')
      amountInput.value = `${amount}`
      amountInput.readOnly = true
    })
  })

  customButton.addEventListener('click', function () {
    amountInput.value = ''
    amountInput.readOnly = false
    amountInput.focus()
  })
})
