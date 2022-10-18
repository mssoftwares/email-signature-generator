const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = getInputValueByName('name')
  const job = getInputValueByName('job')

  document.getElementById('signature').style.display = "block"
  document.getElementById('copy').style.display = "block"

  document.getElementById('username').innerText = name
  document.getElementById('userjob').innerText = job
})

const getInputValueByName = (name) => {
  const input = document.querySelector(`input[name="${name}"]`)
  return input.value
}

const copy = () => {
  const signature = document.getElementById('signature')
  const assinatura = signature.innerHTML
  navigator.clipboard.writeText(assinatura)
  alert('Assinatura copiada com sucesso!')
}