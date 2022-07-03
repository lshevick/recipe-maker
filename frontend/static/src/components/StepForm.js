import { useState } from "react";
// import Cookies from "js-cookie";

// function handleError(err) {
//   console.warn(err);
// }

const StepForm = ({ setState, step, setStep }) => {
  const [items, setItems] = useState({
    id: 1,
    amount: 0,
    unit: "",
    name: "",
  });
  // const [step, setStep] = useState([]);
  const [direction, setDirection] = useState([])
  const [notes, setNotes] = useState({
    id: 0,
    directions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep((p) => [...p, items]);
    setItems({
      id: items.id,
      amount: 0,
      unit: "",
      name: "",
    });
  };

  const stepSubmit = (e) => {
    e.preventDefault();
    // console.log(notes)
    // setStep((p) => [...p, items]);
    (step && setState((p) => ({ ...p, steps: step })));
    setState((p) => ({ ...p, directions: direction }));
    setNotes({id: notes.id, directions: ""});
    setItems({
      id: items.id,
      amount: 0,
      unit: "",
      name: "",
    });
  };

  const removeIngredient = (id) => {
    console.log(step, 'before filter')
    // need to finish this function to remove specific items from state

    // step.find(item => item.id === id)
    setStep([...step].filter(item => item.id !== id))
    console.log(step, 'after filter')
  }

  return (
    <>
      <form
        id="ingredient-form"
        className="bg-stone-100 w-full flex flex-col items-center justify-center p-3"
        onSubmit={handleSubmit}
        >
        <div>
          <ul>
            {items ? (
              step.map((i) => (
                <li key={i.id} className="flex">
                  <p>{i.amount}</p>
                  <p>{i.unit}</p>
                  <p>{i.name}</p>
                  <button type="button" onClick={() => removeIngredient()}>-</button>
                </li>
              ))
            ) : (
              <p>enter an ingredient</p>
            )}
          </ul>
        </div>

        <div className="flex">
        <div className="flex sm:flex-row flex-col bg-stone-200 p-3 items-start sm:items-center">
          <div className="flex flex-col sm:flex-row">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={items.amount}
              onChange={handleChange}
              />
          </div>
          <select
            className="m-1"
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

          <div className="flex flex-col sm:flex-row w-full">
            <label htmlFor="name">Ingredient</label>
            <input
              type="text"
              name="name"
              id="name"
              value={items.name}
              onChange={handleChange}
              />
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="mx-2 font-extrabold border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white p-2 rounded transition-all"
            onClick={() => setItems(p => ({...p, id: items.id + 1}))}
            >
            +
          </button>
        </div>
      </div>
      </form>

      <form
        id="step-form"
        onSubmit={stepSubmit}
        className="flex justify-center bg-stone-300 w-full py-2"
      >
        <div>
          <label htmlFor="notes" className="hidden">Notes</label>
          <textarea
            className="text-black rounded-md m-1 p-1"
            rows="4"
            cols="25"
            type="text"
            name="notes"
            id="notes"
            value={notes.directions}
            onChange={(e) => setNotes((p) => ({ ...p, directions: e.target.value }))}
            placeholder="enter your directions here"
          ></textarea>
        </div>
        <div className="flex items-end">
        <button
          type="submit"
          className="mx-2 py-1 px-2 font-bold border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white rounded-md transition-all"
          onClick={() => {
            setNotes((p) => ({...p, id: notes.id + 1}))
            setDirection(p => [...p, notes.directions])}}
          >
          Add Step
        </button>
          </div>
      </form>
    </>
  );
};

export default StepForm;
