import React from 'react';
import { useMockData } from '../hooks/useMockData';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-tech-card border border-tech-border rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-[0_0_15px_rgba(5,217,232,0.2)] flex flex-col">
        <div className="relative h-48">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"/>
            <div className="absolute top-0 right-0 bg-tech-primary text-white text-[10px] font-bold px-2 py-0.5 m-2 rounded uppercase tracking-wider">
                New
            </div>
        </div>
        <div className="p-3 flex flex-col flex-grow">
            <h3 className="text-base font-bold text-white truncate">{product.name}</h3>
            <p className="text-xs text-tech-secondary">{product.seller}</p>
            <p className="text-xs text-tech-muted my-2 line-clamp-2 flex-grow">{product.description}</p>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-tech-border/50">
                <span className="text-lg font-bold text-white">£{product.price.toLocaleString()}</span>
                <button className="bg-transparent border border-tech-primary text-tech-primary px-3 py-1 rounded text-xs font-semibold hover:bg-tech-primary hover:text-white transition-colors">
                    View
                </button>
            </div>
        </div>
    </div>
);


const Commerce: React.FC = () => {
  const { products } = useMockData();

  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 pb-2 border-b border-tech-border">
            <div>
                <h2 className="text-2xl font-bold text-white">Commerce Matrix</h2>
                <p className="text-sm text-tech-secondary">Acquire unique assets.</p>
            </div>
            <button className="bg-tech-primary text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-white hover:text-tech-primary transition-colors shadow-lg shadow-tech-primary/20 whitespace-nowrap">
                + List Product
            </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    </div>
  );
};

export default Commerce;