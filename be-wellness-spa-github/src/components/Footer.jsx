import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  Star, 
  FolderOpen, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { SPA_INFO, SERVICES } from '../data/spaData';

export default function Footer({ navigateTo, onOpenBooking, onOpenDriveMenu }) {
  const handleNav = (route) => {
    navigateTo(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241711] text-[#FAF7F2] border-t-4 border-[#245943]">
      {/* Top Banner highlight */}
      <div className="bg-[#1A3D2F] py-8 px-4 border-b border-[#2D5A43]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A3D9C9] font-bold">
                {SPA_INFO.sponsoredTag}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Be Wellness Spa – Vỗ về cơ thể, dịu êm tâm trí
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/80">
                10 P. Nguyễn Quang Bích, Phố cổ Hà Nội · Đánh giá 4.8★ (496 lượt bình chọn)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C59B27] text-[#241711] font-bold text-sm rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              ĐẶT LỊCH HẸN NGAY
            </button>
            <button
              onClick={onOpenDriveMenu}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-full border border-white/20 flex items-center gap-2"
            >
              <FolderOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>Menu Google Drive</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Introduction */}
          <div>
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#245943] border border-[#D4AF37] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-wide text-white">BE WELLNESS</span>
                <span className="font-serif font-light text-xl text-[#D4AF37] ml-1">SPA</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E0D5C7] leading-relaxed mb-4">
              Điểm đến dưỡng sinh và phục hồi sức khỏe lý tưởng cho du khách và người dân thủ đô. Tinh hoa trị liệu Đông Y kết hợp không gian mộc trầm ấm và kỹ thuật viên tận tâm.
            </p>

            {/* Google Rating Badge */}
            <div className="bg-[#1C120D] p-3.5 rounded-xl border border-[#3D281D] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" /> 4.8 / 5.0
                </span>
                <span className="text-[11px] text-[#A3D9C9] font-medium">496 Đánh giá</span>
              </div>
              <p className="text-[11px] text-[#C4B5A5]">
                Được vinh danh trong top spa mát xa uy tín nhất khu vực Hoàn Kiếm, Hà Nội.
              </p>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-base font-serif font-bold text-[#D4AF37] mb-4 pb-2 border-b border-[#3D281D] flex items-center gap-2">
              <span>DỊCH VỤ CỦA CHÚNG TÔI</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5C7B7]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav(`dich-vu/${s.id}`)}
                    className="hover:text-[#A3D9C9] transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#8B5C3B] group-hover:text-[#A3D9C9] transition-transform group-hover:translate-x-0.5" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details & Working hours */}
          <div>
            <h4 className="text-base font-serif font-bold text-[#D4AF37] mb-4 pb-2 border-b border-[#3D281D]">
              THÔNG TIN LIÊN HỆ
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#D5C7B7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A3D9C9] shrink-0 mt-0.5" />
                <span>{SPA_INFO.address}</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <span className="text-[#A3D9C9] font-bold text-xs bg-[#1A3D2F] px-2 py-0.5 rounded">Plus Code</span>
                <span className="text-xs">{SPA_INFO.plusCode}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A3D9C9] shrink-0" />
                <a 
                  href={`tel:${SPA_INFO.phoneRaw}`} 
                  className="font-bold text-white hover:text-[#D4AF37] transition-colors"
                >
                  {SPA_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A3D9C9] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">09:00 - 21:00 Hàng ngày</p>
                  <p className="text-[11px] text-[#A3D9C9]">Sắp đóng cửa · 21:00 · Mở cửa lúc 9:00 Thứ 6</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={SPA_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
                >
                  <span>Chỉ đường trên Google Maps →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hotel Partner & Klook Booking */}
          <div>
            <h4 className="text-base font-serif font-bold text-[#D4AF37] mb-4 pb-2 border-b border-[#3D281D]">
              ĐỐI TÁC & HỆ THỐNG
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#D5C7B7]">
              <p className="text-xs">
                Thuộc tổ hợp nghỉ dưỡng & chăm sóc sức khỏe boutique <strong>Bespoke Hotels Hanoi Trendy</strong> (trước đây là La Siesta).
              </p>

              {/* Klook price comparison card */}
              <div className="bg-[#1C120D] p-3 rounded-xl border border-[#3D281D]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] uppercase font-bold text-[#A3D9C9]">So sánh giá Klook</span>
                  <span className="text-xs font-bold text-[#D4AF37]">{SPA_INFO.klookPrice}</span>
                </div>
                <p className="text-[11px] text-[#A3998C] mb-2">
                  {SPA_INFO.klookDates}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Hủy đặt phòng miễn phí</span>
                </div>
              </div>

              {/* Useful links */}
              <div className="flex flex-col gap-1.5 pt-1 text-xs">
                <a
                  href={SPA_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D5C7B7] hover:text-[#D4AF37] flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3 text-[#A3D9C9]" />
                  <span>Website Bespoke Hotels Hanoi</span>
                </a>
                <button
                  onClick={onOpenDriveMenu}
                  className="text-left text-[#D5C7B7] hover:text-[#D4AF37] flex items-center gap-1"
                >
                  <FolderOpen className="w-3 h-3 text-[#A3D9C9]" />
                  <span>Menu & Catalog dịch vụ (Google Drive)</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-[#180E09] py-5 px-4 border-t border-[#2F1D14] text-xs text-[#9B8C7E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Be Wellness Spa. Tất cả quyền được bảo lưu. 10 P. Nguyễn Quang Bích, Hoàn Kiếm, Hà Nội.</p>
          <div className="flex items-center space-x-4 text-xs">
            <button onClick={() => handleNav('gioi-thieu')} className="hover:text-white">Giới thiệu</button>
            <span>•</span>
            <button onClick={() => handleNav('dich-vu')} className="hover:text-white">Dịch vụ</button>
            <span>•</span>
            <button onClick={() => handleNav('bang-gia')} className="hover:text-white">Bảng giá</button>
            <span>•</span>
            <button onClick={() => handleNav('lien-he')} className="hover:text-white">Liên hệ</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
