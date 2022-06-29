import { useState } from "react";
import Cookies from "js-cookie";

function handleError(err) {
    console.warn(err)
}

const StepForm = () => {
  const [items, setItems] = useState({
    amount: 0,
    unit: "",
    name: "",
  });
  const [itemList, setItemList] = useState([]);
  const [notes, setNotes] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList((p) => [...p, items]);
    setItems({
      amount: 0,
      unit: "",
      name: "",
    });
  };

  const addStep = async () => {
    const data = {
    
    }
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(data),
    }
    const response = await fetch(`/api/v1/recipe//`, options).catch(handleError);
    if(!response.ok) {
    throw new Error('Network response not ok');
    }
    const json = await response.json(); 
    console.log(json)
  };

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

      <form id="step-form" className="flex justify-center">
        <div>
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mx-2 py-1 px-2 font-bold border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white rounded-md transition-all"
        >
          Add Step
        </button>
      </form>
    </>
  );
};

export default StepForm;
