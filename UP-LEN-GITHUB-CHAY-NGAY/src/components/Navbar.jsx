import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Search, 
  FolderOpen, 
  Sparkles,
  ExternalLink,
  Star
} from 'lucide-react';
import { SPA_INFO, SERVICES } from '../data/spaData';

export default function Navbar({ currentRoute, navigateTo, onOpenBooking, onOpenDriveMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (route) => {
    navigateTo(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Go to services page with query
    navigateTo(`dich-vu?q=${encodeURIComponent(searchQuery)}`);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#245943] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#1E4D38] hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${SPA_INFO.phoneRaw}`} 
              className="flex items-center space-x-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold tracking-wide">{SPA_INFO.phone}</span>
            </a>
            <span className="text-[#A3D9C9]/40">|</span>
            <div className="flex items-center space-x-1.5 text-[#EBF4F0]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="truncate max-w-xs">{SPA_INFO.address}</span>
            </div>
            <span className="text-[#A3D9C9]/40">|</span>
            <div className="flex items-center space-x-1.5 text-[#EBF4F0]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>09:00 - 21:00 (Hàng ngày)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onOpenDriveMenu}
              className="flex items-center space-x-1 text-[#D4AF37] hover:underline cursor-pointer"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Menu Google Drive</span>
            </button>
            <span className="text-[#A3D9C9]/40">|</span>
            <a 
              href={SPA_INFO.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-[#D4AF37] transition-colors"
            >
              <span>Bespoke Hotels</span>
              <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
            </a>
            <span className="text-[#A3D9C9]/40">|</span>
            <span className="bg-[#1E4D38] px-2 py-0.5 rounded text-[11px] text-[#A3D9C9] font-medium flex items-center gap-1">
              <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" /> 4.8★ (496)
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-2.5' 
          : 'bg-[#FAF7F2] py-4 border-b border-[#E8DFD3]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with Green and Brown branding */}
          <button 
            onClick={() => handleNav('trang-chu')} 
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#245943] to-[#1E4D38] flex items-center justify-center shadow-md p-1 border-2 border-[#D4AF37]/50 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#245943] tracking-wide group-hover:text-[#1E4D38] transition-colors">
                  BE WELLNESS
                </span>
                <span className="text-xl sm:text-2xl font-serif font-light text-[#68432B]">
                  SPA
                </span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#8B5C3B] font-medium flex items-center gap-1">
                <span>Hà Nội Old Quarter</span>
                <span className="text-[#245943]">•</span>
                <span className="text-[#245943] font-semibold">4.8★</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-[#382E2B]">
            <button 
              onClick={() => handleNav('trang-chu')}
              className={`hover:text-[#245943] transition-colors relative py-1 ${
                currentRoute === 'trang-chu' ? 'text-[#245943] font-bold border-b-2 border-[#245943]' : ''
              }`}
            >
              Trang chủ
            </button>

            <button 
              onClick={() => handleNav('gioi-thieu')}
              className={`hover:text-[#245943] transition-colors relative py-1 ${
                currentRoute === 'gioi-thieu' ? 'text-[#245943] font-bold border-b-2 border-[#245943]' : ''
              }`}
            >
              Giới thiệu
            </button>

            {/* Dịch vụ Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                onClick={() => handleNav('dich-vu')}
                className={`flex items-center space-x-1 hover:text-[#245943] transition-colors py-1 ${
                  currentRoute.startsWith('dich-vu') ? 'text-[#245943] font-bold border-b-2 border-[#245943]' : ''
                }`}
              >
                <span>Dịch vụ</span>
                <ChevronDown className="w-4 h-4 text-[#8B5C3B]" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#FAF7F2] rounded-xl shadow-xl border border-[#E8DFD3] py-2 z-50 animate-fadeIn">
                  <div className="px-4 py-2 text-xs font-semibold text-[#8B5C3B] uppercase tracking-wider border-b border-[#E8DFD3]/60 bg-[#F4EEE5]/50">
                    Liệu pháp dưỡng sinh
                  </div>
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleNav(`dich-vu/${s.id}`)}
                      className="w-full text-left px-4 py-2.5 text-sm text-[#382E2B] hover:bg-[#EBF4F0] hover:text-[#245943] flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium">{s.title}</span>
                      {s.badge && (
                        <span className="text-[10px] bg-[#245943]/10 text-[#245943] font-semibold px-2 py-0.5 rounded-full">
                          {s.badge}
                        </span>
                      )}
                    </button>
                  ))}
                  <div className="p-2 border-t border-[#E8DFD3]/60">
                    <button
                      onClick={() => handleNav('dich-vu')}
                      className="w-full text-center py-2 text-xs font-bold text-[#68432B] hover:bg-[#68432B] hover:text-white rounded-lg transition-colors"
                    >
                      Xem tất cả dịch vụ →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNav('bang-gia')}
              className={`hover:text-[#245943] transition-colors relative py-1 ${
                currentRoute === 'bang-gia' ? 'text-[#245943] font-bold border-b-2 border-[#245943]' : ''
              }`}
            >
              Menu & Bảng giá
            </button>

            <button 
              onClick={() => handleNav('danh-gia')}
              className={`hover:text-[#245943] transition-colors relative py-1 ${
                currentRoute === 'danh-gia' ? 'text-[#245943] font-bold border-b-2 border-[#245943]' : ''
              }`}
            >
              Đánh giá (4.8★)
            </button>

            <button 
              onClick={() => handleNav('tin-tuc')}
              className={`hover:text-[#245943] transition-colors relative py-1 ${
                currentRoute === 'tin-tuc' ? 'text-[#245943] font-bold border-b-2 border-[#245943]' : ''
              }`}
            >
              Tin tức
            </button>

            <button 
              onClick={() => handleNav('lien-he')}
              className={`hover:text-[#245943] transition-colors relative py-1 ${
                currentRoute === 'lien-he' ? 'text-[#245943] font-bold border-b-2 border-[#245943]' : ''
              }`}
            >
              Liên hệ
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-[#68432B] hover:text-[#245943] hover:bg-[#EBF4F0] rounded-full transition-colors"
              title="Tìm kiếm"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-gradient-to-r from-[#245943] to-[#1E4D38] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg hover:from-[#1E4D38] hover:to-[#16281F] flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-[#D4AF37]/40"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>ĐẶT LỊCH HẸN</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 bg-[#245943] text-white text-xs font-semibold rounded-full shadow flex items-center space-x-1"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Đặt lịch</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#382E2B] hover:text-[#245943] rounded-lg focus:outline-none"
              aria-label="Mở menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search input bar dropdown */}
        {searchOpen && (
          <div className="border-t border-[#E8DFD3] bg-[#FAF7F2] py-3 px-4 shadow-inner">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm dịch vụ massage, trị liệu, gội đầu..."
                className="flex-1 px-4 py-2 rounded-full border border-[#D5C7B7] bg-white text-sm focus:outline-none focus:border-[#245943]"
                autoFocus
              />
              <button
                type="submit"
                className="px-5 py-2 bg-[#245943] text-white text-sm font-semibold rounded-full hover:bg-[#1E4D38]"
              >
                Tìm kiếm
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 text-stone-500 hover:text-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation (Off-canvas sidebar) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF7F2] shadow-2xl flex flex-col z-50 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 bg-[#245943] text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#1E4D38] border border-[#D4AF37] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base leading-tight">BE WELLNESS SPA</h3>
                  <p className="text-[10px] text-[#A3D9C9] tracking-wider uppercase">Phố Cổ Hà Nội • 4.8★</p>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-white/80 hover:text-white rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick action buttons */}
            <div className="p-4 bg-[#F4EEE5] border-b border-[#E8DFD3] flex items-center gap-2">
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 bg-[#245943] text-white font-semibold text-xs rounded-xl shadow flex items-center justify-center space-x-1.5"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>ĐẶT LỊCH NGAY</span>
              </button>
              <a
                href={`tel:${SPA_INFO.phoneRaw}`}
                className="px-4 py-2.5 bg-[#68432B] text-white font-semibold text-xs rounded-xl shadow flex items-center justify-center"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Navigation items */}
            <div className="p-4 flex-1 space-y-1">
              <button
                onClick={() => handleNav('trang-chu')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  currentRoute === 'trang-chu' ? 'bg-[#245943] text-white font-bold' : 'text-[#382E2B] hover:bg-[#F4EEE5]'
                }`}
              >
                Trang chủ
              </button>

              <button
                onClick={() => handleNav('gioi-thieu')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  currentRoute === 'gioi-thieu' ? 'bg-[#245943] text-white font-bold' : 'text-[#382E2B] hover:bg-[#F4EEE5]'
                }`}
              >
                Giới thiệu
              </button>

              {/* Service Submenu in Drawer */}
              <div className="py-1">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm flex items-center justify-between ${
                    currentRoute.startsWith('dich-vu') ? 'text-[#245943] font-bold bg-[#EBF4F0]' : 'text-[#382E2B] hover:bg-[#F4EEE5]'
                  }`}
                >
                  <span>Dịch vụ Spa ({SERVICES.length})</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesDropdownOpen && (
                  <div className="pl-4 pr-1 py-1 space-y-1 bg-[#F4EEE5]/60 rounded-xl mt-1">
                    <button
                      onClick={() => handleNav('dich-vu')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#68432B] border-b border-[#E8DFD3]"
                    >
                      ★ Toàn bộ danh mục dịch vụ
                    </button>
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNav(`dich-vu/${s.id}`)}
                        className="w-full text-left px-3 py-2 text-xs text-[#382E2B] hover:text-[#245943] flex items-center justify-between"
                      >
                        <span>{s.title}</span>
                        {s.badge && (
                          <span className="text-[9px] bg-[#245943]/10 text-[#245943] font-bold px-1.5 py-0.5 rounded">
                            {s.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNav('bang-gia')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  currentRoute === 'bang-gia' ? 'bg-[#245943] text-white font-bold' : 'text-[#382E2B] hover:bg-[#F4EEE5]'
                }`}
              >
                Menu & Bảng giá dịch vụ
              </button>

              <button
                onClick={() => handleNav('danh-gia')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  currentRoute === 'danh-gia' ? 'bg-[#245943] text-white font-bold' : 'text-[#382E2B] hover:bg-[#F4EEE5]'
                }`}
              >
                Đánh giá khách hàng (4.8★)
              </button>

              <button
                onClick={() => handleNav('tin-tuc')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  currentRoute === 'tin-tuc' ? 'bg-[#245943] text-white font-bold' : 'text-[#382E2B] hover:bg-[#F4EEE5]'
                }`}
              >
                Tin tức & Cẩm nang
              </button>

              <button
                onClick={() => handleNav('lien-he')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  currentRoute === 'lien-he' ? 'bg-[#245943] text-white font-bold' : 'text-[#382E2B] hover:bg-[#F4EEE5]'
                }`}
              >
                Liên hệ & Bản đồ
              </button>
            </div>

            {/* Drawer Footer info */}
            <div className="p-4 bg-[#F4EEE5] border-t border-[#E8DFD3] text-xs text-[#68432B] space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#245943] shrink-0 mt-0.5" />
                <span>{SPA_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#245943] shrink-0" />
                <a href={`tel:${SPA_INFO.phoneRaw}`} className="font-bold hover:underline">
                  {SPA_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#245943] shrink-0" />
                <span>09:00 - 21:00 (Sắp đóng cửa lúc 21:00)</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onOpenDriveMenu();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 bg-[#FAF7F2] border border-[#68432B]/30 rounded-lg text-[#68432B] font-semibold text-center hover:bg-white"
                >
                  Mở Menu Google Drive 📁
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
