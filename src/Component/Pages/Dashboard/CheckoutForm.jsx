import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { parcelId } = useParams();
  const navigate = useNavigate();
  console.log(parcelId);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("payment method", paymentMethod);

      fetch(`http://localhost:5000/parcels/payment/${parcelId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Payment Successful",
              text: "Your parcel payment has been completed.",
              timer: 2000,
              showConfirmButton: false,
            });

            navigate("/dashboard/mydashboard");
          }
        });
    }
  };
  return (
    <div className="mt-15">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-200 p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          disabled={!stripe}
          className="btn border-0 bg-gray-500 text-white w-full "
        >
          Pay For Parcel Pickup
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
