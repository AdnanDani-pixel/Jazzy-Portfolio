'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-sm"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/products/${id}`}>
        <div className="aspect-w-1 aspect-h-1 mb-4">
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </Link>
    </motion.div>
  );
};

export default ProductCard;