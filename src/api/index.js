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

export async function RegisterUser(username, password) {
  console.log(username, password);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };
  let response = await fetch(`${BASE_URL}/api/users/register`, options);
  let result = await response.json();
  console.log(result);
  return result.token;
}

export async function creatingActivity(token, name, description) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
    }),
  };
  const response = await fetch(`${BASE_URL}/api/activities`, options);
  const result = await response.json();
  return result;
}

export async function creatingRoutine(token, name, goal) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      goal,
    }),
  };
  const response = await fetch(`${BASE_URL}/api/routines`, options);
  const result = await response.json();
  return result;
}

export async function fetchingRoutinesForActivities(activityId) {
  try {
    const fetchingActivityRoutinesUrl = await fetch(
      `${BASE_URL}/api/activities/${activityId}/routines`
    );
    const fetchedActivityRoutinesUrl = await fetchingActivityRoutinesUrl.json();
    console.log(fetchedActivityRoutinesUrl);
    return fetchedActivityRoutinesUrl;
  } catch (error) {
    throw error;
  }
}
// ^^clicking on function and displaying
// all routines for an activity when selected

export async function DeleteRoutine(routineId, token) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      `${BASE_URL}/api/routines/${routineId}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
export async function EditRoutine(routineId, name, goal, isPublic, token) {
  try {
    let options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    };
    const response = await fetch(
      `${BASE_URL}/api/routines/${routineId}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchingMyRoutines(username, token) {
  try {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchingMyRoutinesUrl = await fetch(
      `${BASE_URL}/api/users/${username}/routines`,
      options
    );
    const fetchedMyRoutinesUrl = await fetchingMyRoutinesUrl.json();
    return fetchedMyRoutinesUrl;
  } catch (error) {
    throw error;
  }
}
