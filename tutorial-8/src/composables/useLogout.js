import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    const res = await projectAuth.signOut();
    error.value = null;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.value);
    error.value = err.value;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
