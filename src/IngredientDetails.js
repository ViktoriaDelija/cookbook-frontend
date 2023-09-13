import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const IngredientDetails = () => {
  const API_URL = "http://localhost:8080/api/ingredients";
  const { ingId } = useParams();
  const [ingredient, setIngredient] = useEffect(null);
  console.log("this is the id: " + ingId);

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const response = await axios.get(API_URL + `/${ingId}`);
        setIngredient(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    };
    fetchIngredient();
  }, [ingId]);

  return (
    <main>
      <article>Hello</article>
    </main>
  );
};

export default IngredientDetails;

/*useEffect(() => {
        const fetchEvent = async () => {
            try {
                const customHeaders = {Authorization: "Bearer " + context.token}
                console.log(apiUrl + `/event/eventDetails/${idEvent}`)
                const response = await axios.get(apiUrl + `/event/eventDetails/${idEvent}`, {headers: customHeaders});
                setEvent(response.data);
                checkIfAdmin(response.data);
                checkIfFull(response.data);
                checkIfJoined(response.data);



                console.log(response.data);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        }
        fetchEvent();
    }, [idEvent]);*/
