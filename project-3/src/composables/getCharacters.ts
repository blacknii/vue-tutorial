import axios from "axios";

const getCharacters = async () => {
  try {
    const response = await axios.get(
      "https://thronesapi.com/api/v2/Characters/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching characters data:", error);
    return null; // Return null or handle the error as needed
  }
};

export default getCharacters;
