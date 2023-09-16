import axios from "axios";
import { ref } from "vue";

const getCharacter = async (id: string) => {
  const char = await axios.get(
    "https://thronesapi.com/api/v2/Characters/" + id
  );

  const character = ref(char.data.fullName);
  console.log({ character });
  return character;
};

export default getCharacter;
