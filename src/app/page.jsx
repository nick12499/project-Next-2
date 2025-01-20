'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/duotone-light-svg-icons";
import { Noto_Sans_Thai } from "next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules';




const notoSansThai = Noto_Sans_Thai({
  weight: ['400', '500', '700'],
  subsets: ['thai'],
});


const slides = [
  {
    src: "/assets/image/slide.png",
    title: "Speedy, Easy, and Fast",
    description: "Overpay helps you set saving goals, earn cashback offers, and get paychecks up to two days early.",
  },
  {
    src: "/assets/image/slide.png",
    title: "Save Smarter",
    description: "Enjoy the benefits of smarter savings with Overpay.",
  },
  {
    src: "/assets/image/slide.png",
    title: "Your Financial Partner",
    description: "We help you reach your financial goals quickly and efficiently.",
  },
];

export default function Home() {

  return (
    <div className="max-w-[1200px] mx-auto h-screen p-5">
      <div className="mt-14 flex flex-col lg:flex-row lg:h-[80%] shadow-xl rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="left-section w-[43%] hidden lg:flex h-full flex-col justify-between p-6 bg-blue-600 text-white relative">
          {/* Logo Section */}
          <div className="flex justify-start mb-4">
            <Image src={'/assets/image/logo1.jpg'} alt="" width={40} height={40} className=" rounded-lg mr-4" /><h1 className="text-2xl font-bold">JIB Dashboard</h1>
          </div>

          {/* Swiper Slider */}
          <div className="flex flex-col items-center justify-center relative h-full">
            {/* Swiper Slider */}
            <Swiper
              pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className} custom-pagination"></span>`,
              }}

              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative flex flex-col items-center justify-center h-full">
                    {/* Main Card Section */}
                    <div className="h-full relative w-full">
                      {/* Graph Section */}
                      <Image
                        src={slide.src}
                        alt="Graph"
                        width={300}
                        height={150}
                        className="rounded-lg w-full h-[450px]"
                      />
                    </div>

                    {/* Footer Section */}
                    <div className="absolute top-[75%] flex flex-col items-center mt-2">
                      <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                      <p className="text-center text-sm max-w-md">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <style jsx global>{`
            .custom-pagination {
              display: inline-block;
              position: relative;
              width: 7px;
              height: 7px;
              margin: 0 5px;
              border-radius: 50%;
              background-color: white;
              opacity: 0.5;
              transition: opacity 0.3s ease, transform 0.3s ease;
            }

            .custom-pagination.swiper-pagination-bullet-active {
              width: 20px; /* เปลี่ยนให้แถบกลางเป็นแท่งยาว */
              height: 8px;
              border-radius: 12px;
              background-color: white;
              opacity: 1;
            }

            /* ซ่อน Pagination เดิม (หากมี) */
            .swiper-pagination-bullet:not(.custom-pagination) {
              display: none;
            }

            /* ตำแหน่ง Pagination */
            .swiper-pagination {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 3px; /* ระยะห่างระหว่างจุด */
              margin-top: 20px;
            }
      `}</style>
          </div>

        </div>


        {/* Right Section */}
        <div className={`${notoSansThai.className} right-section lg:w-[57%] bg-white`} >
          <div className="max-w-md mx-auto w-full bg-white py-8 px-10 mb-10">
            {/* Header */}
            <div className="text-center">
              <div className="w-full flex justify-center">
                <Image src={'/assets/image/logo1.jpg'} alt="" width={60} height={60} className=" rounded-lg" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">เข้าสู่ระบบ "แดชบอร์ด JIB"</h2>
              <p className="text-sm text-gray-500">ระบบรายงานข้อมูล และ AI strategy</p>
            </div>

            {/* Social Sign-Up Buttons */}
            <div className="mt-6 flex flex-col space-y-4">
              <button className="w-full flex items-center justify-center border rounded-md py-2 text-sm font-medium">
                <Image
                  src="/assets/image/Google__G__logo.svg.jpg"
                  alt="Logo"
                  className="mr-2"
                  width={20}
                  height={20}
                />

                <p className="text-[9px] sm:text-sm">Sign In with Google</p>
              </button>
              <button className="w-full flex items-center justify-center border rounded-md py-2 text-sm font-medium mt-3 md:mt-0">
                <Image
                  src="/assets/image/572947.jpg"
                  alt="Logo"
                  className="mr-2"
                  width={20}
                  height={20}
                />
                <p className="text-[9px] sm:text-sm">Sign In with Apple</p>
              </button>
              <button className="w-full flex items-center justify-center border rounded-md py-2 text-sm font-medium">
                <Image
                  src="/assets/image/micrologo.jpg"
                  alt="Logo"
                  className="mr-2"
                  width={20}
                  height={20}
                />

                <p className="text-[9px] sm:text-sm">Sign In Microsoft
                </p>
              </button>
            </div>


            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or with email</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md py-2 px-4 text-sm"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-md py-2 px-4 text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  <FontAwesomeIcon icon={faEyeSlash} />
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  {/* Custom Checkbox */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden peer" // ซ่อน checkbox ดั้งเดิม
                    />
                    <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:bg-blue-600 peer-checked:border-blue-600">
                      {/* เครื่องหมายเช็ค */}
                      <svg
                        className="w-3 h-3 text-white peer-checked:opacity-100 transition-opacity duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </label>
                  <a href="#" className="ml-2 font-medium text-[12px] sm:text-[14px]">
                    Remember me
                  </a>
                </div>
                <div className="forgot-pas">
                  <a href="#" className="text-sm text-blue-600 sm:text-[14px]">Forgot Password?</a>
                </div>
              </div>




              <button className="w-full bg-[#0000ae] text-white py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </form>

            {/* Terms and Links */}

            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 font-medium">
                Sign Up
              </a>
            </p>

          </div>

          <div className="flex justify-between items-center px-8 mb-3">
            <p className="text-sm text-gray-500">Privacy Policy</p>
            <p className="text-sm text-gray-500">Copyright2022</p>
          </div>
        </div>
      </div>
    </div>

  );
}
