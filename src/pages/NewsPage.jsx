import React from 'react';
import { Clock, Calendar, ArrowRight, User, BookOpen } from 'lucide-react';
import { NEWS_POSTS } from '../data/spaData';

export default function NewsPage({ navigateTo }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1E3B2E] to-[#2F1E14] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            GÓC CHUYÊN GIA DƯỠNG SINH
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Tin Tức & Cẩm Nang Chăm Sóc Sức Khỏe
          </h1>
          <p className="text-xs sm:text-base text-[#EBF4F0]/90 max-w-2xl mx-auto leading-relaxed">
            Chia sẻ các bài thuốc dân gian, phương pháp bấm huyệt giải tỏa căng thẳng và bí quyết làm đẹp từ thiên nhiên.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_POSTS.map((post) => (
            <article 
              key={post.slug}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFD3] shadow-spa hover:shadow-spa-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-[#68432B] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-[#8B5C3B] font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 
                    onClick={() => navigateTo(`tin-tuc/${post.slug}`)}
                    className="text-lg sm:text-xl font-serif font-bold text-[#245943] hover:text-[#68432B] cursor-pointer transition-colors leading-snug line-clamp-2"
                  >
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#68432B]/85 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E8DFD3] mt-2">
                <div className="flex items-center justify-between pt-3">
                  <span className="text-[11px] text-stone-600 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#245943]" />
                    <span className="truncate max-w-[140px]">{post.author}</span>
                  </span>

                  <button
                    onClick={() => navigateTo(`tin-tuc/${post.slug}`)}
                    className="text-xs font-bold text-[#245943] hover:text-[#1E4D38] inline-flex items-center gap-1"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
