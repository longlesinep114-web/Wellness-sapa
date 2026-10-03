import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  MapPin,
  Tag
} from 'lucide-react';
import { SPA_INFO, SERVICES } from '../data/spaData';

export default function BookingModal({ isOpen, onClose, preselectedServiceId }) {
  const [selectedServiceId, setSelectedServiceId] = useState(preselectedServiceId || SERVICES[0].id);
  const [duration, setDuration] = useState('90');
  const [date, setDate] = useState('2026-10-06');
  const [time, setTime] = useState('15:00');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'BEWELLNESS15' || promoCode.trim().toUpperCase() === 'SPA15') {
      setPromoApplied(true);
    } else {
      alert('Mã ưu đãi không hợp lệ. Hãy thử mã "BEWELLNESS15" để giảm 15%!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Vui lòng nhập họ tên và số điện thoại liên hệ!');
      return;
    }

    const randomCode = 'BW-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(randomCode);

    // Save to localStorage
    const newBooking = {
      code: randomCode,
      service: currentService.title,
      duration: duration + ' phút',
      date,
      time,
      guests,
      name,
      phone,
      email,
      note,
      createdAt: new Date().toISOString()
    };
    const saved = JSON.parse(localStorage.getItem('be_wellness_bookings') || '[]');
    saved.push(newBooking);
    localStorage.setItem('be_wellness_bookings', JSON.stringify(saved));

    setIsSuccess(true);
  };

  const resetForm = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={resetForm}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-[#FAF7F2] text-left shadow-2xl transition-all border border-[#D5C7B7]">
          
          {/* Header */}
          <div className="bg-[#245943] text-white p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#1E4D38] border border-[#D4AF37] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  ĐẶT LỊCH HẸN TRỰC TUYẾN
                </h3>
                <p className="text-xs text-[#A3D9C9]">
                  Be Wellness Spa · 10 P. Nguyễn Quang Bích, Hoàn Kiếm, Hà Nội
                </p>
              </div>
            </div>
            <button 
              onClick={resetForm} 
              className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
            {isSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-[#245943]/10 text-[#245943] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-[#245943]" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#245943]">
                  Đặt Lịch Hẹn Thành Công!
                </h4>
                <div className="bg-[#F4EEE5] p-4 rounded-xl text-xs sm:text-sm text-[#382E2B] text-left space-y-2 border border-[#E8DFD3]">
                  <p><strong>Mã xác nhận:</strong> <span className="text-[#245943] font-bold text-base">{bookingCode}</span></p>
                  <p><strong>Khách hàng:</strong> {name} ({phone})</p>
                  <p><strong>Liệu trình:</strong> {currentService.title} ({duration} phút)</p>
                  <p><strong>Thời gian hẹn:</strong> {time}, ngày {date}</p>
                  <p><strong>Số lượng khách:</strong> {guests} người</p>
                  <p><strong>Địa chỉ:</strong> {SPA_INFO.address}</p>
                </div>
                <p className="text-xs text-[#68432B]">
                  Chuyên viên tư vấn của Be Wellness Spa sẽ liên hệ qua điện thoại/Zalo để xác nhận phòng trong vòng 5 phút!
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <a
                    href={`tel:${SPA_INFO.phoneRaw}`}
                    className="flex-1 py-3 bg-[#68432B] text-white text-xs font-bold rounded-xl text-center hover:bg-[#523421]"
                  >
                    Gọi hotline xác nhận ngay: {SPA_INFO.phone}
                  </a>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-[#245943] text-white text-xs font-bold rounded-xl hover:bg-[#1E4D38]"
                  >
                    Hoàn tất
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                {/* Select Service */}
                <div>
                  <label className="block font-semibold text-[#382E2B] mb-1">
                    Chọn dịch vụ trị liệu *
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.duration}) - Từ {s.priceFrom}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Duration & Guests */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Thời lượng
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                    >
                      <option value="60">60 phút (Thư giãn)</option>
                      <option value="90">90 phút (Trị liệu sâu - Phổ biến)</option>
                      <option value="120">120 phút (Toàn diện chuyên sâu)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Số lượng khách
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                    >
                      <option value="1">1 khách</option>
                      <option value="2">2 khách (Phòng Couple VIP)</option>
                      <option value="3">3 khách (Nhóm bạn / Gia đình)</option>
                      <option value="4+">4 khách trở lên</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#245943]" />
                      <span>Ngày hẹn *</span>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#245943]" />
                      <span>Giờ đón khách *</span>
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                    >
                      <option value="09:00">09:00 (Sáng sớm thư thả)</option>
                      <option value="10:30">10:30</option>
                      <option value="12:00">12:00 (Nghỉ trưa)</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:30">16:30</option>
                      <option value="18:00">18:00 (Hoàng hôn)</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00 (Lượt cuối đón khách)</option>
                    </select>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-3 pt-1">
                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ví dụ: Nguyễn Văn A / Mr. David"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#382E2B] mb-1">
                        Số điện thoại / Zalo / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="09xx xxx xxx"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#382E2B] mb-1">
                        Email nhận xác nhận (tùy chọn)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#382E2B] mb-1">
                      Ghi chú đặc biệt (Yêu cầu lực massage, phòng riêng, điểm đau...)
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={2}
                      placeholder="Ví dụ: Tập trung giảm mỏi cổ vai gáy, dùng lực vừa phải, phòng đôi cho 2 người..."
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D5C7B7] bg-white text-[#382E2B] focus:outline-none focus:border-[#245943] text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Promo code bar */}
                <div className="bg-[#F4EEE5] p-3 rounded-xl border border-[#E8DFD3] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-1">
                    <Tag className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Mã giảm giá (ví dụ: BEWELLNESS15)"
                      className="w-full bg-white px-2.5 py-1.5 rounded-lg border border-[#D5C7B7] text-xs uppercase"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-3 py-1.5 bg-[#68432B] text-white text-xs font-semibold rounded-lg shrink-0 hover:bg-[#523421]"
                  >
                    Áp dụng
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-emerald-700 font-semibold">
                    ✓ Đã áp dụng mã BEWELLNESS15: Giảm ngay 15% tổng hóa đơn!
                  </p>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#245943] to-[#1E4D38] hover:from-[#1E4D38] hover:to-[#16281F] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg border border-[#D4AF37]/50 flex items-center justify-center space-x-2 transition-all"
                  >
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    <span>XÁC NHẬN ĐẶT LỊCH HẸN</span>
                  </button>
                  <p className="text-[11px] text-center text-stone-500 mt-2">
                    Miễn phí hủy phòng / đổi lịch trước 2 giờ. Không yêu cầu thanh toán trước.
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
