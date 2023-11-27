/** @format */

export async function getCityCoordinates(apiData, city) {
  try {
    const response = await fetch(
      `${apiData.APICoordinates.adress}q=${city}&limit=${apiData.APICoordinates.limit}&appid=${apiData.APIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getCityWather(apiData, cityLongitude, cityLatitude) {
  try {
    const response = await fetch(
      `${apiData.APIWather.adress}lon=${cityLongitude}&lat=${cityLatitude}&units=${apiData.APIWather.units}&appid=${apiData.APIKey}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
