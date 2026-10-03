import React, { useState } from 'react';
import { X, Play, Volume2, VolumeX, Sparkles, MapPin } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export default function VideoTourModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#1C120D] text-left shadow-2xl transition-all border border-[#3D281D]">
          
          {/* Header */}
          <div className="p-4 bg-[#241711] text-white flex items-center justify-between border-b border-[#3D281D]">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                VIDEO TOUR KHÔNG GIAN BE WELLNESS SPA
              </h3>
            </div>
            <button onClick={onClose} className="p-1 text-white/80 hover:text-white rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container simulation with high quality aesthetics */}
          <div className="relative aspect-video bg-black overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85" 
              alt="Be Wellness Spa Experience"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 flex flex-col justify-between p-6">
              
              <div className="flex items-center justify-between">
                <span className="bg-[#245943]/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-white border border-[#D4AF37]/50 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  HD 1080p · Không gian thực tế
                </span>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Center Play indicator */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 text-[#241711] flex items-center justify-center mx-auto shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="text-white text-xs mt-3 font-medium tracking-wide">
                  Giai điệu thiền tĩnh lặng & Tiếng suối nước róc rách
                </p>
              </div>

              {/* Bottom bar */}
              <div className="text-white text-xs flex items-center justify-between bg-black/40 backdrop-blur px-4 py-2.5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>10 P. Nguyễn Quang Bích, Hoàn Kiếm, Hà Nội</span>
                </div>
                <span className="text-[#A3D9C9] font-medium">Bespoke Hotels Hanoi Trendy</span>
              </div>

            </div>
          </div>

          {/* Description */}
          <div className="p-4 sm:p-5 bg-[#241711] text-xs sm:text-sm text-[#D5C7B7] space-y-2">
            <p>
              Không gian Be Wellness Spa được thiết kế lấy cảm hứng từ kiến trúc mộc Á Đông kết hợp sự thanh lịch của boutique hotel phố cổ. Hệ thống ánh sáng vàng ấm, tinh dầu sả chanh tự nhiên và tiếng nhạc thiền nhẹ nhàng đưa quý khách vào trạng thái thư giãn tuyệt đối.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
