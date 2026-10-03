import React from 'react';
import { 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ArrowLeft, 
  Phone, 
  FolderOpen, 
  ShieldCheck,
  Star
} from 'lucide-react';
import { SERVICES, SPA_INFO } from '../data/spaData';

export default function ServiceDetailPage({ serviceId, navigateTo, onOpenBooking, onOpenDriveMenu }) {
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  const otherServices = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Breadcrumb & Navigation */}
      <div className="bg-[#F4EEE5] py-4 px-4 sm:px-6 border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <button
            onClick={() => navigateTo('dich-vu')}
            className="flex items-center space-x-1.5 text-[#245943] hover:text-[#1E4D38] font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh mục dịch vụ</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 text-[#68432B]">
            <span>Trang chủ</span>
            <span>/</span>
            <span>Dịch vụ</span>
            <span>/</span>
            <span className="font-bold text-[#245943]">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Main Service Hero Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Image & Quick Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD3] aspect-[4/3] bg-stone-200">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {service.badge && (
                <span className="absolute top-4 right-4 bg-[#245943] text-white text-xs font-bold px-3 py-1 rounded-full shadow border border-[#D4AF37]">
                  {service.badge}
                </span>
              )}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Thời lượng: {service.duration}</span>
              </div>
            </div>

            {/* Quality assurance box */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD3] flex items-center justify-between text-xs text-[#382E2B]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#245943]" />
                <span>Liệu trình chuẩn Đông Y · Phòng VIP riêng tư</span>
              </div>
              <span className="text-[#D4AF37] font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" /> 4.8★
              </span>
            </div>
          </div>

          {/* Right: Details & Booking form trigger */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
                LIỆU TRÌNH DƯỠNG SINH CAO CẤP
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#245943] mt-1 leading-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-[#8B5C3B] font-medium mt-1">
                {service.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#382E2B] leading-relaxed">
              {service.description}
            </p>

            {/* Pricing Tiers Table */}
            <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8DFD3] space-y-3">
              <h3 className="font-serif font-bold text-sm text-[#245943] uppercase tracking-wider">
                Bảng giá liệu trình {service.title}
              </h3>
              <div className="space-y-2">
                {service.pricing.map((tier, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      tier.popular 
                        ? 'bg-[#EBF4F0] border-[#245943] shadow-sm' 
                        : 'bg-white border-[#E8DFD3]'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-[#382E2B]">{tier.duration}</span>
                      {tier.popular && (
                        <span className="ml-2 text-[10px] bg-[#245943] text-white px-2 py-0.5 rounded-full font-semibold">
                          Khuyên dùng
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-sm sm:text-base font-extrabold text-[#245943]">{tier.price}</span>
                      {tier.original && (
                        <span className="block text-[11px] text-stone-600 line-through">{tier.original}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex-1 py-3.5 bg-gradient-to-r from-[#245943] to-[#1E4D38] hover:from-[#1E4D38] hover:to-[#16281F] text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center space-x-2 border border-[#D4AF37]/50"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>ĐẶT LỊCH HẸN CHO LIỆU TRÌNH NÀY</span>
              </button>
              <button
                onClick={onOpenDriveMenu}
                className="px-5 py-3.5 bg-[#F4EEE5] hover:bg-white text-[#68432B] font-bold text-xs rounded-xl border border-[#D5C7B7] flex items-center justify-center space-x-1.5"
              >
                <FolderOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Xem menu Drive</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits and Step-by-step procedure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Benefits */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8DFD3] space-y-4 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-[#245943] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span>Hiệu quả & Lợi ích trị liệu</span>
            </h3>
            <p className="text-xs text-[#68432B]">
              Cảm nhận sự chuyển biến tích cực của cơ thể ngay sau một buổi thực hiện:
            </p>
            <div className="space-y-3 pt-2">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E8DFD3]">
                  <CheckCircle2 className="w-4 h-4 text-[#245943] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#382E2B] leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#F4EEE5] p-4 rounded-xl border border-[#E8DFD3] text-xs text-[#68432B] space-y-1">
              <p className="font-bold text-[#382E2B]">Trà thảo mộc đón khách:</p>
              <p>Mỗi buổi trị liệu đều bao gồm trà gừng táo đỏ ấm nóng, ngâm chân bồn gỗ thảo dược và tráng miệng bánh nhẹ sau dịch vụ.</p>
            </div>
          </div>

          {/* Right: Step-by-step procedure */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8DFD3] space-y-4 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-[#245943]">
              Quy trình thực hiện chuẩn 5 bước
            </h3>
            <p className="text-xs text-[#68432B]">
              Được chuẩn hóa nghiêm ngặt bởi các chuyên gia dưỡng sinh Đông Y:
            </p>

            <div className="space-y-4 pt-2">
              {service.procedure.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-[#E8DFD3]">
                  <div className="w-9 h-9 rounded-full bg-[#245943] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold uppercase text-[#8B5C3B] tracking-wider">{step.step}</span>
                      <h4 className="font-serif font-bold text-sm text-[#245943]">{step.title}</h4>
                    </div>
                    <p className="text-xs text-[#68432B] mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Other Recommended Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-t border-[#E8DFD3] pt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-[#245943]">
              Dịch vụ tương tự có thể bạn quan tâm
            </h3>
            <button
              onClick={() => navigateTo('dich-vu')}
              className="text-xs font-bold text-[#68432B] hover:text-[#245943]"
            >
              Xem tất cả →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div 
                key={other.id}
                onClick={() => navigateTo(`dich-vu/${other.id}`)}
                className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E8DFD3] hover:shadow-md transition-all cursor-pointer group flex items-center space-x-4"
              >
                <img 
                  src={other.image} 
                  alt={other.title} 
                  className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#245943] group-hover:text-[#68432B]">
                    {other.title}
                  </h4>
                  <p className="text-[11px] text-[#8B5C3B]">{other.duration}</p>
                  <p className="text-xs font-bold text-[#245943] mt-1">Từ {other.priceFrom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
