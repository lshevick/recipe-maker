import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function handleError(err) {
  console.warn(err);
}

const RecipeDetail = () => {
  const [detail, setDetail] = useState([]);
  const params = useParams();

  const getRecipeDetail = async () => {
    const response = await fetch(`/api/v1/recipes/${params.recipeId}/`).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const json = await response.json();
    setDetail(json);
  };

  useEffect(() => {
    getRecipeDetail()
  }, [])

  const detailView = (
    <div>
        <img src={detail.image} alt="detail" />
    </div>
  )

  return (
    <>
      <div>
        {detailView}
      </div>
    </>
  );
};

export default RecipeDetail;
