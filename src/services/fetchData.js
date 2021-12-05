import axios from "axios";

const fetchData = async (link) => {
  const response = await axios.get(link);

  return response.data;
};

export default fetchData;
