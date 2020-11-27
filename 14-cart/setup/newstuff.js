const url = "http://api.github.com/users/john-smilga/repos?per_page=100"

const fetchlanguage = async () => {
  const respons = await fetch(url)
  const data = await respons.json()
  const newData = data.reduce((total, repo) => {
    const { language } = repo
    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total
  }, {})
  console.log(newData)
}

fetchlanguage()
