import React, { useState } from 'react';
import { 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FolderOpen, 
  Calendar,
  Search
} from 'lucide-react';
import { SERVICES, SPA_INFO } from '../data/spaData';

export default function ServicesPage({ navigateTo, onOpenBooking, onOpenDriveMenu, initialQuery = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1E3B2E] to-[#2F1E14] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            DANH MỤC DỊCH VỤ TOÀN DIỆN
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Liệu Pháp Dưỡng Sinh & Trị Liệu Tại Be Wellness Spa
          </h1>
          <p className="text-xs sm:text-base text-[#EBF4F0]/90 max-w-2xl mx-auto leading-relaxed">
            Đánh thức mọi giác quan và tái tạo năng lượng, mang đến cảm giác thư giãn trọn vẹn từ cơ thể đến tâm trí.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#E8DFD3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm dịch vụ, liệu trình..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-xs sm:text-sm focus:outline-none focus:border-[#245943]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={onOpenDriveMenu}
              className="px-4 py-2.5 bg-[#F4EEE5] text-[#68432B] font-semibold text-xs rounded-xl border border-[#D5C7B7] hover:bg-white flex items-center gap-1.5"
            >
              <FolderOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>Menu Google Drive</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-[#245943] text-white font-bold text-xs rounded-xl shadow hover:bg-[#1E4D38] flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Đặt lịch hẹn</span>
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredServices.map((s) => (
            <div 
              key={s.id}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img 
                    src={s.image} 
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {s.badge && (
                    <span className="absolute top-3 right-3 bg-[#245943] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow border border-[#D4AF37]/50">
                      {s.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{s.duration}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 
                    onClick={() => navigateTo(`dich-vu/${s.id}`)}
                    className="text-xl font-serif font-bold text-[#245943] hover:text-[#68432B] cursor-pointer transition-colors"
                  >
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#8B5C3B] font-medium">
                    {s.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#68432B]/85 line-clamp-3 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1 pt-2">
                    {s.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[#382E2B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#245943] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#E8DFD3] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-[#8B5C3B] uppercase font-semibold">Giá từ</span>
                    <span className="text-lg font-bold text-[#245943]">{s.priceFrom}</span>
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

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#FAF7F2] rounded-2xl border border-[#E8DFD3]">
            <p className="text-[#68432B] font-medium text-sm">Không tìm thấy dịch vụ phù hợp với từ khóa "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 px-4 py-2 bg-[#245943] text-white rounded-lg text-xs font-bold"
            >
              Xem tất cả dịch vụ
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
