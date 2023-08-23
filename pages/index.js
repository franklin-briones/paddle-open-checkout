import { useState } from "react";
import { FormComponent } from "../components/FormComponent";
import Script from "next/script";

export function PaddleLoaderPB({ vendorID, onLoaded }) {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/v2/paddle.js"
      onLoad={() => {
        Paddle.Environment.set("sandbox");
        Paddle.Setup({
          seller: Number(vendorID)
        });
        onLoaded(); // Notify that the script is loaded
      }}
    />
  );
}

export default function IndexPage() {
  const [vendorID, setVendorID] = useState(null);
  const [priceIDs, setPriceIDs] = useState(null);
  const [quantities, setQuantities] = useState(null);
  const [paddleLoaded, setPaddleLoaded] = useState(false); // Keep track of whether Paddle is loaded

  const handleSubmit = (data) => {
    setVendorID(data.vendorID);
    setPriceIDs(data.priceIDs);
    setQuantities(data.quantities);
  };

  // Called when Paddle is loaded
  const handlePaddleLoaded = () => {
    setPaddleLoaded(true);
    myJavascriptFunction(priceIDs, quantities); // Call the function after Paddle is loaded
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-600 py-6 sm:py-12 p-10 tex-white">
      <div className="text-3xl font-bold text-white">Use this page to create test checkout data in your sandbox account</div>
      <h3 className="text-white">Email warning:</h3>
      <p className="text-white">When testing, be aware that any subsciption you set up that unless cancelled you will get email receipts for and renewal emails for.</p>
      <p className="text-white">I suggest using a test email that will go nowhere such as myName.test@paddle.com</p>
      <br />
      <br />
      <p className="text-white">Please have the following values handy:</p>
      <ol>
        <li className="text-white">Your seller ID: a 5 digit number that corresponds to your sandbox account that you can find under Developer Tools → Authentication</li>
        <li className="text-white">Any priceIDs you'd like to pass to the checkout, these are created for each product</li>
        <li className="text-white">Any corresponding quantities for each priceID, please make sure that this quantity corresponds to any quantity limits you set on its respective priceID</li>
      </ol>
       <FormComponent onSubmit={handleSubmit} />
      {vendorID && <PaddleLoaderPB vendorID={vendorID} onLoaded={handlePaddleLoaded} />}
    </div>
  );
}

function myJavascriptFunction(priceIDs, quantities) {
  const items = priceIDs.map((priceId, index) => ({
    priceId,
    quantity: Number(quantities[index])
  }));

  Paddle.Checkout.open({
    marketing_consent: 0,
    settings: {
      theme: "light",
    },
    items
  });
}
