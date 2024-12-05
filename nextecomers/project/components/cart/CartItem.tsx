'use client';

import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/lib/store/useCartStore';
import { Product } from '@/lib/types';

interface CartItemProps extends Product {
  quantity: number;
}

const CartItem = ({ id, name, price, imageUrl, quantity }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="relative w-24 h-24">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <select
            value={quantity}
            onChange={(e) => updateQuantity(id, Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            onClick={() => removeItem(id)}
            className="text-red-500 hover:text-red-600"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;