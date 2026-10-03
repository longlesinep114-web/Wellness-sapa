import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  TrendingUp, 
  ThumbsUp,
  Filter
} from 'lucide-react';
import { REVIEWS, SPA_INFO, BUSY_HOURS_DATA } from '../data/spaData';

export default function ReviewsPage({ navigateTo, onOpenBooking }) {
  const [filterLang, setFilterLang] = useState('all');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewAuthor || !newReviewComment) return;

    const newRev = {
      id: Date.now(),
      name: newReviewAuthor,
      country: "Khách vừa gửi 🇻🇳",
      rating: newReviewRating,
      date: "Vừa xong",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      text: newReviewComment,
      translation: ""
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setNewReviewAuthor('');
    setNewReviewComment('');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1E3B2E] to-[#2F1E14] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            TRẢI NGHIỆM KHÁCH HÀNG THỰC TẾ
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Đánh Giá & Vị Trí Be Wellness Spa
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-[#A3D9C9]">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-white">4.8 / 5.0</span>
            <span>•</span>
            <span>{SPA_INFO.reviewCount} lượt đánh giá Google Maps</span>
          </div>
        </div>
      </section>

      {/* Rating Breakdown & Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8DFD3] shadow-spa grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Overall score */}
          <div className="lg:col-span-4 text-center sm:text-left space-y-2 border-b lg:border-b-0 lg:border-r border-[#E8DFD3] pb-6 lg:pb-0 lg:pr-8">
            <span className="text-5xl sm:text-6xl font-serif font-extrabold text-[#245943]">4.8</span>
            <div className="flex justify-center sm:justify-start text-[#D4AF37] my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs font-semibold text-[#8B5C3B] uppercase tracking-wider">
              {SPA_INFO.sponsoredTag} · Be Wellness Spa
            </p>
            <p className="text-xs text-[#68432B]">
              Xếp hạng hàng đầu trong danh bạ Spa mát xa khu vực Hoàn Kiếm, Phố cổ Hà Nội.
            </p>
          </div>

          {/* Stars Progress bars */}
          <div className="lg:col-span-8 space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-12 font-bold text-[#382E2B]">5 sao</span>
              <div className="flex-1 bg-[#E8DFD3] h-3 rounded-full overflow-hidden">
                <div className="bg-[#245943] h-full rounded-full w-[92%]" />
              </div>
              <span className="w-10 text-right text-[#68432B] font-semibold">92%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-bold text-[#382E2B]">4 sao</span>
              <div className="flex-1 bg-[#E8DFD3] h-3 rounded-full overflow-hidden">
                <div className="bg-[#4A8B6B] h-full rounded-full w-[6%]" />
              </div>
              <span className="w-10 text-right text-[#68432B] font-semibold">6%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-bold text-[#382E2B]">3 sao</span>
              <div className="flex-1 bg-[#E8DFD3] h-3 rounded-full overflow-hidden">
                <div className="bg-[#C59B27] h-full rounded-full w-[2%]" />
              </div>
              <span className="w-10 text-right text-[#68432B] font-semibold">2%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-bold text-[#382E2B]">2 sao</span>
              <div className="flex-1 bg-[#E8DFD3] h-3 rounded-full overflow-hidden">
                <div className="bg-stone-400 h-full rounded-full w-[0%]" />
              </div>
              <span className="w-10 text-right text-[#68432B] font-semibold">0%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-bold text-[#382E2B]">1 sao</span>
              <div className="flex-1 bg-[#E8DFD3] h-3 rounded-full overflow-hidden">
                <div className="bg-stone-400 h-full rounded-full w-[0%]" />
              </div>
              <span className="w-10 text-right text-[#68432B] font-semibold">0%</span>
            </div>
          </div>

        </div>
      </section>

      {/* Review list & Write a review form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Reviews list */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-3">
              <h3 className="font-serif font-bold text-xl text-[#245943]">
                Tất Cả Bài Đánh Giá ({reviewsList.length})
              </h3>
            </div>

            <div className="space-y-4">
              {reviewsList.map((r) => (
                <div 
                  key={r.id}
                  className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#E8DFD3] shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={r.avatar} 
                        alt={r.name} 
                        className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
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

                  <p className="text-xs sm:text-sm text-[#382E2B] leading-relaxed">
                    "{r.text}"
                  </p>

                  {r.translation && (
                    <div className="bg-[#EBF4F0] p-3 rounded-xl border border-[#245943]/20 text-xs text-[#245943]">
                      <span className="font-bold block text-[10px] uppercase text-[#245943]">Bản dịch tiếng Việt:</span>
                      <span>{r.translation}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-[#E8DFD3] text-[11px] text-stone-600">
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Xác thực khách ghé thăm
                    </span>
                    <button className="flex items-center gap-1 hover:text-[#245943]">
                      <ThumbsUp className="w-3.5 h-3.5" /> Hữu ích (12)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Submit a review */}
          <div className="lg:col-span-4 bg-[#FAF7F2] p-6 rounded-3xl border border-[#E8DFD3] shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#245943]">
              Gửi Đánh Giá Của Bạn
            </h3>
            <p className="text-xs text-[#68432B]">
              Chia sẻ cảm nhận về liệu trình massage và không gian tại Be Wellness Spa để giúp chúng tôi hoàn thiện hơn.
            </p>

            {submitted && (
              <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold">
                ✓ Cảm ơn bạn! Đánh giá đã được gửi và hiển thị trên trang.
              </div>
            )}

            <form onSubmit={handleAddReview} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-[#382E2B] mb-1">
                  Đánh giá số sao
                </label>
                <div className="flex space-x-2 text-[#D4AF37]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReviewRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star className={`w-6 h-6 ${star <= newReviewRating ? 'fill-current' : 'text-stone-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#382E2B] mb-1">
                  Họ và tên của bạn *
                </label>
                <input
                  type="text"
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  placeholder="Ví dụ: Hoàng Lan"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#D5C7B7] bg-white focus:outline-none focus:border-[#245943]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#382E2B] mb-1">
                  Nhận xét chi tiết *
                </label>
                <textarea
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  rows={4}
                  placeholder="Chia sẻ về tay nghề kỹ thuật viên, không gian, mùi hương..."
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#D5C7B7] bg-white focus:outline-none focus:border-[#245943]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#245943] hover:bg-[#1E4D38] text-white font-bold rounded-xl shadow transition-colors"
              >
                Gửi Đánh Giá Ngay
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map & Location Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8DFD3] shadow-spa space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#8B5C3B] font-bold">
                BẢN ĐỒ VỊ TRÍ
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#245943] mt-1">
                10 P. Nguyễn Quang Bích, Phố cổ Hà Nội
              </h3>
              <p className="text-xs sm:text-sm text-[#68432B] mt-1">
                Plus Code: <strong>2RJW+W7 Hoàn Kiếm, Hà Nội, Việt Nam</strong>
              </p>
            </div>

            <a
              href={SPA_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#245943] hover:bg-[#1E4D38] text-white font-bold text-xs sm:text-sm rounded-full shadow inline-flex items-center gap-2 self-start md:self-auto"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Chỉ đường trên Google Maps →</span>
            </a>
          </div>

          {/* Interactive Google Map iframe container */}
          <div className="w-full aspect-[21/9] min-h-[320px] rounded-2xl overflow-hidden border border-[#D5C7B7] shadow-inner bg-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9575317769493!2d105.84310107598822!3d21.034384987588394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe63bc2ec6d%3A0x4635f0d7442cd2b8!2sBe%20Wellness%20Spa!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Be Wellness Spa Map"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
