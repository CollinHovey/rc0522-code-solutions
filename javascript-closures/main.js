function graduate(credential) {
  return function name(fullName) {
    return `${fullName}, ${credential}`
  }
}

const medicalSchool = graduate('M.D.')
const lawSchool = graduate('Esq.')

console.log(medicalSchool('Collin Hovey'))
console.log(lawSchool('Collin Hovey'))
