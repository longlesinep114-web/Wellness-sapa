import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Phone, 
  FolderOpen, 
  Play, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { 
  SPA_INFO, 
  SERVICES, 
  REVIEWS, 
  NEWS_POSTS, 
  GALLERY_IMAGES, 
  COMMITMENTS, 
  BUSY_HOURS_DATA 
} from '../data/spaData';

export default function HomePage({ navigateTo, onOpenBooking, onOpenDriveMenu, onOpenVideoTour }) {
  const [selectedDay, setSelectedDay] = useState('Thứ Năm');
  const [activeGalleryTab, setActiveGalleryTab] = useState('Tất cả');

  const filteredGallery = activeGalleryTab === 'Tất cả' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeGalleryTab);

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center bg-[#1E3B2E] overflow-hidden">
        {/* Background Image with Dark & Warm Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" 
            alt="Be Wellness Spa Hanoi"
            className="w-full h-full object-cover opacity-25 scale-105 transform animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16281F]/95 via-[#1E3B2E]/85 to-[#2F1E14]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center text-white z-10 space-y-6">
          
          {/* Sponsored badge & Rating */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm">
            <span className="bg-[#D4AF37] text-[#241711] font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              {SPA_INFO.sponsoredTag}
            </span>
            <span className="font-semibold text-white tracking-wide">Be Wellness Spa</span>
            <span className="text-white/40">•</span>
            <div className="flex items-center text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold ml-1 text-white">4.8</span>
              <span className="text-white/80 text-[11px] ml-1">(496 đánh giá)</span>
            </div>
            <span className="text-white/40">•</span>
            <span className="text-[#A3D9C9] font-medium">Spa mát xa</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mx-auto space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Vỗ Về Cơ Thể, <span className="text-[#D4AF37] italic font-normal">Dịu Êm Tâm Trí</span>
            </h1>
            <p className="text-sm sm:text-lg text-[#EBF4F0]/90 max-w-2xl mx-auto font-light leading-relaxed">
              Trải nghiệm spa mát xa & dưỡng sinh trị liệu Đông Y cao cấp tại 10 P. Nguyễn Quang Bích, Phố cổ Hoàn Kiếm, Hà Nội. Nơi tái sinh năng lượng và tìm lại sự an yên thuần khiết.
            </p>
          </div>

          {/* Location & Status Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#A3D9C9]">
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>10 P. Nguyễn Quang Bích, Hoàn Kiếm, Hà Nội</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>{SPA_INFO.hoursText}</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B3891D] text-[#241711] font-bold text-sm sm:text-base rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5 text-[#241711]" />
              <span>ĐẶT LỊCH HẸN NGAY</span>
            </button>

            <button
              onClick={onOpenDriveMenu}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base rounded-full border border-white/30 backdrop-blur-sm transition-all flex items-center space-x-2"
            >
              <FolderOpen className="w-5 h-5 text-[#D4AF37]" />
              <span>MENU GOOGLE DRIVE</span>
            </button>

            <button
              onClick={onOpenVideoTour}
              className="px-5 py-3.5 bg-[#68432B]/80 hover:bg-[#68432B] text-white font-medium text-sm sm:text-base rounded-full border border-[#D4AF37]/40 backdrop-blur-sm transition-all flex items-center space-x-2"
            >
              <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>VIDEO TOUR</span>
            </button>
          </div>

          {/* Quick Booking & Price Compare Bar (Clone feature: Kiểm tra phòng trống & So sánh giá) */}
          <div className="max-w-4xl mx-auto pt-6">
            <div className="bg-[#FAF7F2] text-[#241711] rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-[#D4AF37]/60 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DFD3] pb-3 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="font-bold text-xs sm:text-sm text-[#245943] uppercase tracking-wider">
                    Kiểm tra phòng trống & So sánh giá trực tuyến
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Chỉ hiển thị kết quả có lựa chọn hủy đặt phòng miễn phí</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center text-xs sm:text-sm">
                <div className="p-2.5 bg-[#F4EEE5] rounded-xl border border-[#E8DFD3]">
                  <span className="block text-[11px] text-[#8B5C3B] font-semibold">Nhận phòng / Trả phòng</span>
                  <span className="font-bold text-[#382E2B]">{SPA_INFO.klookDates}</span>
                </div>

                <div className="p-2.5 bg-[#F4EEE5] rounded-xl border border-[#E8DFD3]">
                  <span className="block text-[11px] text-[#8B5C3B] font-semibold">Số lượng khách</span>
                  <span className="font-bold text-[#382E2B]">2 Người (Phòng VIP Couple)</span>
                </div>

                <div className="p-2.5 bg-[#EBF4F0] rounded-xl border border-[#245943]/30">
                  <span className="block text-[11px] text-[#245943] font-semibold">Mức giá đối tác Klook</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="font-extrabold text-sm sm:text-base text-[#245943]">{SPA_INFO.klookPrice}</span>
                    <span className="text-[10px] text-[#68432B]">/gói trọn gói</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 bg-[#245943] hover:bg-[#1E4D38] text-white font-bold rounded-xl shadow text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>ĐẶT PHÒNG NGAY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. PHILOSOPHY & THREE PILLARS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
            VỀ CHÚNG TÔI
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943]">
            Chạm vào không gian, cảm nhận sự khác biệt
          </h2>
          <p className="text-xs sm:text-base text-[#68432B] font-light leading-relaxed">
            Tìm liệu pháp hoàn hảo cho cơ thể và tâm trí. Be Wellness Spa là thiên đường thư giãn dành riêng cho bạn sau nhịp sống hối hả.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all text-center space-y-3 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF4F0] text-[#245943] flex items-center justify-center mx-auto border border-[#245943]/20 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#245943]">Thư Giãn</h3>
            <p className="text-xs sm:text-sm text-[#68432B] leading-relaxed">
              Trút bỏ mọi muộn phiền trong tiếng nhạc thiền du dương, hương tinh dầu sả chanh tự nhiên và không gian ấm áp ánh đèn vàng.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all text-center space-y-3 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#F4EEE5] text-[#8B5C3B] flex items-center justify-center mx-auto border border-[#8B5C3B]/20 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#68432B]">Tinh Tế</h3>
            <p className="text-xs sm:text-sm text-[#68432B] leading-relaxed">
              Từ chén trà gừng đón khách, khăn ấm thơm thảo dược đến từng động tác miết huyệt êm dịu, chu đáo đến từng chi tiết nhỏ nhất.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all text-center space-y-3 group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF4F0] text-[#245943] flex items-center justify-center mx-auto border border-[#245943]/20 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#245943]">Chuyên Nghiệp</h3>
            <p className="text-xs sm:text-sm text-[#68432B] leading-relaxed">
              Kỹ thuật viên am hiểu huyệt vị Đông Y, lực tay đều đặn theo thể trạng khách hàng, mang lại sự chữa lành sâu sắc cho các bó cơ.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 3. CORE SERVICES GRID (Clone feature: DỊCH VỤ CỦA CHÚNG TÔI) ================= */}
      <section className="bg-[#F4EEE5]/70 py-16 sm:py-20 border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
                MENU TRỊ LIỆU
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943] mt-1">
                DỊCH VỤ CỦA CHÚNG TÔI
              </h2>
              <p className="text-xs sm:text-sm text-[#68432B] mt-1">
                Tuyển chọn những liệu pháp thư giãn & chăm sóc sức khỏe được yêu thích nhất
              </p>
            </div>
            <button
              onClick={() => navigateTo('dich-vu')}
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-[#245943] hover:text-[#1E4D38] border-b-2 border-[#245943] pb-0.5 self-start md:self-auto"
            >
              <span>Xem toàn bộ 7 dịch vụ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((s) => (
              <div 
                key={s.id}
                className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img 
                    src={s.image} 
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {s.badge && (
                    <span className="absolute top-3 right-3 bg-[#245943] text-[#FAF7F2] text-[11px] font-bold px-3 py-1 rounded-full shadow border border-[#D4AF37]/50">
                      {s.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{s.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#245943] group-hover:text-[#1E4D38] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#8B5C3B] font-medium mt-1 line-clamp-1">
                      {s.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#68432B]/85 mt-2 line-clamp-3 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#8B5C3B] uppercase font-semibold">Giá chỉ từ</span>
                      <span className="text-base sm:text-lg font-bold text-[#245943]">{s.priceFrom}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigateTo(`dich-vu/${s.id}`)}
                        className="px-3.5 py-2 text-xs font-semibold text-[#68432B] hover:text-[#245943] hover:bg-[#F4EEE5] rounded-lg transition-colors"
                      >
                        Chi tiết
                      </button>
                      <button
                        onClick={onOpenBooking}
                        className="px-4 py-2 bg-[#245943] hover:bg-[#1E4D38] text-white text-xs font-bold rounded-lg shadow transition-colors"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. VIDEO & GALLERY (Clone feature: KHÔNG GIAN TẠI ANNAM SPA) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
            TRẢI NGHIỆM THỰC TẾ
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943]">
            KHÔNG GIAN TẠI BE WELLNESS SPA
          </h2>
          <p className="text-xs sm:text-base text-[#68432B]">
            Chốn bình yên khơi nguồn năng lượng mới giữa lòng 36 phố phường
          </p>

          {/* Gallery Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['Tất cả', 'Không gian', 'Trị liệu', 'Nguyên liệu'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveGalleryTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeGalleryTab === tab
                    ? 'bg-[#245943] text-white shadow'
                    : 'bg-[#F4EEE5] text-[#68432B] hover:bg-[#E8DFD3]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {filteredGallery.map((item, idx) => (
            <div 
              key={idx}
              className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              onClick={onOpenVideoTour}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-3 sm:p-4 text-white">
                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase">{item.category}</span>
                <h4 className="text-xs sm:text-sm font-bold">{item.title}</h4>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Banner Video CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#245943] to-[#1E3B2E] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4AF37]/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Khám Phá Video Tour 360° Không Gian Spa
            </h3>
            <p className="text-xs sm:text-sm text-[#A3D9C9] max-w-xl">
              Cảm nhận không gian phòng VIP, giường gội dưỡng sinh hoàng cung và bồn tắm gỗ Pơ-mu thảo dược trước khi đặt lịch.
            </p>
          </div>
          <button
            onClick={onOpenVideoTour}
            className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#C59B27] text-[#241711] font-bold text-xs sm:text-sm rounded-full shadow-lg flex items-center space-x-2 shrink-0 transition-transform hover:scale-105"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>XEM VIDEO THỰC TẾ</span>
          </button>
        </div>
      </section>

      {/* ================= 5. COMMITMENTS (Clone feature: Cam kết từ Spa) ================= */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
              UY TÍN & CHẤT LƯỢNG
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943]">
              Cam kết từ Be Wellness Spa
            </h2>
            <p className="text-xs sm:text-sm text-[#68432B]">
              4 giá trị cốt lõi làm nên sự hài lòng của 496+ lượt đánh giá 4.8★
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((c, i) => (
              <div 
                key={i}
                className="bg-[#F4EEE5]/80 p-6 rounded-2xl border border-[#E8DFD3] space-y-3 hover:bg-white hover:shadow-spa transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#245943] text-[#D4AF37] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#245943] leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs text-[#68432B] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. HOAN KIEM LOCATION & BUSY HOURS CHART ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Location summary (Clone data: Khu vực xung quanh: Hoàn Kiếm 4,6 Tuyệt hảo cho khách du lịch) */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8DFD3] shadow-spa space-y-5">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#8B5C3B] font-bold">
                THÔNG TIN TÓM TẮT VỀ VỊ TRÍ
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#245943] mt-1">
                Khu vực xung quanh: Hoàn Kiếm
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xl font-extrabold text-[#245943]">4,6</span>
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#8B5C3B]">
                  Tuyệt hảo cho khách du lịch
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#68432B] leading-relaxed">
              Khu vực trung tâm ghi dấu ấn riêng với các cửa hàng đồ thủ công và ẩm thực đường phố trong khu phố cổ, cùng Nhà thờ Lớn Hà Nội.
            </p>

            <div className="space-y-2 text-xs text-[#382E2B] bg-[#F4EEE5] p-4 rounded-xl border border-[#E8DFD3]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#245943] shrink-0 mt-0.5" />
                <span><strong>Địa chỉ:</strong> 10 P. Nguyễn Quang Bích, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội 100000, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#245943] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Plus Code</span>
                <span>2RJW+W7 Hoàn Kiếm, Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#245943] shrink-0" />
                <span><strong>Giờ làm việc:</strong> Sắp đóng cửa · 21:00 · Mở cửa lúc 9:00 Thứ 6</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={SPA_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#245943] text-white text-xs font-bold rounded-xl shadow flex items-center gap-1.5 hover:bg-[#1E4D38]"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Mở bản đồ Google Maps</span>
              </a>
              <button
                onClick={onOpenDriveMenu}
                className="px-4 py-2.5 bg-[#F4EEE5] text-[#68432B] text-xs font-bold rounded-xl border border-[#D5C7B7] hover:bg-white"
              >
                <span>Xem menu Drive</span>
              </button>
            </div>
          </div>

          {/* Right: Busy hours interactive chart (Clone data: Giờ đông khách Thứ Năm) */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8DFD3] shadow-spa space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8B5C3B] font-bold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#245943]" />
                  <span>DỮ LIỆU GOOGLE MAPS</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#245943] mt-1">
                  Giờ đông khách ({selectedDay})
                </h3>
              </div>
              
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#D5C7B7] bg-white text-xs text-[#382E2B] font-semibold"
              >
                <option value="Thứ Năm">Thứ Năm (Hôm nay)</option>
                <option value="Thứ Sáu">Thứ Sáu</option>
                <option value="Thứ Bảy">Thứ Bảy (Cuối tuần)</option>
                <option value="Chủ Nhật">Chủ Nhật</option>
                <option value="Thứ Hai">Thứ Hai</option>
              </select>
            </div>

            <p className="text-xs text-[#68432B]">
              Lượng khách thực tế ghé thăm Be Wellness Spa theo từng khung giờ trong ngày:
            </p>

            {/* Interactive Bar Chart */}
            <div className="space-y-3 pt-2">
              {BUSY_HOURS_DATA.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#382E2B] font-bold">{item.time}</span>
                    <span className="text-[#68432B]">{item.label}</span>
                  </div>
                  <div className="w-full bg-[#E8DFD3] h-3.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.level > 80 
                          ? 'bg-[#C59B27]' 
                          : item.level > 50 
                            ? 'bg-[#245943]' 
                            : 'bg-[#4A8B6B]'
                      }`}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#EBF4F0] p-3 rounded-xl border border-[#245943]/20 text-xs text-[#245943] flex items-center justify-between">
              <span>💡 <strong>Gợi ý:</strong> Khung giờ 09:00 - 14:00 thường yên tĩnh và có phòng VIP trống tốt nhất.</span>
              <button
                onClick={onOpenBooking}
                className="ml-2 px-3 py-1 bg-[#245943] text-white rounded font-bold hover:bg-[#1E4D38] shrink-0"
              >
                Đặt trước
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. CUSTOMER REVIEWS (Clone feature: Phản hồi chân thật từ khách quốc tế) ================= */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
              ĐÁNH GIÁ GOOGLE MAPS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943]">
              Phản hồi chân thật từ khách quốc tế & Việt Nam
            </h2>
            <div className="flex items-center justify-center space-x-2 text-sm text-[#68432B]">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#245943]">4.8 trên 5.0</span>
              <span>•</span>
              <span className="underline">Dựa trên 496 bài đánh giá đã xác minh</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div 
                key={r.id}
                className="bg-white p-6 rounded-2xl border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={r.avatar} 
                        alt={r.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37]"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-[#241711]">{r.name}</h4>
                        <span className="text-[11px] text-[#8B5C3B] font-medium">{r.country}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-600 font-medium">{r.date}</span>
                  </div>

                  <div className="flex text-[#D4AF37]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#382E2B] italic leading-relaxed">
                    "{r.text}"
                  </p>

                  {r.translation && (
                    <p className="text-xs text-[#245943] bg-[#EBF4F0] p-2.5 rounded-lg border border-[#245943]/20">
                      {r.translation}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-[#E8DFD3] flex items-center justify-between text-[11px] text-stone-600">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Khách hàng thực tế
                  </span>
                  <span>Google Maps Review</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigateTo('danh-gia')}
              className="px-6 py-3 bg-[#FAF7F2] hover:bg-white text-[#245943] font-bold text-xs sm:text-sm rounded-full border border-[#245943] transition-colors shadow"
            >
              Xem tất cả 496 bài đánh giá khác →
            </button>
          </div>
        </div>
      </section>

      {/* ================= 8. LATEST NEWS & WELLNESS BLOG (Clone feature: TIN LÀM ĐẸP) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
              CẨM NANG DƯỠNG SINH
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943] mt-1">
              TIN LÀM ĐẸP & TRỊ LIỆU
            </h2>
            <p className="text-xs sm:text-sm text-[#68432B] mt-1">
              Kiến thức chăm sóc sức khỏe và câu chuyện thư giãn tại phố cổ
            </p>
          </div>
          <button
            onClick={() => navigateTo('tin-tuc')}
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-[#245943] hover:text-[#1E4D38] border-b-2 border-[#245943] pb-0.5 self-start md:self-auto"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {NEWS_POSTS.map((post) => (
            <div 
              key={post.slug}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#68432B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[11px] text-[#8B5C3B]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 
                    onClick={() => navigateTo(`tin-tuc/${post.slug}`)}
                    className="font-serif font-bold text-base text-[#245943] group-hover:text-[#68432B] cursor-pointer transition-colors line-clamp-2"
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#68432B]/85 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8DFD3]">
                  <button
                    onClick={() => navigateTo(`tin-tuc/${post.slug}`)}
                    className="text-xs font-bold text-[#245943] hover:text-[#1E4D38] inline-flex items-center gap-1"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 9. QUICK CONTACT & RESERVATION BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#241711] to-[#1E3B2E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border-2 border-[#D4AF37]/40 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              TRẢI NGHIỆM ĐẲNG CẤP
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Sẵn sàng cho phút giây thư thái trọn vẹn tại Be Wellness Spa?
            </h2>
            <p className="text-xs sm:text-sm text-[#EBF4F0]/90 leading-relaxed">
              Đặt hẹn ngay hôm nay để nhận ưu đãi 15% và được xếp phòng VIP riêng tư miễn phí.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#C59B27] text-[#241711] font-bold text-sm sm:text-base rounded-full shadow-lg transition-transform hover:scale-105"
              >
                ĐẶT LỊCH HẸN TRỰC TUYẾN
              </button>
              <a
                href={`tel:${SPA_INFO.phoneRaw}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-full border border-white/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Hotline: {SPA_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
