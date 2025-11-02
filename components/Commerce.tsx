
import React from 'react';
import { useMockData } from '../hooks/useMockData';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <h3 className="text-lg font-bold text-b-dark-green">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">by {product.seller}</p>
            <p className="text-xs text-gray-500 my-2">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-b-green">₦{product.price.toLocaleString()}</span>
                <button className="bg-b-orange text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors">
                    View Item
                </button>
            </div>
            <div className="text-xs text-gray-400 mt-3">
                <p>Copyright © {new Date().getFullYear()} {product.seller}. All rights reserved.</p>
            </div>
        </div>
    </div>
);


const Commerce: React.FC = () => {
  const { products } = useMockData();

  return (
    <div>
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Commerce: The Marketplace</h2>
            <p className="text-b-green mt-2">Discover and purchase unique crafts and digital products from Bauchi's finest creatives.</p>
        </div>
        <div className="text-right mb-6">
            <button className="bg-b-dark-green text-white px-5 py-2 rounded-lg font-semibold hover:bg-b-green transition-colors">
                + List a New Product
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    </div>
  );
};

export default Commerce;
