import { useState } from "react";

export function FormComponent({ onSubmit }) {
  const [vendorID, setVendorID] = useState("");
  const [priceIDs, setPriceIDs] = useState([""]);
  const [quantities, setQuantities] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ vendorID, priceIDs, quantities });
  };

  const handleAddField = () => {
    setPriceIDs([...priceIDs, ""]);
    setQuantities([...quantities, ""]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-white">
        Vendor ID:
        <input className="bg-gray-400 text-white mx-2" type="number" value={vendorID} onChange={(e) => setVendorID(e.target.value)} minLength={4} maxLength={10} required />
      </label>
      {priceIDs.map((_, index) => (
        <div key={index} className="p-3">
          <label className="text-white">
            Price ID:
            <input className="bg-gray-400 w-3/5 px-2 mx-2" type="text" value={priceIDs[index]} onChange={(e) => setPriceIDs([...priceIDs.slice(0, index), e.target.value, ...priceIDs.slice(index + 1)])} required />
          </label>
          <label className="text-white">
            Quantity:
            <input className="bg-gray-400" type="number" value={quantities[index]} onChange={(e) => setQuantities([...quantities.slice(0, index), e.target.value, ...quantities.slice(index + 1)])} required />
          </label>
        </div>
      ))}
      <button className="rounded-full bg-gray-400 p-2" type="button" onClick={handleAddField}>Add Price ID and Quantity</button>
      <button className="rounded-full bg-green-400 p-2 mx-3" type="submit">Submit</button>
    </form>
  );
}
