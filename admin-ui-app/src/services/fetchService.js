import { BASE_URL } from "../utilities/constants";

export const userDetails = async () => {
  try {
    const res = await fetch(`${BASE_URL}/adminui-problem/members.json`);
    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return err.message;
  }
};

