import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

export default function MyDashboard() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["my-parcels", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  console.log(parcels);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // deleted
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-zebra w-full ">
        <thead className="bg-gray-300">
          <tr>
            <th>No</th>
            <th>Type</th>
            <th>Create Date</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {parcels.map((parcel, index) => (
            <tr
              key={parcel._id}
              className={index % 2 === 0 ? "bg-base-100" : "bg-gray-200"}
            >
              {/* Index */}
              <td>{index + 1}</td>

              {/* Type */}
              <td>{parcel.parcelType}</td>

              {/* Creation Date */}
              <td>{new Date(parcel.creation_date).toLocaleDateString()}</td>

              {/* Cost */}
              <td>৳{parcel.cost}</td>

              {/* Payment Status */}
              <td>
                <span
                  className={`badge ${
                    parcel.payment_status === "paid"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {parcel.payment_status}
                </span>
              </td>

              {/* Buttons */}
              <td className="flex gap-2">
                <button className="btn btn-info btn-xs">View</button>

                <button
                  className="btn btn-success btn-xs"
                  disabled={parcel.payment_status === "paid"}
                >
                  Pay
                </button>

                <button
                  onClick={() => handleDelete(parcel._id)}
                  className="btn btn-error btn-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
