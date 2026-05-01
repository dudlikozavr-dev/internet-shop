"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  image: string;
  category: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Халат шёлковый «Нежность»",
    oldPrice: 4200,
    newPrice: 2520,
    discount: 40,
    image: "/products/robe-1.jpg",
    category: "Халаты",
  },
  {
    id: 2,
    name: "Пижама «Утренний шёлк»",
    oldPrice: 3800,
    newPrice: 2280,
    discount: 40,
    image: "/products/pajama-1.jpg",
    category: "Пижамы",
  },
  {
    id: 3,
    name: "Сорочка атласная «Луна»",
    oldPrice: 2100,
    newPrice: 1260,
    discount: 40,
    image: "/products/nightgown-1.jpg",
    category: "Сорочки",
  },
  {
    id: 4,
    name: "Халат «Шарлотта» с поясом",
    oldPrice: 5100,
    newPrice: 2550,
    discount: 50,
    image: "/products/robe-2.jpg",
    category: "Халаты",
  },
  {
    id: 5,
    name: "Пижама «Парижское утро»",
    oldPrice: 3400,
    newPrice: 2380,
    discount: 30,
    image: "/products/pajama-2.jpg",
    category: "Пижамы",
  },
  {
    id: 6,
    name: "Комплект «Лёгкость»",
    oldPrice: 4600,
    newPrice: 3220,
    discount: 30,
    image: "/products/set-1.jpg",
    category: "Комплекты",
  },
  {
    id: 7,
    name: "Халат «Вечерний» кружево",
    oldPrice: 4800,
    newPrice: 2880,
    discount: 40,
    image: "/products/robe-3.jpg",
    category: "Халаты",
  },
  {
    id: 8,
    name: "Сорочка «Белая ночь»",
    oldPrice: 1900,
    newPrice: 990,
    discount: 48,
    image: "/products/nightgown-2.jpg",
    category: "Сорочки",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative bg-white rounded-sm overflow-hidden cursor-pointer"
    >
      {/* Product image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EAE2]">
        {/* Placeholder gradient — replace with next/image */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#E8DDD5] to-[#C9BAB0] flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="font-fraunces italic text-[#8a7068]/40 text-sm text-center px-4">
            {product.category}
          </span>
        </div>

        {/* Discount badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="sale-badge">−{product.discount}%</span>
        </div>

        {/* Add to cart button — appears on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-3">
          <button
            aria-label={`Добавить в корзину: ${product.name}`}
            className="w-full bg-dark text-cream font-inter text-xs font-semibold py-3 flex items-center justify-center gap-2 tracking-wide hover:bg-[#1a1614] transition-colors"
          >
            <ShoppingBag size={14} />
            В корзину
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-3 md:p-4">
        <p className="font-inter text-dark text-sm leading-snug line-clamp-2 mb-2">
          {product.name}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-inter font-semibold text-sale text-base">
            {formatPrice(product.newPrice)}
          </span>
          <span className="font-inter text-xs text-dark/40 line-through">
            {formatPrice(product.oldPrice)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function DealsGrid() {
  return (
    <section id="deals" className="bg-cream py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8 md:mb-10"
        >
          <div>
            <span className="font-inter text-sale text-xs tracking-widest uppercase mb-2 block">
              Акция
            </span>
            <h2 className="text-display font-fraunces font-semibold text-dark">
              Скидки до −50%
            </h2>
          </div>
          <a
            href="/catalog"
            className="hidden md:inline-flex font-inter text-sm text-dark/60 hover:text-dark underline underline-offset-4 transition-colors"
          >
            Все товары
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {MOCK_PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Mobile "show all" */}
        <div className="mt-8 flex justify-center md:hidden">
          <a href="/catalog" className="btn-primary">
            Смотреть всё
          </a>
        </div>
      </div>
    </section>
  );
}
