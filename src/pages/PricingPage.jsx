import React from 'react';
import { 
  FolderOpen, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Tag, 
  Sparkles, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { SERVICES, SPA_INFO } from '../data/spaData';

export default function PricingPage({ navigateTo, onOpenBooking, onOpenDriveMenu }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1E3B2E] to-[#2F1E14] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            BẢNG GIÁ NIÊM YẾT & MENU CHÍNH THỨC
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Bảng Giá Dịch Vụ Be Wellness Spa
          </h1>
          <p className="text-xs sm:text-base text-[#EBF4F0]/90 max-w-2xl mx-auto leading-relaxed">
            Cam kết giá minh bạch, không phí ẩn. Tặng kèm trà thảo mộc gừng mật ong và ngâm chân bồn gỗ cho mọi liệu trình.
          </p>
        </div>
      </section>

      {/* Google Drive Menu Direct Link Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-spa flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#68432B] text-[#D4AF37] flex items-center justify-center shrink-0">
              <FolderOpen className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] bg-[#68432B]/10 text-[#68432B] font-bold px-2 py-0.5 rounded uppercase">
                Tài liệu chính thức
              </span>
              <h3 className="text-xl font-serif font-bold text-[#245943] mt-0.5">
                Thư mục Menu Dịch Vụ trên Google Drive
              </h3>
              <p className="text-xs sm:text-sm text-[#68432B]">
                Xem bản scan PDF gốc, bảng giá song ngữ Anh - Việt và hình ảnh chi tiết các liệu trình spa.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenDriveMenu}
              className="px-5 py-3 bg-[#FAF7F2] hover:bg-white text-[#68432B] font-bold text-xs sm:text-sm rounded-full border border-[#68432B] transition-colors"
            >
              Xem xem trước
            </button>
            <a
              href={SPA_INFO.googleDriveMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#245943] hover:bg-[#1E4D38] text-white font-bold text-xs sm:text-sm rounded-full shadow flex items-center gap-2 transition-transform hover:scale-105"
            >
              <span>MỞ GOOGLE DRIVE</span>
              <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </section>

      {/* Klook Price Comparison Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#241711] to-[#1E3B2E] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#D4AF37]/40 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                ĐỐI TÁC CHIẾN LƯỢC KLOOK
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Gói Nghỉ Dưỡng & Spa Trọn Gói Be Wellness
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-xs text-emerald-300">
              <ShieldCheck className="w-4 h-4" />
              <span>Chỉ hiển thị kết quả có lựa chọn hủy đặt phòng miễn phí</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1">
              <span className="text-xs text-[#A3D9C9]">Thời gian áp dụng</span>
              <p className="font-bold text-sm sm:text-base text-white">{SPA_INFO.klookDates}</p>
              <p className="text-xs text-white/70">Tổ hợp Bespoke Trendy Hotel & Be Wellness Spa</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#A3D9C9]">Tất cả mức giá đối tác</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37]">
                  {SPA_INFO.klookPrice}
                </span>
                <span className="text-xs text-white/60">/đêm + combo spa</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={onOpenBooking}
                className="flex-1 py-3 bg-[#D4AF37] hover:bg-[#C59B27] text-[#241711] font-bold text-xs sm:text-sm rounded-xl shadow text-center"
              >
                Đặt trực tiếp qua Spa
              </button>
              <a
                href={SPA_INFO.klookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 text-center flex items-center justify-center gap-1"
              >
                <span>Xem trên Klook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Full Pricing Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
            CHI TIẾT GIÁ TỪNG DỊCH VỤ
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#245943]">
            Bảng Giá Tất Cả Các Liệu Trình
          </h2>
        </div>

        <div className="space-y-8">
          {SERVICES.map((s) => (
            <div 
              key={s.id}
              className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E8DFD3] shadow-spa space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DFD3] pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif font-bold text-xl text-[#245943]">{s.title}</h3>
                    {s.badge && (
                      <span className="text-[10px] bg-[#245943] text-white px-2 py-0.5 rounded-full font-bold">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#8B5C3B] mt-0.5">{s.subtitle}</p>
                </div>

                <button
                  onClick={() => navigateTo(`dich-vu/${s.id}`)}
                  className="text-xs font-bold text-[#68432B] hover:text-[#245943] underline self-start sm:self-auto"
                >
                  Xem quy trình chi tiết →
                </button>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {s.pricing.map((tier, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border flex items-center justify-between ${
                      tier.popular 
                        ? 'bg-[#EBF4F0] border-[#245943]' 
                        : 'bg-white border-[#E8DFD3]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#245943]" />
                        <span className="font-bold text-xs sm:text-sm text-[#382E2B]">{tier.duration}</span>
                      </div>
                      {tier.original && (
                        <span className="text-[11px] text-stone-600 line-through mt-0.5 block">{tier.original}</span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-base text-[#245943]">{tier.price}</span>
                      <button
                        onClick={onOpenBooking}
                        className="block text-[11px] text-[#68432B] font-bold hover:underline mt-0.5"
                      >
                        Đặt gói này
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
