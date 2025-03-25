// Action Types
export const FETCH_HOLIDAYS_REQUEST = "FETCH_HOLIDAYS_REQUEST"
export const FETCH_HOLIDAYS_SUCCESS = "FETCH_HOLIDAYS_SUCCESS"
export const FETCH_HOLIDAYS_FAILURE = "FETCH_HOLIDAYS_FAILURE"

// Action Creators
export const fetchHolidays = (date, countryCode) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_HOLIDAYS_REQUEST })

    try {
      const response = await fetch(
        `https://openholidaysapi.org/PublicHolidaysByDate?date=${date}&languageIsoCode=${countryCode}`,
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()

      // Process the data to handle nested objects
      const processedData = Array.isArray(data)
        ? data.filter((holiday)=> holiday.country.isoCode == countryCode).map((holiday) => ({
            ...holiday,
            name: typeof holiday.name === "object" ? holiday.name[0].text : holiday.name,
            type: holiday.type && typeof holiday.type === "object" ? holiday.type.text : holiday.type,
          }))
        : []

      dispatch({
        type: FETCH_HOLIDAYS_SUCCESS,
        payload: processedData,
      })
    } catch (error) {
      dispatch({
        type: FETCH_HOLIDAYS_FAILURE,
        payload: error.message || "Failed to fetch holiday information",
      })
    }
  }
}

