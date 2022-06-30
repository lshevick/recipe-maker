import { useState } from "react";
// import Cookies from "js-cookie";

// function handleError(err) {
//   console.warn(err);
// }

const StepForm = ({ setState }) => {
  const [items, setItems] = useState({
    amount: 0,
    unit: "",
    name: "",
    notes: "",
  });
  const [step, setStep] = useState([]);
  const [notes, setNotes] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep((p) => [...p, items]);
    setItems({
      amount: 0,
      unit: "",
      name: "",
    });
  };

  const stepSubmit = (e) => {
    e.preventDefault();
    setItems((p) => ({ ...p, notes: notes }));
    setStep((p) => [...p, items]);
    setState((p) => ({ ...p, steps: step }));
    setNotes("");
    setItems({
      amount: 0,
      unit: "",
      name: "",
      notes: "",
    });
  };

  // need to somehow get this form data for the steps into the form for the total recipe.
  // I added the steps as a JSON field in the recipe model because I couldn't figure out how to get the id for the recipe to do a POST request before the recipe was submitted
  // SO here we are. I think i need to set the state i have here to the state for the steps property in the recipe state?
  // Maybe use the useReducer hook?
  // once you get the steps on the recipe object you can start working on the editing features and then get the lists of recipes displaying properly in the recipe page,
  // THEN you can start working on frontend stuff

  return (
    <>
      <form
        id="ingredient-form"
        className="bg-stone-100 w-full flex justify-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={items.amount}
            onChange={handleChange}
          />
          <select
            name="unit"
            id="unit"
            value={items.unit}
            onChange={handleChange}
          >
            <option value="">Unit</option>
            <option value="cups">Cups</option>
            <option value="tbs">Tablespoon</option>
            <option value="tsp">Teaspoon</option>
          </select>

          <label htmlFor="name">Ingredient</label>
          <input
            type="text"
            name="name"
            id="name"
            value={items.name}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="mx-2 font-extrabold border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white p-2 rounded transition-all"
        >
          +
        </button>
      </form>

      <form
        id="step-form"
        onSubmit={stepSubmit}
        className="flex justify-center"
      >
        <div>
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            id="notes"
            value={items.notes}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="mx-2 py-1 px-2 font-bold border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white rounded-md transition-all"
        >
          Add Step
        </button>
      </form>
        <div> 
            <ul>
                {items ? step.map(i => (
                    <li key={i.name} className='flex'>
                        <p>{i.amount}</p>
                        <p>{i.unit}</p>
                        <p>{i.name}</p>
                    </li>
                ))
                :
                (<p>enter an ingredient</p>)
                }
            </ul>
        </div>
    </>
  );
};

export default StepForm;
