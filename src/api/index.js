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

export async function fetchingActivities() {
  try {
    const fetchingActivitiesUrl = await fetch(`${BASE_URL}/api/activities`);
    const fetchedActivitiesUrl = await fetchingActivitiesUrl.json();
    return fetchedActivitiesUrl;
  } catch (error) {
    console.error(err);
  }
}

export async function logInUser(username, password) {
  console.log(username, password);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  let response = await fetch(`${BASE_URL}/api/users/login`, options);
  let result = await response.json();
  console.log(result);
  return result;
}
