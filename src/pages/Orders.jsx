import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Orders() {
  
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch('https://api.npoint.io/e42dff5533b656467775')
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);
   

    const handleUpdateStatus = (orderId, newStatus) => {

        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);

    };

    const handleDeleteOrder = orderId => {

        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);


        toast.success('Order deleted successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: true,
        });
    };

    return (
        <div className="p-4 bg-gradient-to-b from-purple-300 to bg-indigo-400 h-screen">
            <h2 className="text-2xl font-bold mb-4">Orders Management</h2>
            {orders.length === 0 ? (
                <p>No orders available.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border px-4 py-2">Order ID</th>
                                <th className="border px-4 py-2">Customer Name</th>
                                <th className="border px-4 py-2">Order Date</th>
                                <th className="border px-4 py-2">Status</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="border px-4 py-2">{order.orderID}</td>
                                    <td className="border px-4 py-2">{order.customerName}</td>
                                    <td className="border px-4 py-2">{order.orderDate}</td>
                                    <td className="border px-4 py-2">
                                        <select
                                            value={order.status}
                                            onChange={e => handleUpdateStatus(order.id, e.target.value)}
                                            className="bg-gray-100 border rounded px-2 py-1 w-full md:w-auto"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Canceled">Canceled</option>
                                            <option value="Shipped">Shipped</option>
                                        </select>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() => handleDeleteOrder(order.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Orders
