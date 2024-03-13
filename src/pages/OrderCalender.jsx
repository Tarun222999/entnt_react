import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrderCalendar = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch('https://api.npoint.io/e42dff5533b656467775')
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const ordersOnSelectedDate = orders.filter(order => {
        const orderDate = new Date(order.orderDate);
        return (
            orderDate.getDate() === selectedDate.getDate() &&
            orderDate.getMonth() === selectedDate.getMonth() &&
            orderDate.getFullYear() === selectedDate.getFullYear()
        );
    });

    const handleDateChange = date => {
        setSelectedDate(date);
    };


    return (
        <div className='flex justify-center items-start space-x-8 p-8 bg-gradient-to-b from-purple-300 to bg-indigo-400 h-screen'>
            <div className="w-1/2 relative">
                <h2 className="text-2xl font-bold mb-4">Orders Calendar View</h2>
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="border border-gray-300 rounded p-4 shadow"
                    activeStartDate={selectedDate}
                    onClickDay={handleDateChange}
                />
            </div>
            <div className="w-1/2 bg-gray-100 p-8 border border-gray-300 rounded">
                <h3 className="text-lg font-bold mb-4">
                    Orders on {selectedDate?.toDateString()}:
                </h3>
                {ordersOnSelectedDate.length === 0 ? (
                    <p>No orders due for delivery on this date.</p>
                ) : (
                    <ul className="grid  gap-4">
                        {ordersOnSelectedDate.map(order => (
                            <li
                                key={order.id}
                                className="bg-white p-4 border border-gray-300 rounded"
                            >
                                <span className="font-bold">Order ID:</span> {order.orderID},{' '}
                                <span className="font-bold">Customer:</span> {order.customerName}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OrderCalendar;
