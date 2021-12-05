import axios from "axios";

const fetchAsteroidsData = async (startDate) => {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&detailed=true&api_key=vNwnOjDiS3v6jqajIa8VKoWro0CR5UQXiXUyuD5p`
  );

  return response.data;
};

export default fetchAsteroidsData;
