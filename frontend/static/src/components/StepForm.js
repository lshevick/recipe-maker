import { useState } from 'react';

const StepForm = () => {
    const [items, setItems] = useState({
        amount: 0,
        unit: '',
        name: '',
    })  
    const [itemList, setItemList] = useState([]);

    const handleChange = e => {
        const {name, value} = e.target;
        setItems(p => ({...p, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setItemList(p => ([...p, items]))
        setItems({
            amount: 0,
            unit: '',
            name: '',
        })
        console.log(itemList);
    }

    

return (
<>
<form id="step-form" className='bg-stone-100 w-full flex justify-center' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name='amount' id='amount' value={items.amount} onChange={handleChange} />
                    <select name="unit" id="unit" value={items.unit} onChange={handleChange}>
                        <option value="">Unit</option>
                        <option value="cups">Cups</option>
                        <option value="tbs">Tablespoon</option>
                        <option value="tsp">Teaspoon</option>
                    </select>

                    <label htmlFor="name">Ingredient</label>
                    <input type="text" name='name' id='name' value={items.name} onChange={handleChange} />
                </div>
                <button type='submit' className='mx-2 font-extrabold border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white p-2 rounded transition-all'>+</button>
            </form>
</>
);
}

export default StepForm