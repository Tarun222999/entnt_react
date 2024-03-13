import React, { useState } from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
function Product({ prod, onDelete, setOpenModal, onEdit }) {


    const [editOpenModel, setEditOpenModel] = useState(false)

    const handleEditClick = () => {
        setEditOpenModel(true)
    }

    const handleDeleteClick = () => {
        onDelete(prod.id);
    };

    const handleAddProduct = () => {

        const newProduct = {
            title: pname || prod.title,
            desc: pdesc || prod.desc,
            price: pcost || prod.price,
            discountPercentage: pdisc || prod.discountPercentage,
            stock: pstock || prod.stock,
            thumbnail: prod.thumbnail,
            id: Math.floor(Math.random() * 100)
        };
        setPname('');
        setPdesc('');
        setPcost('');
        setPdisc('');
        setPstock('');
        onEdit(prod.id, newProduct)
        onCloseModal()
    }


    const oneditCloseModel = () => {
        setEditOpenModel(false)
    }
    const [pname, setPname] = useState('')
    const [pdesc, setPdesc] = useState('')
    const [pcost, setPcost] = useState('')
    const [pdisc, setPdisc] = useState('')
    const [pstock, setPstock] = useState('')
    return (
        <div className="ml-2 mt-2  w-60 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img className="h-48 w-full object-cover object-center" src={prod.thumbnail} alt={prod.title} />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{prod.title}</h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{prod.desc}</p>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{prod.stock} left</p>
                    <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">{prod.price}</p>
                    <p className="ml-auto text-base font-medium text-green-500">{prod.discountPercentage}</p>
                    <MdOutlineEdit onClick={handleEditClick} className="ml-2 cursor-pointer text-pink-500 hover:text-pink-600" />
                    <MdOutlineDeleteOutline className="mr-2 cursor-pointer text-red-500 hover:text-red-600" onClick={handleDeleteClick} />
                </div>
            </div>


            <>

                <Modal show={editOpenModel} size="md" onClose={oneditCloseModel} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Product Details</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Product Name" />
                                </div>
                                <TextInput
                                    id="name"
                                    placeholder="Iphone12"
                                    value={pname}
                                    onChange={(event) => setPname(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="pdesc" value="Product Description" />
                                </div>
                                <TextInput
                                    id="pdesc"
                                    placeholder="Blazing fast"
                                    value={pdesc}
                                    onChange={(event) => setPdesc(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="pcost" value="Product Cost" />
                                </div>
                                <TextInput
                                    id="pcost"
                                    placeholder="10USD"
                                    value={pcost}
                                    onChange={(event) => setPcost(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="pdisc" value="Product discount" />
                                </div>
                                <TextInput
                                    id="pdisc"
                                    placeholder="22"
                                    value={pdisc}
                                    onChange={(event) => setPdisc(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="pstock" value="Product Stock" />
                                </div>
                                <TextInput
                                    id="pstock"
                                    placeholder="22"
                                    value={pstock}
                                    onChange={(event) => setPstock(event.target.value)}
                                    required
                                />
                            </div>

                            <Button onClick={handleAddProduct} className='mr-16'> Save Product</Button>

                        </div>
                    </Modal.Body>
                </Modal>
            </>

        </div>
    )
}

export default Product
