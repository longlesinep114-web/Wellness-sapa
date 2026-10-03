import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { NEWS_POSTS } from '../data/spaData';

export default function NewsDetailPage({ slug, navigateTo, onOpenBooking }) {
  const post = NEWS_POSTS.find(p => p.slug === slug) || NEWS_POSTS[0];
  const otherPosts = NEWS_POSTS.filter(p => p.slug !== post.slug);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    alert('Đã sao chép liên kết bài viết vào bộ nhớ tạm!');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#F4EEE5] py-4 px-4 sm:px-6 border-b border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs">
          <button
            onClick={() => navigateTo('tin-tuc')}
            className="flex items-center space-x-1.5 text-[#245943] hover:text-[#1E4D38] font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh mục tin tức</span>
          </button>
          <span className="text-[#8B5C3B] font-semibold">{post.category}</span>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs bg-[#245943]/10 text-[#245943] font-bold px-3 py-1 rounded-full uppercase">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#245943] leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#8B5C3B] border-y border-[#E8DFD3] py-3">
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1.5 font-semibold text-[#382E2B]">
                <User className="w-4 h-4 text-[#245943]" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 text-[#245943] hover:text-[#1E4D38] font-bold"
            >
              <Share2 className="w-4 h-4" />
              <span>Chia sẻ bài viết</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-stone-200">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Excerpt Lead */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border-l-4 border-[#245943] shadow-sm">
          <p className="text-sm sm:text-base font-serif italic text-[#382E2B] leading-relaxed">
            "{post.excerpt}"
          </p>
        </div>

        {/* Content Body */}
        <div 
          className="prose prose-stone max-w-none text-xs sm:text-sm text-[#382E2B] leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Booking Box */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFD3] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-spa mt-10">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif font-bold text-lg text-[#245943]">
              Bạn cần giải tỏa đau mỏi và căng thẳng?
            </h3>
            <p className="text-xs text-[#68432B]">
              Trải nghiệm liệu trình chuyên sâu tại Be Wellness Spa 10 Nguyễn Quang Bích ngay hôm nay!
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#245943] hover:bg-[#1E4D38] text-white font-bold text-xs sm:text-sm rounded-full shadow shrink-0"
          >
            ĐẶT LỊCH HẸN NGAY
          </button>
        </div>

      </article>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 border-t border-[#E8DFD3]">
        <h3 className="font-serif font-bold text-xl text-[#245943] mb-6">
          Bài viết liên quan
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherPosts.map((p) => (
            <div 
              key={p.slug}
              onClick={() => navigateTo(`tin-tuc/${p.slug}`)}
              className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD3] hover:shadow-md transition-all cursor-pointer group flex gap-4"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-24 h-24 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="space-y-1">
                <span className="text-[10px] text-[#8B5C3B] font-semibold">{p.date}</span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#245943] group-hover:text-[#68432B] line-clamp-2">
                  {p.title}
                </h4>
                <span className="text-[11px] font-bold text-[#245943] inline-flex items-center gap-1 mt-1">
                  Đọc tiếp →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
