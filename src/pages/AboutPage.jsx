import React from 'react';
import { 
  Sparkles, 
  Award, 
  Users, 
  ShieldCheck, 
  MapPin, 
  Heart, 
  CheckCircle2, 
  Leaf, 
  Calendar 
} from 'lucide-react';
import { SPA_INFO, COMMITMENTS, GALLERY_IMAGES } from '../data/spaData';

export default function AboutPage({ navigateTo, onOpenBooking, onOpenDriveMenu, onOpenVideoTour }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1E3B2E] to-[#2F1E14] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            VỀ CHÚNG TÔI
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Be Wellness Spa – Vỗ Về Cơ Thể, Dịu Êm Tâm Trí
          </h1>
          <p className="text-xs sm:text-base text-[#EBF4F0]/90 max-w-2xl mx-auto leading-relaxed">
            Chốn bình yên giữa lòng Phố Cổ Hà Nội – Nơi phục hồi năng lượng và chữa lành thân tâm bằng tinh hoa thảo mộc cổ truyền Á Đông.
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
              CÂU CHUYỆN THƯƠNG HIỆU
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943] leading-tight">
              Khởi nguồn từ sự thấu hiểu cơ thể và nghệ thuật trị liệu Đông Y
            </h2>
            <p className="text-xs sm:text-sm text-[#68432B] leading-relaxed">
              Tọa lạc tại số <strong>10 P. Nguyễn Quang Bích, Hoàn Kiếm, Hà Nội</strong> (thuộc tổ hợp khách sạn boutique danh tiếng Bespoke Hotels Hanoi Trendy – tiền thân là La Siesta), Be Wellness Spa ra đời như một nốt trầm êm ả giữa nhịp sống sôi động của phố cổ.
            </p>
            <p className="text-xs sm:text-sm text-[#68432B] leading-relaxed">
              Chúng tôi tin rằng cơ thể con người là một kỳ quan có khả năng tự chữa lành khi được lắng nghe và chăm sóc đúng cách. Bằng sự kết hợp hài hòa giữa các bài thuốc dân gian Việt Nam, thảo mộc hữu cơ nấu tươi mỗi ngày và bàn tay điêu luyện của các chuyên viên bấm huyệt, Be Wellness Spa mang đến cho bạn trải nghiệm thư giãn đẳng cấp nhất.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F4EEE5] rounded-xl border border-[#E8DFD3]">
                <span className="text-2xl font-serif font-bold text-[#245943]">4.8★</span>
                <p className="text-xs text-[#68432B] font-medium mt-1">496+ Khách hàng quốc tế và trong nước đánh giá xuất sắc</p>
              </div>
              <div className="p-4 bg-[#F4EEE5] rounded-xl border border-[#E8DFD3]">
                <span className="text-2xl font-serif font-bold text-[#68432B]">100%</span>
                <p className="text-xs text-[#68432B] font-medium mt-1">Nguyên liệu thảo mộc thuần tự nhiên & tinh dầu organic</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2]">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" 
                alt="Không gian Be Wellness Spa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl text-white text-xs flex items-center justify-between border border-white/20">
                <div>
                  <p className="font-bold text-[#D4AF37]">Phòng trị liệu tiêu chuẩn Boutique 5 sao</p>
                  <p className="text-white/80">Không gian riêng tư, thơm hương thảo mộc</p>
                </div>
                <button
                  onClick={onOpenVideoTour}
                  className="px-3 py-1.5 bg-[#D4AF37] text-[#241711] font-bold rounded-lg text-xs hover:bg-[#C59B27]"
                >
                  Xem video
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
              GIÁ TRỊ CỐT LÕI
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943]">
              Vì Sao Khách Hàng Chọn Be Wellness Spa?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#E8DFD3] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#245943] text-[#D4AF37] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#245943]">{c.title}</h3>
                <p className="text-xs text-[#68432B] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surroundings & Location Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F4EEE5] rounded-3xl p-8 sm:p-12 border border-[#E8DFD3] space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
              ĐỊA ĐIỂM LÝ TƯỞNG
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#245943]">
              Vị trí vàng giữa lòng Hoàn Kiếm, phố cổ Hà Nội
            </h2>
            <p className="text-xs sm:text-sm text-[#68432B] leading-relaxed">
              Điểm số đánh giá vị trí: <strong>4.6★ - Tuyệt hảo cho khách du lịch</strong>. Nằm kề bên Nhà thờ Lớn Hà Nội, Hồ Hoàn Kiếm và các dãy phố nghề thủ công truyền thống. Rất thuận tiện để bạn kết hợp một ngày dạo phố và thư giãn tại spa.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#245943] text-white font-bold text-xs sm:text-sm rounded-full shadow hover:bg-[#1E4D38]"
            >
              Đặt lịch hẹn ngay
            </button>
            <a
              href={SPA_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-[#68432B] font-bold text-xs sm:text-sm rounded-full border border-[#D5C7B7] hover:bg-stone-50"
            >
              Chỉ đường Google Maps →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
