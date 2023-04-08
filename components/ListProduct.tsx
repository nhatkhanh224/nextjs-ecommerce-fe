import React from "react";
import Image from 'next/image';
export default function ListProductList() {
  return (
    <>
      <div className="product-wrapper mt-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
            <div className="product-item">
              <Image
                src="https://oldsailor.com.vn/vnt_upload/product/10_2022/42e8aeff55ab93f5caba.jpg"
                alt="Product image"
                width={500}
                height={500}
              />
              <p className="text-center font-bold">TEE</p>
              <p className="text-center">100.000 VND</p>
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}