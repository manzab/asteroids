import axios from "axios";

const fetchAsteroidsData = async (page, size = 20) => {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=${size}&api_key=vNwnOjDiS3v6jqajIa8VKoWro0CR5UQXiXUyuD5p`
  );

  return response.data;
};

export default fetchAsteroidsData;
