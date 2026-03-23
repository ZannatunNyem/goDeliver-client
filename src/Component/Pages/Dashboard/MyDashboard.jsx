import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaTrash, FaCreditCard } from "react-icons/fa";
export default function MyDashboard() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: parcels = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-parcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      return res.data;
    },
  });
  console.log(parcels);

  const handleDelete = (id) => {
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

        fetch(`http://localhost:5000/parcels/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          });
      }
    });
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-zebra w-full ">
        <thead className="bg-gray-300">
          <tr>
            <th>No</th>
            <th>Title</th>
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
              {/* ..index.. */}
              <td>{index + 1}</td>

              {/* ..title.. */}
              <td>{parcel.parcelName}</td>

              {/* ..type.. */}
              <td>{parcel.parcelType}</td>

              {/* ..Date.. */}
              <td>{new Date(parcel.creation_date).toLocaleDateString()}</td>

              {/* ..cost.. */}
              <td>৳{parcel.cost}</td>

              {/* ..Payment.. */}
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

              {/* ..buttons.. */}
              <td className="flex items-center gap-3">
                <Link to={`/dashboard/payment/${parcel._id}`}>
                  <button className="btn btn-sm btn-outline border-blue-300 text-blue-500 hover:bg-blue-300 hover:text-blue-900 flex items-center gap-1">
                    <FaCreditCard /> Pay
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(parcel._id)}
                  className="btn btn-sm btn-outline btn-error flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
