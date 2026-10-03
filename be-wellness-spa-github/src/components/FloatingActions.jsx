import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  FolderOpen, 
  ArrowUp, 
  MessageCircle,
  Home,
  Sparkles,
  Compass
} from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export default function FloatingActions({ currentRoute, navigateTo, onOpenBooking, onOpenDriveMenu }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (route) => {
    navigateTo(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= DESKTOP FLOATING STACK (Right Side) ================= */}
      <div className="fixed right-5 bottom-6 z-40 hidden md:flex flex-col items-end space-y-3">
        
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-[#FAF7F2] text-[#245943] shadow-lg border border-[#D5C7B7] flex items-center justify-center hover:bg-[#245943] hover:text-white transition-all transform hover:-translate-y-1"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Google Drive Menu */}
        <button
          onClick={onOpenDriveMenu}
          className="group flex items-center bg-[#FAF7F2] text-[#68432B] pl-4 pr-3 py-2.5 rounded-full shadow-lg border border-[#D5C7B7] hover:border-[#68432B] transition-all transform hover:-translate-y-0.5"
          title="Menu Google Drive"
        >
          <span className="text-xs font-bold mr-2 hidden group-hover:inline text-[#68432B]">
            Menu Drive 📁
          </span>
          <div className="w-8 h-8 rounded-full bg-[#F4EEE5] flex items-center justify-center text-[#68432B]">
            <FolderOpen className="w-4 h-4" />
          </div>
        </button>

        {/* Google Maps Directions */}
        <a
          href={SPA_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#FAF7F2] text-[#245943] pl-4 pr-3 py-2.5 rounded-full shadow-lg border border-[#D5C7B7] hover:border-[#245943] transition-all transform hover:-translate-y-0.5"
          title="Chỉ đường Google Maps"
        >
          <span className="text-xs font-bold mr-2 hidden group-hover:inline text-[#245943]">
            10 Nguyễn Quang Bích
          </span>
          <div className="w-8 h-8 rounded-full bg-[#EBF4F0] flex items-center justify-center text-[#245943]">
            <MapPin className="w-4 h-4" />
          </div>
        </a>

        {/* Hotline Call Button with Pulse Effect */}
        <a
          href={`tel:${SPA_INFO.phoneRaw}`}
          className="relative group flex items-center bg-[#245943] text-white pl-4 pr-3 py-2.5 rounded-full shadow-xl border border-[#D4AF37]/50 hover:bg-[#1E4D38] transition-all transform hover:scale-105 active:scale-95 animate-pulse-ring"
          title={`Gọi Hotline: ${SPA_INFO.phone}`}
        >
          <span className="text-xs font-bold mr-2 tracking-wide text-white">
            {SPA_INFO.phone}
          </span>
          <div className="w-9 h-9 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#241711] shadow">
            <Phone className="w-4 h-4 fill-current" />
          </div>
        </a>

        {/* Quick Booking CTA */}
        <button
          onClick={onOpenBooking}
          className="flex items-center space-x-2 bg-gradient-to-r from-[#68432B] to-[#523421] text-white px-5 py-3 rounded-full shadow-2xl hover:from-[#523421] hover:to-[#382E2B] transition-all transform hover:scale-105 active:scale-95 border border-[#D4AF37]/40"
        >
          <Calendar className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-xs font-bold tracking-wider uppercase">ĐẶT LỊCH NGAY</span>
        </button>
      </div>

      {/* ================= MOBILE BOTTOM NAVIGATION BAR (Smartphones) ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2] border-t border-[#E8DFD3] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
        <div className="grid grid-cols-5 items-center py-1.5 px-2">
          
          {/* 1. Trang chủ */}
          <button
            onClick={() => handleNav('trang-chu')}
            className={`flex flex-col items-center justify-center py-1 text-center ${
              currentRoute === 'trang-chu' ? 'text-[#245943] font-bold' : 'text-[#68432B]'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] mt-0.5">Trang chủ</span>
          </button>

          {/* 2. Dịch vụ */}
          <button
            onClick={() => handleNav('dich-vu')}
            className={`flex flex-col items-center justify-center py-1 text-center ${
              currentRoute.startsWith('dich-vu') ? 'text-[#245943] font-bold' : 'text-[#68432B]'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] mt-0.5">Dịch vụ</span>
          </button>

          {/* 3. Center Highlight: Đặt lịch */}
          <div className="flex flex-col items-center justify-center -mt-5">
            <button
              onClick={onOpenBooking}
              className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#245943] to-[#1E4D38] text-white p-3 shadow-xl border-2 border-[#D4AF37] flex items-center justify-center transform active:scale-90 transition-transform"
              title="Đặt lịch"
            >
              <Calendar className="w-6 h-6 text-[#D4AF37]" />
            </button>
            <span className="text-[9px] font-bold text-[#245943] mt-0.5">Đặt lịch</span>
          </div>

          {/* 4. Hotline gọi ngay */}
          <a
            href={`tel:${SPA_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center py-1 text-center text-[#245943]"
          >
            <Phone className="w-5 h-5" />
            <span className="text-[10px] mt-0.5">Hotline</span>
          </a>

          {/* 5. Bản đồ chỉ đường */}
          <a
            href={SPA_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 text-center text-[#68432B]"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] mt-0.5">Bản đồ</span>
          </a>

        </div>
      </div>
    </>
  );
}
