import React from 'react'
import Product from '../components/Product'
import { useState, useEffect } from 'react'
import useProdcutStore from '../store/productStore'

import AddProduct from '../components/AddProduct';
function Products() {
    const { products, addProduct, deleteProduct, setProducts, editProduct } = useProdcutStore();

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${page * 20 - 20}`)
        const data = await res.json()
        if (data && data.products) {
            setProducts(data.products)
            setTotalPages(data.total)
        }
    }

    const handleDeleteProduct = (productId) => deleteProduct(productId);

    const handleAddProduct = (newProduct) => addProduct(newProduct);

    const handleEditProduct = (id, newProduct) => editProduct(id, newProduct)


    useEffect(() => {
        fetchProducts()
    }, [page])

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages / 20 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }



    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <div className='bg-gradient-to-b from-purple-300 to bg-indigo-400'>
            <div className='flex justify-between p-3'>
                <h2 className="mb-2 ml-4 text-lg font-medium dark:text-white text-gray-900">All Products</h2>
                <AddProduct
                    onCloseModal={onCloseModal}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    onAdd={handleAddProduct}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((prod) => (
                    <Product
                        key={prod.id}
                        prod={prod}
                        onDelete={handleDeleteProduct}
                        onCloseModal={onCloseModal}
                        setOpenModal={setOpenModal}
                        onEdit={handleEditProduct}
                    />
                ))}
            </div>
            {products.length > 0 && (
                <div className="pagination flex justify-center items-center mt-4">
                    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
                    {[...Array(totalPages / 20)].map((_, i) => (
                        <span key={i} className={page === i + 1 ? "pagination__selected mx-2" : "mx-2"} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                    ))}
                    <span onClick={() => selectPageHandler(page + 1)} className={page < totalPages / 20 ? "" : "pagination__disable"}>▶</span>
                </div>
            )}
        </div>


    )
}

export default Products
