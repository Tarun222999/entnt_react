import React from 'react'
import Card from '../components/Card';

function Dashboard() {
    const totalProducts = 100;
    const totalOrders = 10;

    return (
        <section className='bg-gradient-to-b from-purple-300 to bg-indigo-400 pb-[68px] py-16 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h1 className="text-3xl font-extrabold text-white">
                        Welcome to Dashboard
                    </h1>
                    <p className='mt-4 text-xl pt-2 text-black-300'>
                        Manage Your Enterprise Efficiently
                    </p>
                </div>
            </div>
            <div className='mt-12 mx-2 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Card
                    title='Products'
                    text='Manage all Products'
                    image='https://media.istockphoto.com/id/1388226392/photo/an-unrecognizable-caucasian-woman-buying-some-cosmetic-products.jpg?s=612x612&w=0&k=20&c=TWTMBzDydDPqjg5ZCV2pmb6IkqdQZzRaKwd0jPJ71Gw='
                    to='/products'
                />
                <Card
                    title='Orders'
                    text='Manage all Orders'
                    image='https://media.istockphoto.com/id/1311600080/photo/small-shipping-packages-on-a-notebook-with-the-inscription-online-shopping.jpg?s=612x612&w=0&k=20&c=vDPqIQsqzCvEaEZF2R5IeGz_8Gv-YRI_HzbKux8TaqM='
                    to='/orders'
                />
                <Card
                    title='Order Calender'
                    text='Manage all Orders by dates'
                    image='https://www.shutterstock.com/image-photo/close-on-employee-woman-hand-600nw-1729295335.jpg'
                    to='/ordercalender'
                />
            </div>
        </section>
    );
}

export default Dashboard
