import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import getDetails from "../services/getDetails";
import { useParams } from "react-router-dom";
import MoviesAndSeriesDetails from "./MoviesAndSeriesDetails";
import PersonDetails from "./PersonDetails";

function DetailsInformation() {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await getDetails(type, id);
        setDetails(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDetails();
  }, [id, type]);
  

  return (
    <>
      {!details ? (
        <div>Loading...</div>
      ) : type === 'person' ? (
        <PersonDetails details={details} type={type} />
      ) : (
        details.genres && <MoviesAndSeriesDetails details={details} type={type} /> 
        /* Se pregunta si existen details.genres para evitar mostrar un error al tratar de 
        cargar una persona en una vista de series */
      )}
    </>
  );
}

export default DetailsInformation;
