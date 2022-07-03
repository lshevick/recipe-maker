import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function handleError(err) {
  console.warn(err);
}

const RecipeDetail = () => {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false)

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

  const ingredients =
    detail.steps &&
    detail.steps.map((i) => (
      <>
        <li key={i.id} className="flex m-2 border-2 border-stone-100">
          <p className="mx-1">{i.amount}</p>
          <p className="mx-1">{i.unit}</p>
          <p className="mx-1">{i.name}</p>
        </li>
      </>
    ));

    const directions = detail.directions && detail.directions.map(d => (
      <>
      <li key={detail[d]} className='p-2'>
        <p>{d}</p>
      </li>
      </>
    ))

  const detailView = (
    <div className="w-1/2 py-5 flex flex-col items-center">
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-2xl">{detail.name}</h1>
        <h2>by {detail.username}</h2>
      </div>
      <div className="flex flex-col items-center mb-3">
        <img src={detail.image} alt="detail" width="75%" />
      </div>
      <div className="flex items-center justify-center my-2 max-w-fit bg-stone-300">
        <div className="flex flex-col px-2 border-r-2 border-stone-400">
          <div>
            Recipe Type: <div>{detail.category}</div>
          </div>
        </div>
        <div className="flex flex-col px-2 border-x-2 border-stone-400">
          <div>
            Prep Time: <div>{detail.prep_time}</div>
          </div>
        </div>
        <div className="flex flex-col px-2 border-x-2 border-stone-400">
          <div>
            Cook Time: <div>{detail.cook_time}</div>
          </div>
        </div>
        <div className="flex flex-col px-2 border-l-2 border-stone-400">
          <div>
            Cook Temp:{" "}
            <div>
              {detail.cook_temp} {detail.cook_unit}˚
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-200">
        <div className="flex">
          <p className="mx-1 text-xl font-semibold">{detail.yield_amount}</p>
          <p className="mx-1 text-xl font-semibold">{detail.yield_type}</p>
        </div>
        <ul className="flex flex-col items-center">{ingredients}</ul>
        <div>
        <ul className="bg-red-600">
          {directions}
        </ul>
      </div>
      </div>
    </div>
  );

  const editingView = (
    <div className="w-1/2 py-5 flex flex-col items-center">
    <div className="flex items-center flex-col">
      <h1 className="font-bold text-2xl">{detail.name}</h1>
      <h2>by {detail.username}</h2>
    </div>
    <div className="flex flex-col items-center mb-3">
      <img src={detail.image} alt="detail" width="75%" />
    </div>
    <div className="flex items-center justify-center my-2 max-w-fit bg-stone-300">
      <div className="flex flex-col px-2 border-r-2 border-stone-400">
        <div>
          Recipe Type: <div>{detail.category}</div>
        </div>
      </div>
      <div className="flex flex-col px-2 border-x-2 border-stone-400">
        <div>
          Prep Time: <div>{detail.prep_time}</div>
        </div>
      </div>
      <div className="flex flex-col px-2 border-x-2 border-stone-400">
        <div>
          Cook Time: <div>{detail.cook_time}</div>
        </div>
      </div>
      <div className="flex flex-col px-2 border-l-2 border-stone-400">
        <div>
          Cook Temp:{" "}
          <div>
            {detail.cook_temp} {detail.cook_unit}˚
          </div>
        </div>
      </div>
    </div>
    <div className="bg-stone-200">
      <div className="flex">
        <p className="mx-1 text-xl font-semibold">{detail.yield_amount}</p>
        <p className="mx-1 text-xl font-semibold">{detail.yield_type}</p>
      </div>
      <ul className="flex flex-col items-center">{ingredients}</ul>
      <div>
        <ul>
          {directions}
        </ul>
      </div>
    </div>
  </div>
  )

  return (
    <>
      <div className="py-16 flex flex-col items-center justify-start">
        {detailView}
        <button type="button" className="bg-stone-200 rounded-md p-1 hover:bg-stone-100" onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Cancel' : 'Edit this recipe'}</button>
      </div>
    </>
  );
};

export default RecipeDetail;
