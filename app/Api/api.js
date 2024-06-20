//doc

import axios from "axios";

export const api = () => {
  const response = axios.get(
    "https://beta.myupchar.com/api/v1/get_live_doctors_for_third_party?key=API_KEY&lang=en&name=USER_NAME&telephone=USER_TELEPHONE&age=USER_AGE&sex=USER_SEX&email=USER_EMAIL&speciality_id=SPECIALITY_ID"
  );
  return response
};
