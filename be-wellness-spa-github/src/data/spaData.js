export const SPA_INFO = {
  name: "Be Wellness Spa",
  sponsoredTag: "Được tài trợ",
  tagline: "Vỗ Về Cơ Thể, Dịu Êm Tâm Trí",
  subTagline: "Trải nghiệm dưỡng sinh & trị liệu spa đỉnh cao giữa lòng Phố Cổ Hà Nội",
  rating: 4.8,
  reviewCount: 496,
  category: "Spa mát xa · Trị liệu Đông Y · Chăm sóc sức khỏe toàn diện",
  address: "10 P. Nguyễn Quang Bích, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội 100000, Việt Nam",
  plusCode: "2RJW+W7 Hoàn Kiếm, Hà Nội, Việt Nam",
  phone: "+84 24 3923 4026",
  phoneRaw: "+842439234026",
  email: "bewellness@bespokehotels.vn",
  website: "https://bespokehotels.vn/trendyhn/be-wellness-spa",
  klookUrl: "https://www.klook.com",
  klookPrice: "2.211.968 ₫",
  klookDates: "Thứ 3, 6 thg 10 - Thứ 4, 7 thg 10 (2 khách)",
  googleDriveMenuUrl: "https://drive.google.com/drive/folders/1dc--YHGynhRl61cyJRRs4vg8MayboqyO",
  googleMapsUrl: "https://www.google.com/maps/place/Be+Wellness+Spa/@21.032283,105.7694583,13z/data=!4m12!1m2!2m1!1sspa!3m8!1s0x3135abe63bc2ec6d:0x4635f0d7442cd2b8!5m2!4m1!1i2!8m2!3d21.0322832!4d105.845676!16s%2Fg%2F11s_xvj6fh",
  hoursText: "Mở cửa hàng ngày: 09:00 - 21:00 (Sắp đóng cửa · 21:00 · Mở cửa lúc 9:00 Thứ 6)",
  openTime: "09:00",
  closeTime: "21:00",
  surroundings: {
    district: "Hoàn Kiếm, Hà Nội",
    score: 4.6,
    scoreDesc: "Tuyệt hảo cho khách du lịch",
    highlight: "Khu vực trung tâm ghi dấu ấn riêng với các cửa hàng đồ thủ công và ẩm thực đường phố trong khu phố cổ, cùng Nhà thờ Lớn Hà Nội."
  }
};

export const BUSY_HOURS_DATA = [
  { time: "06:00", level: 10, label: "Vắng" },
  { time: "09:00", level: 35, label: "Bắt đầu đón khách" },
  { time: "12:00", level: 65, label: "Giờ nghỉ trưa" },
  { time: "15:00", level: 85, label: "Đông khách" },
  { time: "18:00", level: 95, label: "Cao điểm nhất" },
  { time: "21:00", level: 50, label: "Đón lượt khách cuối" }
];

export const SERVICES = [
  {
    id: "massage-toan-than",
    title: "Massage Toàn Thân",
    subtitle: "Đánh thức mọi giác quan, lưu thông kinh lạc và xua tan căng thẳng cơ bắp",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    badge: "Phổ biến",
    duration: "60 - 90 - 120 phút",
    priceFrom: "450.000 ₫",
    description: "Be Wellness Spa mang đến liệu pháp massage toàn thân đa phong cách kết hợp tinh hoa Đông - Tây (Thụy Điển nhẹ nhàng, Thái truyền thống giãn cơ, và Tinh dầu thơm thảo mộc tự nhiên). Giúp cơ thể phục hồi sau ngày dài khám phá phố cổ Hà Nội.",
    benefits: [
      "Giải phóng các khối cơ co thắt, xoa dịu đau nhức vai lưng và hông",
      "Kích thích tuần hoàn máu huyết, đào thải độc tố tự nhiên",
      "Thư giãn hệ thần kinh sâu sắc, cải thiện chất lượng giấc ngủ",
      "Cung cấp dưỡng chất từ tinh dầu organic, làm mềm và sáng da"
    ],
    pricing: [
      { duration: "60 phút", price: "450.000 ₫", original: "550.000 ₫" },
      { duration: "90 phút", price: "650.000 ₫", original: "800.000 ₫", popular: true },
      { duration: "120 phút", price: "850.000 ₫", original: "1.050.000 ₫" }
    ],
    procedure: [
      { step: "Bước 1", title: "Thưởng thức trà thảo mộc & Ngâm chân", desc: "Uống trà gừng mật ong ấm nóng và ngâm chân bồn gỗ thảo dược quế hồi." },
      { step: "Bước 2", title: "Khởi động & Bấm huyệt giải cơ", desc: "Kỹ thuật viên ấn mở các huyệt đạo chính dọc sống lưng và chi dưới." },
      { step: "Bước 3", title: "Massage tinh dầu thảo mộc ấm", desc: "Thực hiện miết dài, xoa bóp chuyên sâu bằng tinh dầu sả chanh hoặc hoa cúc hữu cơ." },
      { step: "Bước 4", title: "Trị liệu đá nóng núi lửa Himalaya", desc: "Đặt đá basalt giữ nhiệt lên các luân xa lưng để làm ấm thận và lưu thông khí huyết." },
      { step: "Bước 5", title: "Thư giãn vùng đầu, cổ vai gáy", desc: "Massage thả lỏng đốt sống cổ và da đầu, lau khăn ấm thảo dược thơm dịu." }
    ]
  },
  {
    id: "massage-tri-lieu",
    title: "Massage Trị Liệu",
    subtitle: "Chuyên sâu vùng Cổ - Vai - Gáy, thắt lưng, cứu ngải giải hàn khí",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80",
    badge: "Nổi bật",
    duration: "60 - 90 phút",
    priceFrom: "520.000 ₫",
    description: "Liệu trình ứng dụng y học cổ truyền kết hợp kỹ thuật nắn chỉnh mô sâu và hơ ngải cứu y học cổ truyền. Đặc biệt tối ưu cho người ngồi văn phòng, đau cổ vai gáy mãn tính, tê bì tay chân hay du khách mệt mỏi vì chênh lệch múi giờ.",
    benefits: [
      "Đánh tan các nút thắt cơ sâu (trigger points) tại vùng bả vai và gáy",
      "Khu phong tán hàn, giữ ấm tạng phủ bằng liệu pháp điếu ngải cứu nguyên chất",
      "Tăng cường lưu thông máu não, dứt điểm triệu chứng hoa mắt, chóng mặt",
      "Được thực hiện bởi kỹ thuật viên trên 5 năm kinh nghiệm trị liệu Đông Y"
    ],
    pricing: [
      { duration: "60 phút", price: "520.000 ₫", original: "650.000 ₫" },
      { duration: "90 phút", price: "750.000 ₫", original: "920.000 ₫", popular: true }
    ],
    procedure: [
      { step: "Bước 1", title: "Thăm khám & Bắt mạch vùng đau", desc: "Xác định chính xác vị trí co thắt cơ và kinh lạc bị tắc nghẽn." },
      { step: "Bước 2", title: "Chườm túi thảo dược 18 vị ấm", desc: "Làm mềm các bó cơ thớ cứng trước khi thao tác lực sâu." },
      { step: "Bước 3", title: "Kỹ thuật day ấn huyệt Phong Trì, Kiên Tỉnh", desc: "Giải phóng chèn ép rễ thần kinh vùng cổ và đốt sống thắt lưng." },
      { step: "Bước 4", title: "Cứu ngải điếu thảo mộc", desc: "Hơ ấm kinh lạc, đẩy lùi hàn khí và ứ trệ kinh lạc." },
      { step: "Bước 5", title: "Kéo giãn cơ chuyên sâu & Dặn dò tự chăm sóc", desc: "Nới lỏng biên độ khớp vai và cổ một cách nhẹ nhàng, an toàn." }
    ]
  },
  {
    id: "goi-dau-duong-sinh",
    title: "Gội Đầu Dưỡng Sinh",
    subtitle: "Liệu pháp canh thảo dược tươi cổ truyền thư giãn thần kinh & dưỡng tóc",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80",
    badge: "Hot",
    duration: "45 - 75 - 90 phút",
    priceFrom: "350.000 ₫",
    description: "Hòa mình vào hương bồ kết, sả, chanh, vỏ bưởi và hương nhu nấu tươi trong ngày. Kết hợp bấm huyệt vùng đầu mặt, đắp mặt nạ ngọc trai và xông đầu thảo dược giúp thanh lọc trí óc hoàn hảo.",
    benefits: [
      "Làm sạch sâu da đầu không hóa chất, nuôi nang tóc bóng mượt chắc khỏe",
      "Xua tan áp lực trí não, giảm căng thẳng thần kinh và đau đầu kinh niên",
      "Massage nâng cơ mặt ngọc thạch anh, trẻ hóa làn da tự nhiên",
      "Hệ thống vòng tuần hoàn thác nước ấm thư thái như suối ngàn"
    ],
    pricing: [
      { duration: "45 phút (Gội thảo mộc dưỡng)", price: "350.000 ₫", original: "420.000 ₫" },
      { duration: "75 phút (Dưỡng sinh đả thông đầu - cổ)", price: "490.000 ₫", original: "600.000 ₫", popular: true },
      { duration: "90 phút (Hoàng Cung Trọn Gói)", price: "690.000 ₫", original: "850.000 ₫" }
    ],
    procedure: [
      { step: "Bước 1", title: "Khai thông huyệt vị đầu", desc: "Sử dụng lược ngọc gừng chải thông kinh lạc mạch đốc và mạch nhâm trên da đầu." },
      { step: "Bước 2", title: "Gội sạch lần 1 với nước bồ kết thủ công", desc: "Làm sạch bụi bẩn và dầu nhờn dịu nhẹ không kích ứng." },
      { step: "Bước 3", title: "Tẩy tế bào chết da đầu thảo mộc & Massage bọt tơ", desc: "Thanh tẩy tế bào sừng với muối hồng và tinh dầu bạc hà." },
      { step: "Bước 4", title: "Tưới canh thảo dược ấm qua vòm tuần hoàn", desc: "Dòng nước ấm liên tục xoa dịu vùng chân tóc và trán thư giãn cực độ." },
      { step: "Bước 5", title: "Massage Cổ Vai Gáy & Sấy tạo kiểu dưỡng tinh dầu", desc: "Xoa bóp giảm nhức mỏi hai bả vai, sấy tóc ấm và bôi dưỡng chất argan." }
    ]
  },
  {
    id: "massage-chan",
    title: "Massage Chân (Foot Reflexology)",
    subtitle: "Phục hồi từng bước chân nhẹ tựa mây sau hành trình dạo phố cổ",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1000&q=80",
    badge: "Khuyên dùng",
    duration: "60 - 90 phút",
    priceFrom: "380.000 ₫",
    description: "Bàn chân chứa hơn 7.200 đầu mút dây thần kinh liên hệ mật thiết đến lục phủ ngũ tạng. Liệu trình ngâm chân muối gừng sả và ấn huyệt lòng bàn chân của Be Wellness Spa mang lại sức sống tức thì cho đôi chân mệt mỏi.",
    benefits: [
      "Giảm phù nề, căng tức bắp chân và gót chân nhanh chóng",
      "Kích hoạt hệ bài tiết và tuần hoàn máu ngược về tim",
      "Giải phóng tắc nghẽn năng lượng ở các cơ quan phản chiếu",
      "Kèm massage bàn tay và vùng vai gáy thư thái"
    ],
    pricing: [
      { duration: "60 phút", price: "380.000 ₫", original: "480.000 ₫" },
      { duration: "90 phút (Kèm chườm đá nóng bắp chân)", price: "550.000 ₫", original: "680.000 ₫", popular: true }
    ],
    procedure: [
      { step: "Bước 1", title: "Ngâm chân muối khoáng & thảo mộc cổ truyền", desc: "Thư giãn các cơ bàn chân trong nước ấm 42°C thơm mùi quế hồi gừng tươi." },
      { step: "Bước 2", title: "Vệ sinh & Tẩy da chết nhẹ gót chân", desc: "Loại bỏ phần sừng thô ráp, làm mềm mịn gót hồng." },
      { step: "Bước 3", title: "Bấm huyệt Dũng Tuyền và vùng phản xạ", desc: "Dùng lực ngón tay chính xác kích thích các điểm phản xạ tạng phủ." },
      { step: "Bước 4", title: "Vuốt miết kinh lạc cẳng chân & Chườm ấm", desc: "Kỹ thuật kéo vuốt giải tỏa ứ trệ bạch huyết vùng cẳng chân." },
      { step: "Bước 5", title: "Massage cổ vai gáy kết thúc", desc: "Thư giãn đốt sống cổ ngồi dậy với năng lượng sảng khoái." }
    ]
  },
  {
    id: "cham-soc-da-toan-than",
    title: "Chăm Sóc Da Toàn Thân",
    subtitle: "Tẩy tế bào chết hữu cơ & ủ dưỡng thảo mộc sáng mịn nhung lụa",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    badge: "Mới",
    duration: "60 - 75 phút",
    priceFrom: "490.000 ₫",
    description: "Sử dụng các nguyên liệu thuần khiết thiên nhiên Việt Nam như Cà phê Robusta Đắk Lắk xay mịn, dừa Bến Tre, yến mạch organic và sữa non dưỡng ẩm. Đem lại làn da ẩm mượt, mịn màng và rạng rỡ sau liệu trình.",
    benefits: [
      "Loại bỏ triệt để lớp tế bào chết sần sùi, thông thoáng lỗ chân lông",
      "Nuôi dưỡng da sâu với vitamin E và chất chống oxy hóa tự nhiên",
      "Làm đều màu da, mờ thâm sạm vùng khuỷu tay và đầu gối",
      "Hương thơm ngọt ngào tự nhiên đọng lại trên cơ thể suốt ngày dài"
    ],
    pricing: [
      { duration: "60 phút (Tẩy tế bào chết khoáng/cà phê)", price: "490.000 ₫", original: "600.000 ₫" },
      { duration: "75 phút (Tẩy tế bào chết + Ủ dưỡng ngọc trai sữa non)", price: "690.000 ₫", original: "850.000 ₫", popular: true }
    ],
    procedure: [
      { step: "Bước 1", title: "Xông hơi ướt mở lỗ chân lông", desc: "Xông hơi tinh dầu sả chanh 10 phút để da hấp thụ dưỡng chất tối đa." },
      { step: "Bước 2", title: "Thoa hỗn hợp tẩy da chết cà phê Đắk Lắk", desc: "Massage chuyển động tròn nhẹ nhàng toàn bộ vùng lưng, tay, chân." },
      { step: "Bước 3", title: "Tắm tráng nước ấm tinh khiết", desc: "Rửa trôi tế bào chết, cảm nhận ngay độ mềm mịn rõ rệt của da." },
      { step: "Bước 4", title: "Ủ dưỡng bọc mặt nạ yến mạch & sữa non", desc: "Bọc màng ấm giữ nhiệt giúp dưỡng chất thẩm thấu sâu vào tầng biểu bì." },
      { step: "Bước 5", title: "Thoa lotion bảo vệ & Dưỡng ẩm khoáng chất", desc: "Khóa ẩm toàn thân với kem dưỡng thể organic không nhờn rít." }
    ]
  },
  {
    id: "duong-sinh-tri-lieu-chuyen-sau",
    title: "Dưỡng Sinh Trị Liệu Chuyên Sâu",
    subtitle: "Gói phục hồi năng lượng toàn diện: Thân - Tâm - Trí",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    badge: "Cao cấp",
    duration: "120 - 150 phút",
    priceFrom: "990.000 ₫",
    description: "Gói trị liệu kết hợp đỉnh cao giữa Massage toàn thân, Trị liệu ngải cứu ôn ấm vùng lưng, Gội đầu dưỡng sinh canh thuốc và Xông hơi đá muối Himalaya. Phù hợp cho những ai cần phục hồi thể trạng kiệt quệ sau chuỗi ngày làm việc căng thẳng.",
    benefits: [
      "Tái tạo sinh lực toàn thân từ gốc rễ theo lý thuyết kinh lạc Đông Y",
      "Thải độc kim loại nặng và độc tố qua tuyến mồ hôi xông đá muối",
      "Lưu thông khí huyết từ đỉnh đầu đến gót chân",
      "Tặng kèm trà dưỡng nhan long nhãn táo đỏ và bánh ngọt nhẹ"
    ],
    pricing: [
      { duration: "120 phút (Trị liệu Hồi Sinh)", price: "990.000 ₫", original: "1.250.000 ₫", popular: true },
      { duration: "150 phút (Hoàng Gia Toàn Diện Be Wellness)", price: "1.390.000 ₫", original: "1.750.000 ₫" }
    ],
    procedure: [
      { step: "Bước 1", title: "Thanh lọc cơ thể tại phòng xông đá muối", desc: "Xông hơi 15 phút với tinh dầu tràm gió giải cảm độc." },
      { step: "Bước 2", title: "Massage trị liệu chuyên sâu & Đá nóng", desc: "60 phút giải tỏa nút thắt cơ toàn thân và bả vai." },
      { step: "Bước 3", title: "Cứu ngải & Chườm muối thảo dược vùng bụng/lưng", desc: "Làm ấm mệnh môn hỏa và tạng phủ, trừ hàn thấp." },
      { step: "Bước 4", title: "Gội đầu dưỡng sinh phục hồi thần trí", desc: "45 phút xoa bóp đầu mặt và tưới canh thảo dược dưỡng tóc." },
      { step: "Bước 5", title: "Dưỡng chất trà dưỡng nhan & Trò chuyện", desc: "Nghỉ ngơi tại sảnh thưởng trà hoa cúc táo đỏ bổ khí huyết." }
    ]
  },
  {
    id: "dich-vu-khac",
    title: "Dịch Vụ Khác & Gói VIP Couple",
    subtitle: "Xông hơi đá muối Himalaya, Ngâm bồn gỗ Pơ-mu thảo dược Dao Đỏ, Gói Cặp Đôi",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80",
    badge: "Đặc quyền",
    duration: "30 - 120 phút",
    priceFrom: "250.000 ₫",
    description: "Các tiện ích bổ trợ đẳng cấp giúp buổi trị liệu thêm trọn vẹn: Phòng riêng VIP sang trọng cho cặp đôi, bồn ngâm gỗ Pơ-mu chứa lá thuốc cổ truyền của người Dao Đỏ Sapa, xông hơi ướt và khô thảo dược tự nhiên.",
    benefits: [
      "Không gian riêng tư tuyệt đối, nến thơm và âm nhạc thiền êm dịu",
      "Lá tắm người Dao Đỏ giúp giãn cơ, dễ ngủ và tiêu trừ mỏi mệt tức thì",
      "Lựa chọn tuyệt vời cho các cặp đôi du lịch, kỷ niệm ngày đặc biệt",
      "Miễn phí nâng cấp phòng VIP khi đặt trước"
    ],
    pricing: [
      { duration: "30 phút (Ngâm bồn lá thuốc Dao Đỏ)", price: "250.000 ₫", original: "320.000 ₫" },
      { duration: "45 phút (Combo Xông hơi khô + ướt thảo mộc)", price: "200.000 ₫", original: "260.000 ₫" },
      { duration: "120 phút (Gói VIP Couple Lãng Mạn cho 2 người)", price: "1.890.000 ₫", original: "2.400.000 ₫", popular: true }
    ],
    procedure: [
      { step: "Bước 1", title: "Chuẩn bị phòng VIP theo yêu cầu", desc: "Thắp nến thơm tinh dầu gỗ đàn hương và rải cánh hoa hồng tươi." },
      { step: "Bước 2", title: "Ngâm bồn thảo dược nước ấm", desc: "Thả mình vào làn nước thuốc đỏ sóng sánh ấm áp 20 phút." },
      { step: "Bước 3", title: "Liệu trình massage song hành cho 2 khách", desc: "Hai kỹ thuật viên phục vụ đồng thời trong không gian riêng biệt." },
      { step: "Bước 4", title: "Thưởng thức rượu vang nhẹ hoặc trà hoa cúc", desc: "Không gian nghỉ ngơi thư giãn lãng mạn trọn vẹn." }
    ]
  }
];

export const NEWS_POSTS = [
  {
    slug: "massage-toan-than-mang-lai-loi-ich-gi-nhung-luu-y-quan-trong-khi-thuc-hien",
    title: "Massage Toàn Thân Mang Lại Lợi Ích Gì? Những Lưu Ý Quan Trọng Khi Thực Hiện",
    date: "15/10/2026",
    author: "Bác Sĩ Trị Liệu Đông Y Be Wellness",
    readTime: "6 phút đọc",
    category: "Cẩm nang sức khỏe",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    excerpt: "Massage toàn thân không đơn thuần là phút giây thư giãn mà còn là phương pháp trị liệu phục hồi thể lực kỳ diệu. Tìm hiểu ngay 5 lợi ích vàng và lưu ý quan trọng để đạt hiệu quả cao nhất.",
    content: `
      <h3>1. Đánh thức hệ tuần hoàn và xua tan mệt mỏi tích tụ</h3>
      <p>Trong cuộc sống bận rộn hay những chuyến đi dài ngày khám phá phố phường Hà Nội, các khối cơ của chúng ta phải chịu áp lực liên tục. Các động tác miết, xoa bóp và nhào nặn trong massage toàn thân kích thích các mao mạch dưới da giãn nở, gia tăng lưu lượng oxy đến từng tế bào và thúc đẩy quá trình đào thải axit lactic – nguyên nhân chính gây đau nhức bắp thịt.</p>
      
      <h3>2. Cân bằng hệ thần kinh thực vật và điều hòa giấc ngủ</h3>
      <p>Nghiên cứu khoa học chỉ ra rằng một buổi massage 60-90 phút có khả năng làm giảm nồng độ hormone căng thẳng (Cortisol) lên đến 31%, đồng thời gia tăng đáng kể Serotonin và Dopamine – hai chất dẫn truyền thần kinh mang lại cảm giác hạnh phúc và an yên. Điều này giúp bạn dễ dàng đi vào giấc ngủ sâu và thức dậy với tinh thần tràn đầy năng lượng.</p>

      <h3>3. Những lưu ý quan trọng trước và sau khi massage</h3>
      <ul>
        <li><strong>Không ăn quá no:</strong> Nên massage sau bữa ăn chính ít nhất 1 giờ để tránh ảnh hưởng đến hệ tiêu hóa.</li>
        <li><strong>Uống đủ nước ấm:</strong> Sau liệu trình, việc uống một tách trà thảo mộc ấm hoặc nước lọc sẽ hỗ trợ thận lọc và đào thải độc tố nhanh hơn.</li>
        <li><strong>Thông báo thể trạng với kỹ thuật viên:</strong> Nếu bạn đang có thai, mới phẫu thuật hoặc có vùng chấn thương, hãy chia sẻ trước để kỹ thuật viên điều chỉnh lực bấm phù hợp.</li>
      </ul>
    `
  },
  {
    slug: "goi-dau-duong-sinh-thao-duoc-co-truyen-bi-quyet-cham-soc-toc-va-suc-khoe-toan-dien",
    title: "Gội Đầu Dưỡng Sinh Thảo Dược Cổ Truyền: Bí Quyết Chăm Sóc Tóc Và Sức Khỏe Toàn Diện",
    date: "08/10/2026",
    author: "Chuyên Viên Thảo Mộc Be Wellness",
    readTime: "5 phút đọc",
    category: "Bí quyết làm đẹp",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
    excerpt: "Khác biệt với việc gội đầu công nghiệp thông thường, gội đầu dưỡng sinh là sự kết tinh của tinh hoa thảo mộc cung đình và nghệ thuật bấm huyệt kinh lạc, mang lại sự nhẹ nhõm phi thường cho vùng đầu mặt.",
    content: `
      <h3>1. Nồi nước lá thơm thuần khiết của ký ức</h3>
      <p>Tại Be Wellness Spa số 10 Nguyễn Quang Bích, nồi nước gội đầu luôn được đun mới mỗi sáng từ bồ kết nướng thơm lừng, sả tươi đập dập, vỏ bưởi da xanh giàu tinh dầu, cỏ mần trầu, lá ổi và hương nhu. Tinh chất hoàn toàn tự nhiên không silicon hay hương liệu nhân tạo giúp chân tóc chắc khỏe, giảm gãy rụng và nuôi dưỡng da đầu thoáng sạch.</p>

      <h3>2. Tác dụng đả thông kinh lạc vùng đầu</h3>
      <p>Khu vực đầu chứa các đại huyệt quan trọng như Bách Hội, Thái Dương, Phong Trì, Thượng Tinh. Động tác bấm huyệt điêu luyện kết hợp dòng nước canh thảo dược ấm chảy tuần hoàn trên trán giúp giải phóng hoàn toàn tình trạng co thắt mạch máu não, tan biến áp lực công việc và chứng mất ngủ kinh niên.</p>
    `
  },
  {
    slug: "the-animated-heart-of-be-wellness-spa-what-clients-say-about-our-exceptional-team",
    title: "Trái Tim Của Be Wellness Spa: Trải Nghiệm Khó Quên Của Khách Du Lịch Quốc Tế Tại Phố Cổ Hà Nội",
    date: "01/10/2026",
    author: "Ban Quản Lý Khách Sạn Bespoke",
    readTime: "7 phút đọc",
    category: "Câu chuyện thương hiệu",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    excerpt: "Nằm kề bên Nhà thờ Lớn và phố cổ Hoàn Kiếm, Be Wellness Spa (tiền thân La Siesta nay là Bespoke Trendy) là điểm dừng chân bình yên được hàng nghìn du khách khắp năm châu trao trọn niềm tin.",
    content: `
      <h3>Điểm dừng chân ấm áp giữa phố thị cổ kính</h3>
      <p>Hà Nội có nét nhộn nhịp của 36 phố phường, và sau hàng giờ đi bộ qua những con ngõ nhỏ ngắm nhìn kiến trúc Pháp cổ hay thưởng thức cà phê trứng, việc thả mình vào không gian êm ả ngập tràn hương gỗ trầm và sả chanh tại Be Wellness Spa là món quà tuyệt vời nhất dành tặng bản thân.</p>
      
      <p>Với hơn 496 lượt đánh giá xuất sắc 4.8 sao trên Google Maps, chúng tôi tự hào đón tiếp các vị khách từ Hàn Quốc, Nhật Bản, châu Âu và khắp mọi miền đất nước. Đội ngũ nhân viên giao tiếp tiếng Anh lưu loát, ân cần từng chi tiết nhỏ: từ đôi dép vải ấm, chén trà gừng thơm lừng đón khách đến nụ cười chào tạm biệt chân thành.</p>
    `
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "이지은 (Lee Ji-eun)",
    country: "Hàn Quốc 🇰🇷",
    rating: 5,
    date: "2 ngày trước",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    text: "호텔이 라시에스타에서 비스포크(bespoke)로 변경되었음. 스파 시설이 너무 깔끔하고 마사지사분들의 압이 환상적이었습니다. 하노이 올드쿼터 여행 중 최고의 힐링 순간이었어요. 적극 추천합니다!",
    translation: "(Khách sạn đã đổi từ La Siesta sang Bespoke. Cơ sở spa vô cùng sạch sẽ, lực tay của kỹ thuật viên cực kỳ tuyệt vời. Đây là khoảnh khắc thư giãn tuyệt nhất trong chuyến du lịch phố cổ Hà Nội. Rất khuyên trải nghiệm!)"
  },
  {
    id: 2,
    name: "Kato Taro",
    country: "Nhật Bản 🇯🇵",
    rating: 5,
    date: "1 tuần trước",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    text: "スタッフの対応がとても丁寧で、ハノイ旧市街の喧騒を忘れさせてくれる静かな空間でした。ハーブの香りとホットストーンのマッサージで旅の疲れが一気に吹き飛びました。また来ます。",
    translation: "(Nhân viên phục vụ cực kỳ chu đáo và lễ phép. Không gian yên tĩnh khiến tôi quên đi sự ồn ào của phố cổ Hà Nội. Mùi hương thảo mộc và massage đá nóng đã làm tan biến hoàn toàn sự mệt mỏi. Tôi chắc chắn sẽ quay lại.)"
  },
  {
    id: 3,
    name: "Domenico Johnson",
    country: "Vương quốc Anh 🇬🇧",
    rating: 5,
    date: "2 tuần trước",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    text: "Exceptional experience! Located right at 10 Nguyen Quang Bich near the St. Joseph Cathedral. The herbal hair wash and 90-min deep tissue massage were divine. Professional, spotless, and great value. Best spa in Hanoi!",
    translation: "(Trải nghiệm xuất sắc! Nằm ngay số 10 Nguyễn Quang Bích gần Nhà thờ Lớn. Gội đầu dưỡng sinh và massage mô sâu 90 phút cực kỳ thư thái. Chuyên nghiệp, sạch bóng và giá rất tốt. Spa tốt nhất Hà Nội!)"
  },
  {
    id: 4,
    name: "Carlita Gomez",
    country: "Tây Ban Nha 🇪🇸",
    rating: 5,
    date: "3 tuần trước",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    text: "Un lugar mágico en el corazón del Old Quarter. El té de bienvenida delicioso y la masajista muy atenta a cada punto de dolor de mi espalda. 100% recomendado.",
    translation: "(Một nơi kỳ diệu giữa lòng Phố Cổ. Trà đón khách rất thơm ngon và kỹ thuật viên rất chú ý đến từng điểm đau trên lưng tôi. Rất đáng giới thiệu 100%.)"
  },
  {
    id: 5,
    name: "Nguyễn Thu Hương",
    country: "Hà Nội, Việt Nam 🇻🇳",
    rating: 5,
    date: "1 tháng trước",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    text: "Không gian tone màu xanh lá và nâu gỗ trầm ở đây quá đẹp và thư thái. Mình chọn gói dưỡng sinh trị liệu chuyên sâu 120 phút, kỹ thuật viên làm chuẩn từng huyệt, không hề bị đau gắt mà nhẹ bẫng cả người.",
    translation: ""
  },
  {
    id: 6,
    name: "吉田夏樹 (Natsuki Yoshida)",
    country: "Nhật Bản 🇯🇵",
    rating: 5,
    date: "1 tháng trước",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    text: "ホアンキエム湖の近くで最高のスパ。アロマオイルの種類が豊富で、自分好みの香りを選べました。お茶とお菓子も美味しかった。",
    translation: "(Spa tuyệt vời gần Hồ Hoàn Kiếm. Có nhiều loại tinh dầu thơm để chọn lựa. Trà và bánh cũng rất ngon.)"
  }
];

export const GALLERY_IMAGES = [
  {
    title: "Phòng Trị Liệu VIP Đôi",
    category: "Không gian",
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Khu Vực Ngâm Chân Thảo Mộc",
    category: "Trị liệu",
    url: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sảnh Đón Khách Trầm Ấm",
    category: "Không gian",
    url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Giường Gội Đầu Dưỡng Sinh Hoàng Cung",
    category: "Trị liệu",
    url: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Đá Nóng Himalaya & Thảo Mộc Tươi",
    category: "Nguyên liệu",
    url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bồn Ngâm Gỗ Pơ-mu Lá Thuốc",
    category: "Không gian",
    url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80"
  }
];

export const COMMITMENTS = [
  {
    icon: "Sparkles",
    title: "Liệu Trình Tinh Hoa Á Đông",
    desc: "Kế thừa nghệ thuật bấm huyệt Đông Y cổ truyền hòa quyện cùng phương pháp thư giãn hiện đại, mang lại sự chữa lành sâu sắc."
  },
  {
    icon: "ShieldCheck",
    title: "Không Gian Riêng Tư Tuyệt Đối",
    desc: "Hệ thống phòng ốc cách âm tĩnh lặng, rèm lụa và hương trầm thư thái, tách biệt hoàn toàn khỏi nhịp sống ồn ào bên ngoài."
  },
  {
    icon: "Users",
    title: "Kỹ Thuật Viên Tận Tâm",
    desc: "Đội ngũ chuyên viên được đào tạo bài bản với chứng chỉ trị liệu chuyên sâu, thấu hiểu tường tận từng điểm mỏi của cơ thể."
  },
  {
    icon: "Globe",
    title: "Lựa Chọn Tin Cậy Khách Quốc Tế",
    desc: "Điểm đến yêu thích của du khách từ khắp thế giới khi ghé thăm Hà Nội, đạt điểm hài lòng 4.8★ trên các nền tảng quốc tế."
  }
];
