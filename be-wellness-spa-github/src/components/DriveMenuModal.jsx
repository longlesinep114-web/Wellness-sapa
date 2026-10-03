import React from 'react';
import { X, FolderOpen, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';
import { SPA_INFO, SERVICES } from '../data/spaData';

export default function DriveMenuModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#FAF7F2] text-left shadow-2xl transition-all border border-[#D5C7B7]">
          
          {/* Header */}
          <div className="bg-[#68432B] text-white p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#523421] border border-[#D4AF37] flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  MENU DỊCH VỤ & BẢNG GIÁ NIÊM YẾT
                </h3>
                <p className="text-xs text-[#E8DFD3]">
                  Tài liệu Google Drive chính thức từ Be Wellness Spa
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 text-white/80 hover:text-white rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-5">
            <div className="bg-[#EBF4F0] p-4 rounded-xl border border-[#245943]/20 flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#245943] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#245943]">
                <p className="font-bold">Thư mục Google Drive trực tiếp</p>
                <p className="text-[#382E2B] mt-0.5">
                  Bao gồm đầy đủ menu song ngữ Anh - Việt, hình ảnh chi tiết các phòng trị liệu, danh mục thảo mộc organic và chính sách ưu đãi thành viên.
                </p>
              </div>
            </div>

            {/* Quick action to open Google Drive */}
            <div className="text-center p-5 bg-white rounded-xl border border-[#D5C7B7] space-y-3">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-[#68432B]">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#382E2B]">
                Xem Toàn Bộ Menu Tại Google Drive
              </h4>
              <p className="text-xs text-[#68432B] max-w-md mx-auto">
                Nhấp vào liên kết bên dưới để mở trực tiếp folder Google Drive chứa các file PDF chất lượng cao nhất.
              </p>
              <div>
                <a
                  href={SPA_INFO.googleDriveMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#245943] hover:bg-[#1E4D38] text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition-all hover:scale-105"
                >
                  <span>MỞ TRỰC TIẾP TRÊN GOOGLE DRIVE</span>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                </a>
              </div>
            </div>

            {/* Quick list of available menu files */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#68432B]">
                Các tài liệu có sẵn trong folder:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-white rounded-lg border border-[#E8DFD3] flex items-center justify-between">
                  <span className="font-medium text-[#382E2B]">1. Menu_BeWellness_Spa_2026.pdf</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">PDF</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E8DFD3] flex items-center justify-between">
                  <span className="font-medium text-[#382E2B]">2. Bang_Gia_Tri_Lieu_Dong_Y.pdf</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">PDF</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E8DFD3] flex items-center justify-between">
                  <span className="font-medium text-[#382E2B]">3. Package_VIP_Couple_Hanoi.pdf</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">PDF</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E8DFD3] flex items-center justify-between">
                  <span className="font-medium text-[#382E2B]">4. Catalogue_Thao_Moc_Organic.pdf</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">PDF</span>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#F4EEE5] px-6 py-3 border-t border-[#E8DFD3] flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-300 hover:bg-stone-400 text-stone-800 text-xs font-semibold rounded-lg"
            >
              Đóng lại
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
