import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function handleError(err) {
  console.warn(err);
}

const RecipeDetail = () => {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  const [items, setItems] = useState([]);

  const getRecipeDetail = async () => {
    const response = await fetch(`/api/v1/recipes/${params.recipeId}/`).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const json = await response.json();
    console.log(json);
    setDetail(json);
};

  useEffect(() => {
    getRecipeDetail();
  }, []);



  const detailView = (
    <div className="w-1/2">
      <h1>{detail.name}</h1>
      <h2>by {detail.username}</h2>
      <img src={detail.image} alt="detail" />
      <div>
        <p>Recipe Type: {detail.category}</p>
        <p>Prep Time: {detail.prep_time} Minutes</p>
        <p>Cook Time: {detail.cook_time} Minutes</p>
      </div>
      <div className="bg-stone-500">
        <ul className="flex flex-col"></ul>
      </div>
    </div>
  );

  return (
    <>
      <div className="pt-16 flex flex-col items-center justify-start">
        {detailView}
      </div>
    </>
  );
};

export default RecipeDetail;
