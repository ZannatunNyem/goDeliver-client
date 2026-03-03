import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { SiComma } from "react-icons/si";

export default function CommentCarousel() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 border-b border-dotted border-gray-400">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 text-center max-w-sm mx-auto">
            {/* Quote Section */}
            <div className="border-b border-dotted border-gray-300 pb-4 mb-4">
              <div className="flex justify-center text-2xl text-gray-400 mb-2">
                <SiComma className="mr-1" />
                <SiComma />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “A posture corrector works by providing support and gentle”
              </p>
            </div>

            {/* User Info */}
            <div className="mt-4 flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Ayeria Robin"
                className="w-15 h-15 mx-auto mb-3 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">— Ayeria Robin</h4>
                <p className="text-gray-400 text-sm">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 text-center max-w-sm mx-auto">
            {/* Quote Section */}
            <div className="border-b border-dotted border-gray-300 pb-4 mb-4">
              <div className="flex justify-center text-2xl text-gray-400 mb-2">
                <SiComma className="mr-1" />
                <SiComma />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “Tracking feature is super helpful. Loved the experience!”
              </p>
            </div>

            {/* User Info */}
            <div className="mt-4 flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Hakim Kacuim"
                className="w-15 h-15 mx-auto mb-3 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">— Hakim Kacuim</h4>
                <p className="text-gray-400 text-sm">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 text-center max-w-sm mx-auto">
            {/* Quote Section */}
            <div className="border-b border-dotted border-gray-300 pb-4 mb-4">
              <div className="flex justify-center text-2xl text-gray-400 mb-2">
                <SiComma className="mr-1" />
                <SiComma />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “Customer support is available anytime. Highly recommended.”
              </p>
            </div>

            {/* User Info */}
            <div className="mt-4 flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Rabit Jahan"
                className="w-15 h-15 mx-auto mb-3 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">— Rabit Jahan</h4>
                <p className="text-gray-400 text-sm">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
