import React, { useState, useEffect } from "react";
import Logo from "../../components/logo";
import styles from "./styles.module.css";
import { fetchAsteroidsData, fetchData } from "../../services";
import getCurrentDate from "../../services/getCurrentDate";

const Data = () => {
  const [asteroidsData, setAsteroidsData] = useState();

  const getInitialAsteroidsData = async (date) =>
    await fetchAsteroidsData(date);

  useEffect(() => {
    const date = getCurrentDate();
    getInitialAsteroidsData(date).then((data) => setAsteroidsData(data));
  }, []);

  const getAsteroidsData = async (url) => {
    setAsteroidsData();
    const asteroidsData = await fetchData(url);
    setAsteroidsData(asteroidsData);
  };

  return (
    <>
      <div className={styles.header}>
        <Logo />
        <div className={styles["header-bar"]}>
          <h3>Asteroids Database</h3>
        </div>
      </div>
      <div className={styles["filter-container"]}></div>
      <div className={styles["table-container"]}>
        {!asteroidsData && <div className={styles.loader}></div>}
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>MIN DIAMETER</th>
              <th>MAX DIAMETER</th>
              <th>FIRST SEEN</th>
              <th>LAST SEEN</th>
              <th>OBSERVATIONS</th>
              <th>ORBIT ID</th>
              <th>IS HAZARDOUS</th>
            </tr>
          </thead>
          <tbody>
            {asteroidsData &&
              Object.keys(asteroidsData["near_earth_objects"]).map((key) =>
                asteroidsData["near_earth_objects"][key].map(
                  (asteroidsByDay) => (
                    <tr key={asteroidsByDay.id}>
                      <td>{asteroidsByDay.name}</td>
                      <td>
                        {Math.round(
                          asteroidsByDay?.estimated_diameter.meters
                            .estimated_diameter_min
                        )}
                        m
                      </td>
                      <td>
                        {Math.round(
                          asteroidsByDay?.estimated_diameter.meters
                            .estimated_diameter_max
                        )}
                        m
                      </td>
                      <td>
                        {asteroidsByDay.orbital_data.first_observation_date}
                      </td>
                      <td>
                        {asteroidsByDay.orbital_data.last_observation_date}
                      </td>
                      <td>{asteroidsByDay.orbital_data.observations_used}</td>
                      <td>{asteroidsByDay.orbital_data.orbit_id}</td>
                      <td>
                        {asteroidsByDay.is_potentially_hazardous_asteroid ? (
                          <span className={styles["error-text"]}>YES</span>
                        ) : (
                          <span>NO</span>
                        )}
                      </td>
                    </tr>
                  )
                )
              )}
          </tbody>
        </table>
        {asteroidsData && (
          <div className={styles["button-container"]}>
            <button
              className={styles.button}
              onClick={() => getAsteroidsData(asteroidsData.links.prev)}
            >
              Previous
            </button>
            <button
              className={styles.button}
              onClick={() => getAsteroidsData(asteroidsData.links.next)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Data;
