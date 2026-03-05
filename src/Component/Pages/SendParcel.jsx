import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
// import { useNavigate } from "react-router-dom";

const generateTrackingID = () => {
  const data = new Date();
  const datePart = data.toISOString().split("T")[0].replace(/-/g, "");
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `PCL-${datePart}-${rand}`;
};

export default function AddParcel() {
  const { register, handleSubmit, watch, reset } = useForm();
  const { user } = useAuth();
  const parcelType = watch("parcelType");

  // const navigate = useNavigate();
  const calculateCost = (data) => {
    const type = data.parcelType;
    const weight = Number(data.parcelWeight);
    let totalCost = 0;

    if (type === "Document") {
      totalCost = 60;
    } else {
      totalCost = weight <= 3 ? 110 : 110 + (weight - 3) * 40;
    }

    return totalCost;
  };

  const onSubmit = (data) => {
    const totalCost = calculateCost(data);

    // STEP 1: Initial confirmation
    Swal.fire({
      title: "Confirm Booking?",
      html: `
        <p>Parcel Type: <strong>${data.parcelType}</strong></p>
        ${data.parcelType === "Not Document" ? `<p>Weight: <strong>${data.parcelWeight} kg</strong></p>` : ""}
        <p>Total Cost: <strong>${totalCost} Tk</strong></p>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // STEP 2: Show detailed breakdown
        Swal.fire({
          title: "Booking Details",
          html: `
            <p><strong>Parcel Type:</strong> ${data.parcelType}</p>
            ${data.parcelType === "Not Document" ? `<p><strong>Weight:</strong> ${data.parcelWeight} kg</p>` : ""}
            <p><strong>Sender:</strong> ${data.senderName}</p>
            <p><strong>Receiver:</strong> ${data.receiverName}</p>
            <p><strong>Sender Zone:</strong> ${data.senderRegion}</p>
            <p><strong>Receiver Zone:</strong> ${data.receiverRegion}</p>
            <p><strong>Total Cost:</strong> ${totalCost} Tk</p>
          `,
          showCancelButton: true,
          confirmButtonText: "Proceed to Payment",
          cancelButtonText: "Continue Editing",
          icon: "info",
        }).then((detailResult) => {
          if (detailResult.isConfirmed) {
            const parcelData = {
              ...data,
              cost: totalCost,
              created_by: user.email,
              payment_status: "unpaid",
              delivery_status: "not_collected",
              creation_date: new Date().toISOString(),
              tracking_id: generateTrackingID(),
            };
            //  navigate("/payment", { state: { parcelData } });
            console.log("Ready for payment:", parcelData);

            // server

            Swal.fire({
              icon: "success",
              title: "Redirecting to Payment...",
              timer: 1500,
              showConfirmButton: false,
            });
            // Here you can navigate to payment page
            // e.g., navigate("/payment") if using react-router
            reset(); // reset form after confirming
          } else {
            // Continue editing, do nothing
          }
        });
      } else {
        // Cancelled Step 1, do nothing
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Add Parcel</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-100 shadow-xl p-6 space-y-6"
      >
        {/* Parcel Type */}
        <div>
          <h3 className="font-semibold mb-2">Parcel Type</h3>
          <div className="flex gap-6">
            <label className="label cursor-pointer gap-2">
              <input
                {...register("parcelType")}
                type="radio"
                value="Document"
                className="radio radio-primary"
              />
              Document
            </label>
            <label className="label cursor-pointer gap-2">
              <input
                {...register("parcelType")}
                type="radio"
                value="Not Document"
                className="radio radio-primary"
              />
              Not Document
            </label>
          </div>
        </div>

        {/* Parcel Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            {...register("parcelName", { required: true })}
            type="text"
            placeholder="Parcel Name"
            className="input input-bordered w-full"
          />
          <input
            {...register("parcelWeight", {
              required: parcelType === "Not Document",
            })}
            type="number"
            placeholder="Parcel Weight (KG)"
            className="input input-bordered w-full disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            disabled={parcelType !== "Not Document"}
          />
        </div>

        {/* Sender & Receiver */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Sender Details</h3>
            <div className="space-y-3">
              <input
                {...register("senderName", { required: true })}
                type="text"
                placeholder="Sender Name"
                className="input input-bordered w-full"
              />
              <select
                {...register("senderRegion")}
                className="select select-bordered w-full"
              >
                <option value="">Select your region</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Khulna</option>
              </select>
              <textarea
                {...register("senderAddress")}
                placeholder="Address"
                className="textarea textarea-bordered w-full"
              ></textarea>
              <input
                {...register("senderContact")}
                type="text"
                placeholder="Sender Contact No"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Receiver Details</h3>
            <div className="space-y-3">
              <input
                {...register("receiverName", { required: true })}
                type="text"
                placeholder="Receiver Name"
                className="input input-bordered w-full"
              />
              <select
                {...register("receiverRegion")}
                className="select select-bordered w-full"
              >
                <option value="">Select receiver region</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Khulna</option>
              </select>
              <textarea
                {...register("receiverAddress")}
                placeholder="Receiver Address"
                className="textarea textarea-bordered w-full"
              ></textarea>
              <input
                {...register("receiverContact")}
                type="text"
                placeholder="Receiver Contact No"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
}
