const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";

export async function fetchingRoutines() {
  try {
    const fetchingRoutinesUrl = await fetch(`${BASE_URL}/api/routines`);
    const fetchedRoutinesUrl = await fetchingRoutinesUrl.json();
    return fetchedRoutinesUrl;
  } catch (error) {
    console.error(err);
  }
}
