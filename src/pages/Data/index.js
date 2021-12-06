import React, { useState, useEffect } from "react";
import Logo from "../../components/logo";
import styles from "./styles.module.css";
import { getAsteroids } from "../../services";
import Button from "../../components/button";

const Data = () => {
  const [page, setPage] = useState(0);
  const [asteroidsData, setAsteroidsData] = useState();

  const getInitialAsteroidsData = async (page) => await getAsteroids(page);

  const getNextAsteroids = () => {
    setAsteroidsData();
    const nextPage = page + 1;
    setPage(nextPage);
    getInitialAsteroidsData(nextPage).then((data) => setAsteroidsData(data));
  };

  const getPreviousAsteroids = () => {
    setAsteroidsData();
    const nextPage = page - 1;
    setPage(nextPage);
    getInitialAsteroidsData(nextPage).then((data) => setAsteroidsData(data));
  };

  useEffect(() => {
    getInitialAsteroidsData(page).then((data) => setAsteroidsData(data));
  }, []);

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
              asteroidsData["near_earth_objects"].map((asteroid) => (
                <tr key={asteroid.id}>
                  <td>{asteroid.name}</td>
                  <td>
                    {Math.round(
                      asteroid?.estimated_diameter.meters.estimated_diameter_min
                    )}
                    m
                  </td>
                  <td>
                    {Math.round(
                      asteroid?.estimated_diameter.meters.estimated_diameter_max
                    )}
                    m
                  </td>
                  <td>{asteroid.orbital_data.first_observation_date}</td>
                  <td>{asteroid.orbital_data.last_observation_date}</td>
                  <td>{asteroid.orbital_data.observations_used}</td>
                  <td>{asteroid.orbital_data.orbit_id}</td>
                  <td>
                    {asteroid.is_potentially_hazardous_asteroid ? (
                      <span className={styles["error-text"]}>YES</span>
                    ) : (
                      <span>NO</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {asteroidsData && (
          <p className={styles["page-counter"]}>
            Puslapis {page + 1} iš {asteroidsData.page.total_pages}
          </p>
        )}
        {asteroidsData && (
          <div className={styles["button-container"]}>
            {page > 0 && (
              <Button
                type="button"
                onClick={getPreviousAsteroids}
                text="Previous"
              />
            )}
            <Button type="button" onClick={getNextAsteroids} text="Next" />
          </div>
        )}
      </div>
    </>
  );
};

export default Data;
