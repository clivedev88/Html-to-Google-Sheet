const scriptURL = 'https://script.google.com/macros/s/AKfycbwN9idAQjlyWnzZ4MskrfgWJ5Fy72fAVLQVE5xVH5YfZy5HQogAN-MdmtDu3HBdz7nw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(Response => alert("Thank you! Your form was submitted successfully."))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})