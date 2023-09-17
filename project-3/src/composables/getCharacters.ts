import axios from "axios";

const getCharacter = async (id: string) => {
  try {
    const response = await axios.get(
      "https://thronesapi.com/api/v2/Characters/"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching character data:", error);
    return null; // Return null or handle the error as needed
  }
};

export default getCharacter;
