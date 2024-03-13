import React, { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
function AddProduct({ onCloseModal, openModal, setOpenModal, onAdd }) {

    const [pname, setPname] = useState('')
    const [pdesc, setPdesc] = useState('')
    const [pcost, setPcost] = useState('')
    const [pdisc, setPdisc] = useState('')
    const [pstock, setPstock] = useState('')


    const handleAddProduct = () => {
        if (pname === "" || pdesc === "" || pcost === ""
            || pdisc === "" || pstock === ""
        ) {

            alert('please provide all details')
            return;
        }
        const newProduct = {
            title: pname,
            desc: pdesc,
            price: pcost,
            discountPercentage: pdisc,
            stock: pstock,
            thumbnail: 'https://cdn4.avada.io/media/shopify/t2MfIlB.png',
            id: Math.floor(Math.random() * 100)
        };
        setPname('');
        setPdesc('');
        setPcost('');
        setPdisc('');
        setPstock('');

        onAdd(newProduct)

        onCloseModal()
    }


    return (
        <>
            <Button onClick={() => setOpenModal(true)} className='mr-16'> Add Product</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Product Details</h3>
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

                        <Button onClick={handleAddProduct} className='mr-16'> Add Product</Button>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddProduct
