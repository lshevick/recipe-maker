import { useState } from "react";
import Cookies from "js-cookie";
import StepForm from "./StepForm";

const defaultState = {
  name: "",
  category: "",
  image: null,
  is_public: false,
  prep_time: 0,
  cook_time: 0,
  yield_amount: 0,
  yield_type: "",
  cook_temp: 0,
  cook_unit: "F",
  notes: "",
  steps: [],
  directions: [],
};

function handleError(err) {
  console.warn(err);
}

const RecipeForm = () => {
  const [state, setState] = useState(defaultState);
  const [preview, setPreview] = useState("");
  const [step, setStep] = useState([]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setState((p) => ({ ...p, image: file }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("category", state.category);
    formData.append("image", state.image);
    formData.append("is_public", state.is_public);
    formData.append("prep_time", state.prep_time);
    formData.append("cook_time", state.cook_time);
    formData.append("yield_amount", state.yield_amount);
    formData.append("yield_type", state.yield_type);
    formData.append("cook_temp", state.cook_temp);
    console.log(state.steps);
    formData.append("steps", JSON.stringify(state.steps));
    formData.append('directions', JSON.stringify(state.directions))

    const options = {
      method: "POST",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };
    const response = await fetch(`/api/v1/recipes/`, options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const json = await response.json();
    console.log(json);
    setState(defaultState);
    setStep([]);
  };

  return (
    <>
      <div className="flex mt-10 sm:mt-0 flex-col items-center justify-start sm:w-2/3 w-full sm:mx-auto">
        <form
          id="recipe-form"
          onSubmit={handleSubmit}
          className="bg-stone-100 flex sm:p-16 pt-16 w-full flex-wrap justify-center items-center"
        >
          <div className="flex justify-start w-full items-center">
          <h1 className="text-3xl font-bold w-full sm:w-1/3 lg:w-1/6">Basic Info</h1>
          <hr className="border-t-2 border-solid border-stone-400 w-full" />
          </div>
          <div className="flex flex-col sm:flex-row w-full">
            <div className="sm:w-1/3 relative h-full">
              <label htmlFor="image" className="hidden">
                add an image
              </label>
              {state.image ? (
                <img
                  src={preview}
                  alt="preview mini"
                  width="100%"
                  className=""
                />
              ) : (
                <div className="bg-stone-500 w-full h-full flex flex-col sm:absolute top-0 items-center justify-center rounded-md z-30 p-5 sm:py-20">
                  <span className="scale-150 text-3xl text-white">+</span>
                  <p className="text-white">add an image</p>
                </div>
              )}
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleImage}
                className="opacity-0 m-3 p-2 cursor-pointer absolute top-4 z-30"
              />
            </div>

            <div className="flex flex-col z-50 sm:pb-14 p-0">
              <label htmlFor="name" className="hidden">Name</label>
              <input
                className="m-3 p-1 sm:w-1/3"
                type="text"
                name="name"
                id="name"
                value={state.name}
                onChange={handleInput}
                placeholder="Name"
              />
              <div className="flex my-5">
                <div className="flex justify-center">
                  <div className="flex mx-5">
                    <button
                      className="bg-stone-200 h-6 w-6 rounded-lg"
                      type="button"
                      onClick={() =>
                        setState((p) => ({ ...p, is_public: !state.is_public }))
                      }
                    >
                      {state.is_public ? "x" : ""}
                    </button>
                    <p className="ml-2">Make Public</p>
                  </div>
                </div>
                <div className="flex mx-5">
                  <button
                    className="bg-stone-200 h-6 w-6 rounded-lg"
                    type="button"
                    onClick={() =>
                      setState((p) => ({ ...p, is_public: !state.is_public }))
                    }
                  >
                    {state.is_public ? "" : "x"}
                  </button>
                  <p className="ml-2">Make Private</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap w-full bg-stone-200 items-center justify-center">
            <div className="flex flex-col sm:w-1/3 w-full">
              <label htmlFor="category" className="invisible">
                Category
              </label>
              <select
                className="m-3 h-1/2"
                name="category"
                id="category"
                value={state.category}
                onChange={handleInput}
              >
                <option value="">Recipe Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            <div className="flex flex-col w-1/4">
              <label htmlFor="prep_time">Prep Time</label>
              <input
                className="m-3 p-1"
                type="number"
                name="prep_time"
                id="prep_time"
                value={state.prep_time}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label htmlFor="cook_time">Cook Time</label>
              <input
                className="m-3 p-1"
                type="number"
                name="cook_time"
                id="cook_time"
                value={state.cook_time}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label htmlFor="cook_temp">Cook Temp</label>
              <div className="flex items-center my-3">
                <input
                  className="sm:m-3 p-1 sm:w-1/3 w-full"
                  type="number"
                  name="cook_temp"
                  id="cook_temp"
                  value={state.cook_temp}
                  onChange={handleInput}
                />
                <select
                  className="h-1/2"
                  name="cook_unit"
                  id="cook_unit"
                  value={state.cook_unit}
                  onChange={handleInput}
                >
                  <option value="F">F??</option>
                  <option value="C">C??</option>
                </select>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <label htmlFor="yield_amount">This Recipe makes</label>
              <input
                className="sm:m-3 m-1 p-1 w-1/6"
                type="number"
                name="yield_amount"
                id="yield_amount"
                value={state.yield_amount}
                onChange={handleInput}
                placeholder="Yield Amount"
              />
              <label htmlFor="yield_type" className="hidden">
                Yield Type
              </label>
              <input
                className="m-3 p-1"
                type="text"
                name="yield_type"
                id="yield_type"
                value={state.yield_type}
                onChange={handleInput}
                placeholder="Yield Type"
              />
            </div>
          </div>
        </form>

        <StepForm {...state} setState={setState} step={step} setStep={setStep} />

        <div className="w-5/6 mx-auto flex justify-end">
          <button
            type="submit"
            className=" mt-2 font-bold text-green-700 hover:bg-green-600 hover:text-stone-100 px-3 py-1 rounded-sm border-2 border-green-600 transition-all"
            form="recipe-form"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeForm;
