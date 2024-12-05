'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store/useCartStore';
import { Product } from '@/lib/types';
import Button from './Button';
import toast from 'react-hot-toast';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      addItem(product);
      setIsLoading(false);
      toast.success('Added to cart');
    }, 500);
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="w-full"
      disabled={isLoading}
    >
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </Button>
  );
};

export default AddToCartButton;