import axios from "axios";
import { ref } from "vue";

const getCharacter = async (id: string) => {
  try {
    const response = await axios.get(
      "https://thronesapi.com/api/v2/Characters/" + id
    );
    return response.data.fullName;
  } catch (error) {
    console.error("Error fetching character data:", error);
    return null; // Return null or handle the error as needed
  }
};

export default getCharacter;
