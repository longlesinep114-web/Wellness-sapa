import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Compass
} from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export default function ContactPage({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Tư vấn liệu trình spa',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSent(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1E3B2E] to-[#2F1E14] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            KẾT NỐI VỚI CHÚNG TÔI
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Liên Hệ Be Wellness Spa
          </h1>
          <p className="text-xs sm:text-base text-[#EBF4F0]/90 max-w-2xl mx-auto leading-relaxed">
            Hãy liên hệ ngay cho chúng tôi để được tư vấn về dịch vụ spa và nhận ưu đãi tốt nhất!
          </p>
        </div>
      </section>

      {/* Contact Cards & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
                THÔNG TIN TRỰC TIẾP
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#245943] mt-1">
                LIÊN HỆ TƯ VẤN DỊCH VỤ
              </h2>
            </div>

            {/* Hotline Highlight Card */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD3] shadow-spa space-y-2">
              <span className="text-[11px] font-bold text-[#8B5C3B] uppercase">Đường dây nóng đặt lịch 24/7</span>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#245943] text-white flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <a 
                    href={`tel:${SPA_INFO.phoneRaw}`}
                    className="text-xl sm:text-2xl font-extrabold text-[#245943] hover:underline"
                  >
                    {SPA_INFO.phone}
                  </a>
                  <p className="text-xs text-[#68432B]">Be Wellness Spa - Bespoke Hanoi Trendy</p>
                </div>
              </div>
            </div>

            {/* Address & Plus Code Card */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD3] shadow-spa space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#245943] shrink-0 mt-1" />
                <div className="space-y-1 text-xs sm:text-sm text-[#382E2B]">
                  <p className="font-bold text-[#245943]">Địa chỉ chính thức:</p>
                  <p>{SPA_INFO.address}</p>
                  <p className="pt-1">
                    <span className="bg-[#245943] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Plus Code
                    </span>
                    <span className="ml-2 font-mono">{SPA_INFO.plusCode}</span>
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-[#E8DFD3]">
                <a
                  href={SPA_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#245943] hover:underline inline-flex items-center gap-1"
                >
                  <span>Mở Google Maps chỉ đường →</span>
                </a>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFD3] shadow-spa space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#245943] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#382E2B] space-y-1">
                  <p className="font-bold text-[#245943]">Giờ mở cửa:</p>
                  <p>09:00 - 21:00 hàng ngày (kể cả Thứ 7, Chủ Nhật và ngày lễ)</p>
                  <p className="text-xs text-amber-700 font-medium">Sắp đóng cửa · 21:00 · Mở cửa lúc 9:00 Thứ 6</p>
                </div>
              </div>
            </div>

            {/* Landmarks guide */}
            <div className="bg-[#F4EEE5] p-5 rounded-2xl border border-[#E8DFD3] space-y-2 text-xs text-[#68432B]">
              <div className="flex items-center gap-1.5 font-bold text-[#245943]">
                <Compass className="w-4 h-4" />
                <span>Khoảng cách đến các địa danh nổi tiếng:</span>
              </div>
              <ul className="space-y-1 list-disc pl-5">
                <li>Cách Nhà thờ Lớn Hà Nội: <strong>500m (5 phút đi bộ)</strong></li>
                <li>Cách Hồ Hoàn Kiếm / Tháp Rùa: <strong>800m (8 phút đi bộ)</strong></li>
                <li>Cách Chợ Đồng Xuân / Chợ Đêm Phố Cổ: <strong>900m</strong></li>
                <li>Cách Ga Hà Nội: <strong>1.2km (5 phút taxi)</strong></li>
              </ul>
            </div>

          </div>

          {/* Right: Feedback & Contact Form (Clone feature: GÓP Ý - PHẢN HỒI) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-10 rounded-3xl border border-[#E8DFD3] shadow-spa space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8B5C3B] font-bold">
                GỬI TIN NHẮN TRỰC TUYẾN
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#245943] mt-1">
                Góp Ý – Phản Hồi & Tư Vấn Dịch Vụ
              </h3>
              <p className="text-xs sm:text-sm text-[#68432B] mt-1">
                Chúng tôi luôn trân trọng mọi ý kiến đóng góp của quý khách để không ngừng nâng cao chất lượng phục vụ.
              </p>
            </div>

            {sent ? (
              <div className="p-6 bg-[#EBF4F0] rounded-2xl border border-[#245943]/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#245943] mx-auto" />
                <h4 className="font-serif font-bold text-lg text-[#245943]">
                  Tin Nhắn Đã Được Gửi Thành Công!
                </h4>
                <p className="text-xs sm:text-sm text-[#382E2B]">
                  Đội ngũ quản lý Be Wellness Spa sẽ liên hệ lại với bạn trong thời gian sớm nhất qua số điện thoại hoặc email.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-5 py-2 bg-[#245943] text-white text-xs font-bold rounded-xl"
                >
                  Gửi thêm tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="09xx xxx xxx"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Chủ đề
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943]"
                    >
                      <option value="Tư vấn liệu trình spa">Tư vấn liệu trình spa</option>
                      <option value="Đặt tiệc / Gói VIP Couple">Đặt tiệc / Gói VIP Couple</option>
                      <option value="Góp ý chất lượng dịch vụ">Góp ý chất lượng dịch vụ</option>
                      <option value="Hợp tác đối tác du lịch / Klook">Hợp tác đối tác du lịch / Klook</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#382E2B] mb-1">
                    Nội dung tin nhắn / Góp ý *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Nhập nội dung tin nhắn hoặc câu hỏi của bạn tại đây..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#245943] to-[#1E4D38] hover:from-[#1E4D38] hover:to-[#16281F] text-white font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all border border-[#D4AF37]/40"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>GỬI THÔNG ĐIỆP</span>
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-3xl border border-[#E8DFD3] shadow-spa space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-lg text-[#245943]">
              Bản Đồ Google Maps Trực Quan
            </h3>
            <span className="text-xs text-[#8B5C3B] font-medium">10 Nguyễn Quang Bích, Hoàn Kiếm, Hà Nội</span>
          </div>

          <div className="w-full aspect-[21/9] min-h-[350px] rounded-2xl overflow-hidden border border-[#D5C7B7] shadow-inner bg-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9575317769493!2d105.84310107598822!3d21.034384987588394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe63bc2ec6d%3A0x4635f0d7442cd2b8!2sBe%20Wellness%20Spa!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Be Wellness Spa Location Map"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
