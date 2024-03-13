import { create } from "zustand";

const useProdcutStore=create((set)=>({
    products:[],
    addProduct: (product) => set((state) => ({ products: [product,...state.products] })),
    deleteProduct:(productId)=>set((state)=>({products:state.products.filter((product)=>product.id!==productId)})),
    setProducts:(newProducts)=>set({products:newProducts}),
    editProduct: (productId, updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      ),
    })),
}))

export default useProdcutStore