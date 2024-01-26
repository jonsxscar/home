import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import inmuebles from "../../assets/img/Recording 2023-11-01 at 14.00.07.gif";
import pokemon from "../../assets/img/Recording 2023-11-01 at 14.13.11.gif";
import ram from "../../assets/img/rickandmorty.png"

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;

  // Lógica condicional para elegir la URL de la imagen
  let image_url;
  if (name === "inmuebles360") {
    image_url = inmuebles;
  } else if (name === "Pokemon_PI") {
    image_url = pokemon;
  } else {
    image_url = ram;
  }

  let link_url;
  if (name === "inmuebles360") {
    link_url = "https://inmuebles360-deploy.vercel.app/";
  } else if (name === "Pokemon_PI") {
    link_url = "https://pokemonfront.vercel.app/";
  } /* else {
    link_url = "URL de la imagen predeterminada";
  } */

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          {/* Añade una imagen con un enlace */}
          <a href={link_url} >
            <Card.Img
              src={image_url}
              alt={name}
              style={{
                width: "100%", // Ajusta el tamaño de la imagen según tus necesidades
                display: "block", // Asegura que la imagen se muestre como un bloque
                margin: "0 auto", // Establece márgenes automáticos en los lados izquierdo y derecho para centrar la imagen horizontalmente
              }}
            />
          </a>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter
              star_count={stargazers_count}
              repo_url={svn_url}
              pushed_at={pushed_at}
            />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a
        href={svn_url}
        target=" _blank"
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language}
              className="card-link"
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
              rel="noopener noreferrer"
            >
              <span className="badge bg-light text-dark">
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10} %
              </span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
