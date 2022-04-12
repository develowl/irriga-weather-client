export const getCities = async (city: string) => {
  const searchParams = `q=${city}&limit=10&appid=${process.env.API_KEY}&lang=pt_br`
  const response = await fetch(
    // `https://www.theweathernetwork.com/br/api/location/search?searchText=${city}`
    `http://api.openweathermap.org/geo/1.0/direct?${searchParams}`
  ).then((data) => data.json())

  console.log('REPONSE', response)

  return response
}
