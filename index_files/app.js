// Matcha Map - Application Logic

// ==========================================
// 1. DEFAULT DATA & INITIAL SEEDING
// ==========================================
const DEFAULT_SHOPS = [
  {
    id: "shop-1",
    name: "오설록 티하우스 북촌점",
    address: "서울특별시 종로구 북촌로 45",
    lat: 37.579620,
    lng: 126.982930,
    phone: "02-741-2151",
    menu: "녹차 오프레도, 클래식 녹차 티라미수",
    photo: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600",
    desc: "북촌 한옥마을 속에서 차분하게 프리미엄 티 브랜드 오설록의 깊은 말차 디저트와 전통 차를 맛볼 수 있는 힐링 공간입니다."
  },
  {
    id: "shop-2",
    name: "맛차차",
    address: "서울특별시 성동구 서울숲2길 18-11",
    lat: 37.544150,
    lng: 127.042780,
    phone: "02-1234-5678",
    menu: "말차 블렌드, 말차 다식",
    photo: "https://images.unsplash.com/photo-1563887556068-9d4b8e17a934?w=600",
    desc: "서울숲 옆에서 즐기는 고요하고 평온한 다도 코스 전문점. 자연 소리를 배경 삼아 고품격 말차 의식을 즐겨보세요 (예약제 운영)."
  },
  {
    id: "shop-3",
    name: "슈퍼말차 성수점",
    address: "서울특별시 성동구 서울숲6길 19",
    lat: 37.545800,
    lng: 127.044200,
    phone: "02-6953-2323",
    menu: "슈퍼말차 라떼, 더티 콘",
    photo: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600",
    desc: "유기농 보성 말차와 천연 감미료를 사용해 설탕 없이 달콤하고 트렌디하게 즐기는 말차 에스프레소 바 스타일 카페입니다."
  },
  {
    id: "shop-4",
    name: "오설록 티스톤 제주",
    address: "제주특별자치도 서귀포시 안덕면 신화역사로 15",
    lat: 33.306500,
    lng: 126.289500,
    phone: "064-794-5312",
    menu: "서광 차밭 녹차 아이스크림, 녹차 오프레도",
    photo: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600",
    desc: "푸르른 서광 차밭의 절경을 감상하며 전문 티 소믈리에의 차 지식과 고급 녹차 티클래스를 온전히 향유하는 명소입니다."
  },
  {
    id: "shop-5",
    name: "펠앤콜 (FELL+COLE)",
    address: "서울특별시 마포구 와우산로39길 5",
    lat: 37.549200,
    lng: 126.923400,
    phone: "070-4409-2101",
    menu: "유기농 말차 젤라또, 깻잎 젤라또",
    photo: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600",
    desc: "홍대 상수골목의 수제 천연 아티잔 젤라또 전문점. 유기농 말차로 빚어낸 쌉싸름하면서도 깔끔한 아이스크림을 만날 수 있습니다."
  },
  {
    id: "shop-6",
    name: "신이도가",
    address: "서울특별시 마포구 잔다리로2길 20-12",
    lat: 37.551600,
    lng: 126.920800,
    phone: "02-322-9700",
    menu: "말차 크림 라떼, 백자 말차 브레드",
    photo: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600",
    desc: "마포구 홍대 삼거리 인근에 숨겨진 고풍스러운 한옥 갤러리 카페. 정원의 모닥불을 바라보며 마시는 부드러운 말차 크림 라떼가 매혹적입니다."
  },
  {
    id: "shop-7",
    name: "하찌코파",
    address: "서울특별시 마포구 와우산로29길 48",
    lat: 37.557400,
    lng: 126.925100,
    phone: "070-8812-3456",
    menu: "수제 말차 커스터드 푸딩, 녹차 까눌레",
    photo: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
    desc: "홍대 경의선 숲길 근처의 아기자기한 디저트 샵. 푸딩 위에 진한 말차 에스프레소 시럽을 끼얹어 먹는 말차 커스타드 푸딩이 대단히 인기가 많습니다."
  },
  {
    id: "shop-8",
    name: "차차티클럽 창신점",
    address: "서울특별시 종로구 창신길 28-11",
    lat: 37.572100,
    lng: 127.013500,
    phone: "02-742-0701",
    menu: "유기농 보성 녹차, 말차 테린느",
    photo: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=600",
    desc: "동대문 근처 좁은 골목 깊이 숨겨진 한옥 찻집. 차분한 한옥 중정 아래에서 다도를 즐길 수 있으며, 꾸덕꾸덕한 말차 테린느가 녹차와 훌륭한 조화를 이룹니다."
  },
  {
    id: "shop-9",
    name: "딩가케이크 연남점",
    address: "서울특별시 마포구 동교로29길 68",
    lat: 37.561900,
    lng: 126.924800,
    phone: "02-1234-5679",
    menu: "말차 벨벳 케이크, 그린티 스콘",
    photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    desc: "연남동의 동화 속에 나올 법한 파스텔톤 케이크 전문점. 장난감 같은 디자인의 외관과 달리 시트는 진하고 묵직한 말차 크림치즈로 가득 채워져 있습니다."
  },
  {
    id: "shop-10",
    name: "이이알티 성수 (eert)",
    address: "서울특별시 성동구 서울숲2길 19-17",
    lat: 37.542800,
    lng: 127.045600,
    phone: "02-1234-5680",
    menu: "eert 3단 트레이 디저트, 말차 호지 드립차",
    photo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    desc: "서울숲 인근의 정갈한 젠 스타일 목조 카페. 시그니처 3단 나무 박스 디저트에 포함된 계절 말차 샌드와 말차 쿠키슈가 깔끔한 녹차와 환상적인 조화를 이룹니다."
  },
  {
    id: "shop-11",
    name: "도화서길 카페",
    address: "서울특별시 종로구 율곡로 17",
    lat: 37.575200,
    lng: 126.981100,
    phone: "02-730-1050",
    menu: "삼청동 말차 슈페너, 찐녹차 타르트",
    photo: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600",
    desc: "안국역 앞 복합문화공간 5층에 위치하여 경복궁과 삼청동 기와지붕 뷰를 한눈에 즐길 수 있는 카페. 부드러운 아인슈페너 크림과 쌉싸름한 제주 말차가 어우러진 말차 슈페너가 대표적입니다."
  },
  {
    id: "shop-12",
    name: "성읍녹차마을",
    address: "제주특별자치도 서귀포시 표선면 서성일로 180",
    lat: 33.388200,
    lng: 126.797200,
    phone: "064-787-6888",
    menu: "녹차 아이스크림 팥빙수, 말차 가득 단팥빵",
    photo: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
    desc: "서귀포 성읍리에 위치한 자연주의 차밭 카페. 신비로운 녹차 동굴 포토존으로 유명하며, 직접 재배한 100% 서귀포 유기농 말차 파우더를 사용해 건강하고 가성비 좋은 음료를 제공합니다."
  },
  {
    id: "shop-13",
    name: "올티스 (Ortas)",
    address: "제주특별자치도 제주시 조천읍 거문오름길 23-5",
    lat: 33.454200,
    lng: 126.711800,
    phone: "064-780-0000",
    menu: "말차 테이스팅 코스, 유기농 호지차",
    photo: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
    desc: "제주시 조천읍 거문오름 인근에 위치한 고요하고 드넓은 다원. 곶자왈 숲길을 따라 산책하고 시크릿한 다실에서 신선하게 격불한 진한 말차 코스를 조용히 감상할 수 있습니다."
  },
  {
    id: "shop-14",
    name: "당도 망원점",
    address: "서울특별시 마포구 포은로 106",
    lat: 37.556200,
    lng: 126.902200,
    phone: "070-8812-7890",
    menu: "말차 솔트 젤라또, 바질 토마토",
    photo: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600",
    desc: "망원동의 수제 젤라또 핫플레이스. 짭짤한 소금과 씁쓸한 말차가 결합된 독보적인 단짠 씁쓸 조화의 '말차 솔트' 맛이 말차 덕후들의 폭발적인 인기를 끌고 있습니다."
  },
    {
    id: "shop-15",
    name: "성수 티룸",
    address: "서울특별시 성동구 연무장길 33",
    lat: 37.541100,
    lng: 127.058900,
    phone: "02-499-1234",
    menu: "호지말차 밀크티, 수제 말차 파운드",
    photo: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600",
    desc: "성수동 조용한 주택가 골목에 위치한 아늑한 티룸. 아날로그 서재 분위기 속에서 고소하고 진한 호지말차 밀크티와 따끈한 말차 파운드 케이크를 곁들일 수 있습니다."
  },
  {
    id: "shop-16",
    name: "덴스튜디오 파주점",
    address: "경기도 파주시 탄현면 헤이리마을길 59",
    lat: 37.788500,
    lng: 126.699100,
    phone: "031-949-0016",
    menu: "말차 슈페너, 말차 까눌레",
    photo: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600",
    desc: "헤이리 예술마을 속 조용하고 모던한 노출 콘크리트 인테리어의 말차 바. 진한 유기농 제주 말차 크림을 얹은 말차 슈페너와 겉바속촉 까눌레가 대표적입니다."
  },
  {
    id: "shop-17",
    name: "카페 록원 남양주",
    address: "경기도 남양주시 와부읍 다산로 261",
    lat: 37.568200,
    lng: 127.241500,
    phone: "031-576-2017",
    menu: "말차 롤케이크, 숲속 녹차 라떼",
    photo: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600",
    desc: "남양주 한강이 보이는 탁 트인 뷰와 온실 정원 테마의 대형 식물원 카페. 보성 녹차 가루를 아낌없이 사용한 쌉싸름한 녹차 라떼와 직접 구운 말차 롤케이크가 유명합니다."
  },
  {
    id: "shop-18",
    name: "차밭목 해운대",
    address: "부산광역시 해운대구 우동1로 38",
    lat: 35.163100,
    lng: 129.161200,
    phone: "051-744-0018",
    menu: "말차 타르트, 호지 말차 빙수",
    photo: "https://images.unsplash.com/photo-1563887556068-9d4b8e17a934?w=600",
    desc: "해리단길의 아기자기하고 따뜻한 원목 감성 찻집. 전통 다도 방식으로 격불한 말차와 달콤한 단팥을 가득 얹은 호지 말차 빙수가 여행자들의 입맛을 사로잡습니다."
  },
  {
    id: "shop-19",
    name: "영도 말차 아카이브",
    address: "부산광역시 영도구 청학동 123",
    lat: 35.093500,
    lng: 129.062100,
    phone: "051-412-0019",
    menu: "바다 말차 라떼, 말차 테린느",
    photo: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600",
    desc: "영도의 푸른 바다가 한눈에 들어오는 루프탑 카페. 파란 시럽과 초록색 말차가 그라데이션을 이루는 '바다 말차 라떼'와 꾸덕한 식감의 '말차 테린느'가 인기 메뉴입니다."
  },
  {
    id: "shop-20",
    name: "강릉 초당녹차 젤라또",
    address: "강원특별자치도 강릉시 초당순두부길 77",
    lat: 37.791500,
    lng: 128.914500,
    phone: "033-652-0020",
    menu: "초당 녹차 젤라또, 말차 스프레드 스콘",
    photo: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600",
    desc: "강릉 초당마을에 위치한 젤라또 전문점. 고소한 초당 순두부 젤라또와 쌉싸름한 녹차 젤라또를 반반 섞은 메뉴가 대표적이며, 직접 만든 수제 말차 잼 스콘도 곁들일 수 있습니다."
  }
];

const DEFAULT_REVIEWS = [
  // Shop 1 Reviews
  { id: "rev-1", shopId: "shop-1", userName: "말차덕후공룡", userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", rating: 5.0, keywords: ["진해요", "달아요", "친절해요"], text: "북촌 한옥 분위기가 너무 고급스럽고 맽차 라떼 정말 찐하고 부드러워요! 직원분들도 엄청 상냥하셔서 대만족입니다.", date: "2026-05-10", likes: 12 },
  { id: "rev-2", shopId: "shop-1", userName: "그린티홀릭", userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", rating: 4.0, keywords: ["진해요", "친절해요"], text: "외국인 친구 데리고 갔는데 한옥 인테리어 보고 정말 좋아하네요. 시그니처 오프레도 소프트 아이스크림이 꿀맛입니다.", date: "2026-05-15", likes: 5 },
  { id: "rev-3", shopId: "shop-1", userName: "디저트요정", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 4.5, keywords: ["달아요", "친절해요"], text: "주말에는 대기가 조금 길지만, 티라미수 케이크의 달콤쌉쌀한 맛이 일품이라 대기한 보람이 느껴집니다.", date: "2026-05-28", likes: 8 },

  // Shop 2 Reviews
  { id: "rev-4", shopId: "shop-2", userName: "요가다도매니아", userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", rating: 5.0, keywords: ["진해요", "쌉싸름해요", "친절해요", "노키즈존"], text: "100% 예약제 티 코스로 다녀왔는데 정말 황홀한 경험이었습니다. 바로 앞에서 정성껏 격불해주시는 말차가 아주 깊고 쌉쌀하니 최고였어요.", date: "2026-05-02", likes: 24 },
  { id: "rev-5", shopId: "shop-2", userName: "고요한마음", userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", rating: 4.5, keywords: ["쌉싸름해요", "진해요", "노키즈존"], text: "조용한 분위기 유지를 위해 노키즈존으로 운영돼요. 혼자 찾아와서 차분하게 초록 정원 보며 다도하기 딱 좋은 힐링플레이스입니다.", date: "2026-05-18", likes: 15 },
  { id: "rev-6", shopId: "shop-2", userName: "차문화연구원", userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", rating: 5.0, keywords: ["친절해요", "쌉싸름해요", "노키즈존"], text: "예약하기는 꽤 까다롭지만 팽주님의 섬세한 티 설명과 곁들여 먹는 정갈한 말차 다식이 예술입니다. 돈이 전혀 아깝지 않네요.", date: "2026-06-01", likes: 19 },

  // Shop 3 Reviews
  { id: "rev-7", shopId: "shop-3", userName: "성수동힙스터", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.0, keywords: ["진해요", "달아요", "양이 많아요"], text: "인공 설탕 없이 대체당을 써서 칼로리 걱정 없는데도 적당히 달달해서 맛있어요! 양도 가득 채워주고 패키징도 힙해요.", date: "2026-05-05", likes: 7 },
  { id: "rev-8", shopId: "shop-3", userName: "말차라떼귀신", userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", rating: 4.5, keywords: ["달아요", "양이 많아요"], text: "성수동 특유의 미니멀하고 힙한 분위기 매장. 슈퍼말차 코코넛 라떼를 마셨는데 코코넛의 고소함과 말차가 조화롭네요.", date: "2026-05-22", likes: 9 },
  { id: "rev-9", shopId: "shop-3", userName: "카페도장깨기", userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100", rating: 4.0, keywords: ["진해요", "양이 많아요"], text: "매장에 앉을 자리가 좁다는 게 아쉽지만 말차 에스프레소처럼 진하게 우려줘서 테이크아웃해 서울숲 걸으며 마시기 좋습니다.", date: "2026-06-03", likes: 4 },

  // Shop 4 Reviews
  { id: "rev-10", shopId: "shop-4", userName: "제주여행러", userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", rating: 5.0, keywords: ["진해요", "친절해요", "양이 많아요"], text: "제주 방문하면 꼭 들르는 곳. 눈앞에 펼쳐지는 드넓은 유기농 차밭 뷰가 엄청납니다. 녹차 소프트아이스크림 퀄리티도 기성품과 급이 달라요.", date: "2026-04-12", likes: 31 },
  { id: "rev-11", shopId: "shop-4", userName: "다원사랑", userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", rating: 4.5, keywords: ["친절해요", "양이 많아요"], text: "티스톤 다도 클래스 체험하고 왔어요. 전통 다기로 제주 녹차 우리는 법을 직접 배우니 향도 깊고 친절한 티 소믈리에 덕에 의미가 깊었습니다.", date: "2026-05-01", likes: 22 },
  { id: "rev-12", shopId: "shop-4", userName: "말차빌런", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 4.5, keywords: ["진해요", "친절해요"], text: "기념품샵도 크고 녹차를 활용한 롤케익, 브라우니가 가득해요! 음료도 상당히 묵직하고 녹색의 에너지가 넘쳐납니다.", date: "2026-05-19", likes: 11 },

  // Shop 5 Reviews
  { id: "rev-13", shopId: "shop-5", userName: "젤라또덕후", userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", rating: 4.0, keywords: ["쌉싸름해요", "달아요", "노펫존"], text: "홍대 서교동 젤라또 최강자 중 하나. 녹차 아이스크림을 정말 수제로 묵직하게 만들어서 입에 넣는 순간 깊은 풍미가 뿜어져 나옵니다.", date: "2026-04-30", likes: 6 },
  { id: "rev-14", shopId: "shop-5", userName: "비건푸디", userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", rating: 4.0, keywords: ["달아요", "쌉싸름해요", "노펫존"], text: "반려동물 입장이 안되는 건 아쉽지만, 비건을 위한 대안적인 맛도 있고 유기농 맛차 젤라또의 오묘한 씁쓸달콤함이 훌륭한 수준입니다.", date: "2026-05-14", likes: 10 },
  { id: "rev-15", shopId: "shop-5", userName: "녹차맛참새", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.0, keywords: ["쌉싸름해요", "노펫존"], text: "엄청 진하고 단맛보다는 씁쓸한 말차 특유의 성질을 아주 정직하게 구현한 젤라또입니다. 단 거 싫어하는 말차 매니아에게 적극 권장합니다.", date: "2026-05-29", likes: 14 },

  // Shop 6 Reviews
  { id: "rev-16", shopId: "shop-6", userName: "한옥매니아", userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100", rating: 4.5, keywords: ["달아요", "친절해요"], text: "홍대에 이렇게 조용한 한옥 카페가 있는 줄 몰랐어요. 말차 라떼 크림이 부드럽고 아주 맛있습니다.", date: "2026-05-02", likes: 3 },
  { id: "rev-17", shopId: "shop-6", userName: "차돌이", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.0, keywords: ["친절해요"], text: "마당에 피어있는 장작 모닥불 냄새와 쌉싸름한 말차 향이 묘하게 어울리는 공간.", date: "2026-05-20", likes: 8 },

  // Shop 7 Reviews
  { id: "rev-18", shopId: "shop-7", userName: "디저트살인마", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 5.0, keywords: ["달아요", "진해요"], text: "여기 말차 푸딩은 진짜 미쳤어요. 엄청 탱글하고 시럽이 진짜 찐~한 말차 원액이라 감동 그 자체입니다.", date: "2026-05-11", likes: 14 },
  { id: "rev-19", shopId: "shop-7", userName: "푸딩홀릭", userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", rating: 4.5, keywords: ["진해요"], text: "조금 달지만 말차 까눌레 겉바속촉 제대로고 푸딩이 정말 농도가 진해서 말차러버들이라면 환장할 곳.", date: "2026-05-25", likes: 5 },

  // Shop 8 Reviews
  { id: "rev-20", shopId: "shop-8", userName: "한옥차여행", userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", rating: 5.0, keywords: ["쌉싸름해요", "친절해요", "노키즈존"], text: "조용하고 아늑한 분위기에 힐링됩니다. 말차 테린느가 무척 꾸덕하고 쌉싸름한 게 보성 녹차 우려낸 맛이랑 기가 막히게 맞네요.", date: "2026-04-18", likes: 17 },
  { id: "rev-21", shopId: "shop-8", userName: "다원나들이", userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", rating: 4.5, keywords: ["쌉싸름해요", "노키즈존"], text: "직접 우려 마시는 다도 체험이 참 좋네요. 조용한 한옥에서 쌉쌀하게 내린 잎차와 말차 디저트의 밸런스가 최고.", date: "2026-05-15", likes: 9 },

  // Shop 9 Reviews
  { id: "rev-22", shopId: "shop-9", userName: "케익귀신", userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", rating: 4.0, keywords: ["달아요", "양이 많아요"], text: "연남동 케이크 핫플! 케이크 비주얼이 너무 동화 같고 귀여워요. 안의 말차 크림치즈 시트도 엄청 두툼하고 달달합니다.", date: "2026-05-09", likes: 6 },
  { id: "rev-23", shopId: "shop-9", userName: "달콤이", userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", rating: 4.0, keywords: ["달아요", "양이 많아요"], text: "양이 진짜 많아서 한 조각 시키면 둘이 먹기 벅차네요. 말차가 약간 달달하게 가공되어 당 충전용으로 딱입니다.", date: "2026-05-30", likes: 4 },

  // Shop 10 Reviews
  { id: "rev-24", shopId: "shop-10", userName: "서울숲투어", userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100", rating: 4.5, keywords: ["쌉싸름해요", "진해요", "친절해요"], text: "3단 트레이에 말차 샌드와 과일 타르트 등이 정갈하게 서빙됩니다. 말차 가루를 드립으로 추출한 드립차 맛이 대단히 깔끔해요.", date: "2026-05-12", likes: 11 },
  { id: "rev-25", shopId: "shop-10", userName: "조용한카페러", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.0, keywords: ["진해요", "쌉싸름해요"], text: "목조 일본식 주택 느낌의 젠한 스타일이 독특해요. 시그니처 말차 슈 디저트는 크림 안에 진짜 진한 말차가 들어가서 씁쓸해요.", date: "2026-05-24", likes: 7 },

  // Shop 11 Reviews
  { id: "rev-26", shopId: "shop-11", userName: "경복궁바라기", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 4.5, keywords: ["달아요", "양이 많아요"], text: "통유리창 너머 경복궁과 궁궐 기와지붕 뷰가 아주 끝내줘요! 삼청동 말차 슈페너 크림이 부드럽고 아주 넉넉합니다.", date: "2026-05-01", likes: 13 },
  { id: "rev-27", shopId: "shop-11", userName: "뷰좋아", userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", rating: 4.0, keywords: ["달아요"], text: "주차는 불편하지만 타르트가 말차 커스터드라 단맛이 강해서 당 떨어질 때 먹으면 눈이 번쩍 뜨입니다.", date: "2026-05-28", likes: 8 },

  // Shop 12 Reviews
  { id: "rev-28", shopId: "shop-12", userName: "제주도동굴이", userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", rating: 4.5, keywords: ["진해요", "양이 많아요"], text: "녹차밭 옆에 녹차 동굴 포토존 정말 인생샷 나오네요! 빙수 양도 산더미만큼 쌓아주시고 아이스크림이 엄청 진합니다.", date: "2026-04-20", likes: 19 },
  { id: "rev-29", shopId: "shop-12", userName: "가성비최고", userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", rating: 4.0, keywords: ["진해요", "양이 많아요"], text: "말차 단팥빵 빵 피가 완전 녹색이고 팥소에 말차 크림이 가득해요. 가격도 엄청 저렴해서 제주 여행 선물용으로 추천합니다.", date: "2026-05-18", likes: 10 },

  // Shop 13 Reviews
  { id: "rev-30", shopId: "shop-13", userName: "다도클래스러버", userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", rating: 5.0, keywords: ["쌉싸름해요", "진해요", "친절해요", "노키즈존"], text: "제주도에서 가봤던 차실 중 단연 으뜸입니다. 유기농 말차를 바로 앞에서 거품을 곱게 내어주시는데 씁쓸한 깊은 맛이 마음을 차분하게 하네요.", date: "2026-05-03", likes: 25 },
  { id: "rev-31", shopId: "shop-13", userName: "숲속다실", userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", rating: 4.5, keywords: ["진해요", "쌉싸름해요", "노키즈존"], text: "곶자왈 숲속 프라이빗 티하우스라 예약이 어렵지만 조용하게 쌉싸름한 차와 호지차를 테이스팅할 수 있어 강추합니다.", date: "2026-05-22", likes: 16 },

  // Shop 14 Reviews
  { id: "rev-32", shopId: "shop-14", userName: "망원동주민", userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100", rating: 4.5, keywords: ["달아요", "쌉싸름해요"], text: "망원동 최고 젤라또 맛집! 소금의 짭조름함과 말차의 강한 씁쓸함이 오묘하게 단맛을 끌어올려 줘서 신세계를 경험했습니다.", date: "2026-05-04", likes: 9 },
  { id: "rev-33", shopId: "shop-14", userName: "단짠씁씁", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.0, keywords: ["쌉싸름해요", "달아요"], text: "매번 줄이 서있지만 젤라또 회전율이 빨라요. 말차 솔트가 쌉싸름하고 중독적인 단짠이라 망원시장 오면 필수입니다.", date: "2026-05-27", likes: 7 },

  // Shop 15 Reviews
  { id: "rev-34", shopId: "shop-15", userName: "서재감성", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 4.5, keywords: ["진해요", "친절해요", "노펫존"], text: "조용한 분위기 유지를 위해 노펫존으로 운영돼요. 티 소믈리에 사장님이 정말 친절하십니다. 구워진 호지차와 진한 말차가 섞인 호지말차 밀크티가 감동적이에요.", date: "2026-05-08", likes: 12 },
    { id: "rev-35", shopId: "shop-15", userName: "성수동단골", userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", rating: 4.0, keywords: ["진해요", "노펫존"], text: "따끈따끈한 말차 파운드가 아주 무겁고 밀도가 있어서 우유 거품 듬뿍 올린 밀크티와 찰떡궁합입니다. 단, 반려동물 동반은 불가능합니다.", date: "2026-06-02", likes: 6 },

  // Shop 16 Reviews
  { id: "rev-36", shopId: "shop-16", userName: "예술마을나들이", userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", rating: 5.0, keywords: ["진해요", "친절해요"], text: "헤이리마을 오면 꼭 들릅니다. 매장 음악도 차분하고 말차 슈페너 크림이 쌉싸름하면서 부드러워 피로가 다 풀리네요.", date: "2026-05-12", likes: 5 },

  // Shop 17 Reviews
  { id: "rev-37", shopId: "shop-17", userName: "한강드라이버", userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", rating: 4.5, keywords: ["양이 많아요", "친절해요"], text: "한강 조망하며 마시는 녹차 라떼는 분위기가 다했습니다. 말차 롤케이크도 많이 달지 않고 녹차 향이 진해서 아주 맛있어요.", date: "2026-05-20", likes: 7 },

  // Shop 18 Reviews
  { id: "rev-38", shopId: "shop-18", userName: "부산말차러버", userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", rating: 5.0, keywords: ["쌉싸름해요", "진해요"], text: "해리단길 최고 찻집! 빙수에 얹어주는 호지차 가루가 정말 향기롭고 단팥과의 조화가 최고네요. 매장 분위기도 편안합니다.", date: "2026-05-24", likes: 11 },

  // Shop 19 Reviews
  { id: "rev-39", shopId: "shop-19", userName: "바다바라기", userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100", rating: 4.0, keywords: ["달아요", "진해요"], text: "바다 말차 라떼 비주얼이 너무 예뻐서 사진 찍기 바빴어요. 쌉싸름한 말차 아래에 달달하고 파란 우유 베이스가 인상적이에요.", date: "2026-05-26", likes: 3 },

  // Shop 20 Reviews
  { id: "rev-40", shopId: "shop-20", userName: "젤라또귀신", userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100", rating: 4.5, keywords: ["달아요", "양이 많아요"], text: "순두부 젤라또의 고소함과 녹차 젤라또의 쌉싸름한 맛이 섞여서 단맛과 씁쓸함의 밸런스가 기가 막힙니다! 스콘도 추천해요.", date: "2026-05-30", likes: 8 }
];

// ==========================================
// 2. STATE MANAGER (LOCALSTORAGE WRAPPER)
// ==========================================
class Database {
  constructor() {
    this.init();
  }

  init() {
    // Database Migration: If the shops are missing or outdated (less than 20 shops), update them
    const existingShops = localStorage.getItem("matcha_shops");
    if (!existingShops || JSON.parse(existingShops).length < 20) {
      localStorage.setItem("matcha_shops", JSON.stringify(DEFAULT_SHOPS));
      localStorage.setItem("matcha_reviews", JSON.stringify(DEFAULT_REVIEWS));
    } else {
      if (!localStorage.getItem("matcha_reviews")) {
        localStorage.setItem("matcha_reviews", JSON.stringify(DEFAULT_REVIEWS));
      }
    }
    if (!localStorage.getItem("matcha_favorites")) {
      localStorage.setItem("matcha_favorites", JSON.stringify([]));
    }
    if (!localStorage.getItem("matcha_plans")) {
      localStorage.setItem("matcha_plans", JSON.stringify([]));
    }
    if (!localStorage.getItem("matcha_history")) {
      localStorage.setItem("matcha_history", JSON.stringify([]));
    }
    if (!localStorage.getItem("matcha_user")) {
      localStorage.setItem("matcha_user", JSON.stringify(null));
    }
  }

  getShops() {
    return JSON.parse(localStorage.getItem("matcha_shops"));
  }

  saveShop(shop) {
    const shops = this.getShops();
    shops.push(shop);
    localStorage.setItem("matcha_shops", JSON.stringify(shops));
  }

  getReviews() {
    return JSON.parse(localStorage.getItem("matcha_reviews"));
  }

  saveReview(review) {
    const reviews = this.getReviews();
    reviews.unshift(review); // New reviews first
    localStorage.setItem("matcha_reviews", JSON.stringify(reviews));
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem("matcha_favorites"));
  }

  toggleFavorite(shopId) {
    let favs = this.getFavorites();
    const index = favs.indexOf(shopId);
    let added = false;
    if (index === -1) {
      favs.push(shopId);
      added = true;
    } else {
      favs.splice(index, 1);
    }
    localStorage.setItem("matcha_favorites", JSON.stringify(favs));
    return added;
  }

  removeFavorite(shopId) {
    let favs = this.getFavorites();
    favs = favs.filter(id => id !== shopId);
    localStorage.setItem("matcha_favorites", JSON.stringify(favs));
  }

  getPlans() {
    return JSON.parse(localStorage.getItem("matcha_plans"));
  }

  togglePlan(shopId) {
    let plans = this.getPlans();
    const index = plans.indexOf(shopId);
    let added = false;
    if (index === -1) {
      plans.push(shopId);
      added = true;
    } else {
      plans.splice(index, 1);
    }
    localStorage.setItem("matcha_plans", JSON.stringify(plans));
    return added;
  }

  removePlan(shopId) {
    let plans = this.getPlans();
    plans = plans.filter(id => id !== shopId);
    localStorage.setItem("matcha_plans", JSON.stringify(plans));
  }

  getHistory() {
    return JSON.parse(localStorage.getItem("matcha_history"));
  }

  addVisitHistory(visit) {
    const history = this.getHistory();
    // Check if duplicate shopId and merge or append
    history.unshift(visit);
    localStorage.setItem("matcha_history", JSON.stringify(history));
  }

  removeHistory(shopId) {
    let history = this.getHistory();
    history = history.filter(item => item.shopId !== shopId);
    localStorage.setItem("matcha_history", JSON.stringify(history));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("matcha_user"));
  }

  login(type) {
    const mockUser = {
      name: type === "kakao" ? "말차러버공룡" : "초록빛잎새",
      email: type === "kakao" ? "matcha_dino@kakao.com" : "green_leaf@naver.com",
      avatar: type === "kakao" ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      type: type
    };
    localStorage.setItem("matcha_user", JSON.stringify(mockUser));
    return mockUser;
  }

  logout() {
    localStorage.setItem("matcha_user", JSON.stringify(null));
  }
}

const db = new Database();

// ==========================================
// 3. MAP CONTROLLER (LEAFLET INTEGRATION)
// ==========================================
let map;
let markerInstances = [];
let userLocation = null;

function initMap() {
  // Center map on Seoul by default
  map = L.map("map", {
    zoomControl: false // Add Custom Zoom Control in header or map later
  }).setView([37.5665, 126.9780], 12);
  
  // Custom Zoom buttons at bottom-right
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  // Load OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Redraw all shop markers
  plotMarkers();

  // Watch Zoom level changes to toggle detailed labels (PRD zoomed view)
  map.on("zoomend", () => {
    updateMarkerStylesForZoom();
  });

  // Click on Map coordinates for Registration
  map.on("click", (e) => {
    // If the register tab is active, populate latitude and longitude
    const registerTabBtn = document.getElementById("tab-register-btn");
    if (registerTabBtn.classList.contains("active")) {
      document.getElementById("reg-lat").value = e.latlng.lat.toFixed(6);
      document.getElementById("reg-lng").value = e.latlng.lng.toFixed(6);
      showToast("📍 클릭한 위치의 위경도가 자동 입력되었습니다!");
      
      // Temporary registration pin
      if (window.tempRegMarker) {
        map.removeLayer(window.tempRegMarker);
      }
      window.tempRegMarker = L.marker(e.latlng, {
        icon: L.divIcon({
          className: "temp-reg-marker",
          html: `<div class="matcha-pin" style="background:#dcae1d"></div>`,
          iconSize: [32, 32],
          iconAnchor: [0, 0]
        })
      }).addTo(map);
    }
  });
}

// Function to generate DivIcon content based on zoom
function createCustomIcon(shop, isDetailed) {
  if (isDetailed) {
    // Zoomed in detailed view (Name & Photo)
    return L.divIcon({
      className: "matcha-div-marker-detailed",
      html: `
        <div class="detailed-marker-wrapper" onclick="event.stopPropagation(); handleMarkerClick('${shop.id}')">
          <div class="detailed-marker-bubble">
            <img class="detailed-marker-img" src="${shop.photo || 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=100'}" alt="${shop.name}">
            <span class="detailed-marker-title">${shop.name}</span>
          </div>
          <div class="matcha-pin" style="margin-top: 10px;"></div>
        </div>
      `,
      iconSize: [140, 100],
      iconAnchor: [70, 48]
    });
  } else {
    // Standard marker pin
    return L.divIcon({
      className: "matcha-div-marker",
      html: `<div class="matcha-pin" onclick="event.stopPropagation(); handleMarkerClick('${shop.id}')"></div>`,
      iconSize: [32, 32],
      iconAnchor: [0, 0]
    });
  }
}

function handleMarkerClick(shopId) {
  showShopDetail(shopId);
}

function plotMarkers() {
  // Clear existing markers
  markerInstances.forEach(m => map.removeLayer(m.leafletMarker));
  markerInstances = [];
  
  if (window.tempRegMarker) {
    map.removeLayer(window.tempRegMarker);
    window.tempRegMarker = null;
  }

  const shops = db.getShops();
  const currentZoom = map.getZoom();
  const isDetailed = currentZoom >= 16;

  shops.forEach(shop => {
    const markerIcon = createCustomIcon(shop, isDetailed);
    const leafletMarker = L.marker([shop.lat, shop.lng], { icon: markerIcon }).addTo(map);
    
    // Bind simple popup fallback in case click is wonky
    const ratingInfo = calculateRatingMetrics(shop.id);
    leafletMarker.bindPopup(`
      <div class="map-popup-card" onclick="handleMarkerClick('${shop.id}')" style="cursor:pointer">
        <img src="${shop.photo || 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=300'}" alt="${shop.name}">
        <div class="map-popup-title">${shop.name}</div>
        <div class="map-popup-row">
          <span class="map-popup-rating">⭐ ${ratingInfo.average.toFixed(1)} (${ratingInfo.total}개)</span>
          <span class="badge">정보 보기</span>
        </div>
      </div>
    `);

    markerInstances.push({
      shopId: shop.id,
      leafletMarker: leafletMarker,
      shopData: shop
    });
  });
}

function updateMarkerStylesForZoom() {
  const currentZoom = map.getZoom();
  const isDetailed = currentZoom >= 16;
  
  markerInstances.forEach(instance => {
    const icon = createCustomIcon(instance.shopData, isDetailed);
    instance.leafletMarker.setIcon(icon);
  });
}

function focusMapOnShop(lat, lng, zoomLevel = 16) {
  if (map) {
    map.setView([lat, lng], zoomLevel);
  }
}

// Geolocation Handling
function initGPS() {
  const gpsBtn = document.getElementById("gps-btn");
  gpsBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      showToast("❌ GPS 위치 정보를 지원하지 않는 브라우저입니다.");
      return;
    }
    
    showToast("📍 내 위치를 탐색하는 중...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        showToast("📍 내 위치 탐색 성공!");
        focusMapOnShop(userLocation.lat, userLocation.lng, 15);
        
        // Add User Circle
        if (window.userCircle) {
          map.removeLayer(window.userCircle);
        }
        window.userCircle = L.circle([userLocation.lat, userLocation.lng], {
          color: '#446d4f',
          fillColor: '#446d4f',
          fillOpacity: 0.15,
          radius: 300
        }).addTo(map);

        // Re-render shop listing to update distances and allow distance sort
        const sortDistanceBtn = document.getElementById("sort-distance-btn");
        sortDistanceBtn.classList.remove("hidden");
        // Trigger sorting update
        renderShopList();
      },
      (error) => {
        showToast("❌ GPS 위치 정보를 가져오지 못했습니다.");
        console.error(error);
        // Default mock location for test: Seongsu
        userLocation = { lat: 37.545, lng: 127.043 };
        focusMapOnShop(userLocation.lat, userLocation.lng, 15);
        
        if (window.userCircle) map.removeLayer(window.userCircle);
        window.userCircle = L.circle([userLocation.lat, userLocation.lng], {
          color: '#446d4f',
          fillColor: '#446d4f',
          fillOpacity: 0.15,
          radius: 300
        }).addTo(map);
        
        const sortDistanceBtn = document.getElementById("sort-distance-btn");
        sortDistanceBtn.classList.remove("hidden");
        renderShopList();
      }
    );
  });
}

// ==========================================
// 4. COMPUTATIONS & STATS HELPERS
// ==========================================
function calculateRatingMetrics(shopId) {
  const reviews = db.getReviews().filter(r => r.shopId === shopId);
  if (reviews.length === 0) {
    return { average: 0, total: 0, keywords: {} };
  }
  
  const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  const average = sum / reviews.length;
  
  // Keyword tallies
  const kwCounts = {};
  reviews.forEach(rev => {
    if (rev.keywords && Array.isArray(rev.keywords)) {
      rev.keywords.forEach(kw => {
        kwCounts[kw] = (kwCounts[kw] || 0) + 1;
      });
    }
  });

  // Calculate percentages
  const kwPercentages = {};
  Object.keys(kwCounts).forEach(kw => {
    kwPercentages[kw] = Math.round((kwCounts[kw] / reviews.length) * 100);
  });

  return {
    average: average,
    total: reviews.length,
    keywords: kwPercentages
  };
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  // Haversine formula
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // returns distance in km
}

// ==========================================
// 5. VIEW RENDERERS (DOM MANIPULATION)
// ==========================================

// Global state variables for filters
let selectedIncludeKeywords = [];
let selectedExcludeKeywords = [];
let activeSort = "rating"; // "rating" | "distance"

// Renders the SEARCH & FILTER sidebar list
function renderShopList() {
  const container = document.getElementById("shop-list-results");
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  const region = document.getElementById("region-select").value;
  
  let shops = db.getShops();
  
  // A. Keyword Exclusion filter (ex: 노키즈존 제외)
  if (selectedExcludeKeywords.length > 0) {
    shops = shops.filter(shop => {
      const metrics = calculateRatingMetrics(shop.id);
      // If any of the excluded keywords exist with percentage > 0 in this shop, filter it out
      const hasExcludedKw = selectedExcludeKeywords.some(kw => metrics.keywords[kw] && metrics.keywords[kw] > 0);
      return !hasExcludedKw;
    });
  }

  // B. Location / Name / Menu search
  shops = shops.filter(shop => {
    const matchRegion = region ? shop.address.includes(region) : true;
    const matchQuery = query ? (
      shop.name.toLowerCase().includes(query) ||
      shop.menu.toLowerCase().includes(query) ||
      shop.address.toLowerCase().includes(query)
    ) : true;
    return matchRegion && matchQuery;
  });

  // Calculate stats for list items
  let listItems = shops.map(shop => {
    const metrics = calculateRatingMetrics(shop.id);
    let dist = null;
    if (userLocation) {
      dist = calculateDistance(userLocation.lat, userLocation.lng, shop.lat, shop.lng);
    }
    return {
      shop,
      metrics,
      distance: dist
    };
  });

  // C. Keyword Inclusion filter & Sorting
  // Inclusion formula: Sort by the average percentage of the selected include-keywords
  if (selectedIncludeKeywords.length > 0) {
    listItems = listItems.filter(item => {
      // Must have at least one of the include keywords with >0 rating
      return selectedIncludeKeywords.some(kw => item.metrics.keywords[kw] && item.metrics.keywords[kw] > 0);
    });
  }

  // Sort logic
  if (activeSort === "distance" && userLocation) {
    listItems.sort((a, b) => a.distance - b.distance);
  } else {
    // Default: Sort by rating (high to low)
    // If include keywords are selected, we sort by matching keyword percentage first, then rating
    if (selectedIncludeKeywords.length > 0) {
      listItems.sort((a, b) => {
        const scoreA = selectedIncludeKeywords.reduce((sum, kw) => sum + (a.metrics.keywords[kw] || 0), 0) / selectedIncludeKeywords.length;
        const scoreB = selectedIncludeKeywords.reduce((sum, kw) => sum + (b.metrics.keywords[kw] || 0), 0) / selectedIncludeKeywords.length;
        if (scoreB !== scoreA) return scoreB - scoreA;
        return b.metrics.average - a.metrics.average;
      });
    } else {
      listItems.sort((a, b) => b.metrics.average - a.metrics.average);
    }
  }

  // Update Result Counts
  document.getElementById("results-count").textContent = `검색 결과 ${listItems.length}건`;

  // Draw list HTML
  if (listItems.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🍵</div>
        <h4>일치하는 맛집이 없습니다</h4>
        <p>다른 키워드나 검색어를 시도해 보세요!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = listItems.map(({ shop, metrics, distance }) => {
    // Generate keyword badges
    const sortedKeywords = Object.entries(metrics.keywords)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3) // Top 3 keywords
      .map(([kw]) => `<span class="shop-card-kw-badge"># ${kw}</span>`)
      .join("");

    const distString = distance !== null ? (distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`) : "";

    return `
      <div class="shop-card" data-shop-id="${shop.id}">
        <img class="shop-card-img" src="${shop.photo || 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=300'}" alt="${shop.name}">
        <div class="shop-card-content">
          <div>
            <div class="shop-card-header">
              <h3 class="shop-card-title">${shop.name}</h3>
              <span class="shop-card-rating">⭐ ${metrics.average > 0 ? metrics.average.toFixed(1) : "0.0"}</span>
            </div>
            <div class="shop-card-address">${shop.address}</div>
            <div class="shop-card-keywords">${sortedKeywords}</div>
          </div>
          <div class="shop-card-footer">
            <span class="shop-card-menu">대표: ${shop.menu}</span>
            ${distString ? `<span class="shop-card-distance">${distString}</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Add click listeners to card items
  container.querySelectorAll(".shop-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-shop-id");
      const chosenShop = db.getShops().find(s => s.id === id);
      if (chosenShop) {
        showShopDetail(id);
        focusMapOnShop(chosenShop.lat, chosenShop.lng, 16);
      }
    });
  });
}

// Renders FAVORITES, VISIT PLANS, VISIT HISTORY
let activeMySubtab = "favs"; // "favs" | "plans" | "history"

function renderMyLists() {
  const container = document.getElementById("my-list-results");
  const favorites = db.getFavorites();
  const plans = db.getPlans();
  const history = db.getHistory();

  // Update Badge Counts
  document.getElementById("favs-count").textContent = favorites.length;
  document.getElementById("plans-count").textContent = plans.length;
  document.getElementById("history-count").textContent = history.length;

  let displayItems = [];

  if (activeMySubtab === "favs") {
    displayItems = db.getShops().filter(shop => favorites.includes(shop.id)).map(shop => ({ type: "fav", shop }));
  } else if (activeMySubtab === "plans") {
    displayItems = db.getShops().filter(shop => plans.includes(shop.id)).map(shop => ({ type: "plan", shop }));
  } else {
    // Visit completed history items
    displayItems = history.map(hist => {
      const shop = db.getShops().find(s => s.id === hist.shopId);
      return { type: "history", shop, date: hist.date, menu: hist.menu, notes: hist.notes };
    }).filter(item => item.shop !== undefined);
  }

  if (displayItems.length === 0) {
    let emptyIcon = "💖", emptyTitle = "즐겨찾는 매장이 없습니다", emptyDesc = "관심 있는 맛집 상세 페이지에서 즐겨찾기를 추가해 보세요.";
    if (activeMySubtab === "plans") {
      emptyIcon = "🗓️";
      emptyTitle = "방문 예정인 매장이 없습니다";
      emptyDesc = "다음에 가고 싶은 말차 카페를 목록에 모아두세요.";
    } else if (activeMySubtab === "history") {
      emptyIcon = "🦖";
      emptyTitle = "방문 기록이 비어있습니다";
      emptyDesc = "리뷰를 남기시거나 직접 방문 완료를 기록하시면 여기에 쌓입니다.";
    }
    
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${emptyIcon}</div>
        <h4>${emptyTitle}</h4>
        <p>${emptyDesc}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = displayItems.map(item => {
    const metrics = calculateRatingMetrics(item.shop.id);
    
    if (item.type === "history") {
      // Different layout for history card with ordered menu / date
      return `
        <div class="shop-card history-card" data-shop-id="${item.shop.id}">
          <img class="shop-card-img" src="${item.shop.photo || 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=300'}" alt="${item.shop.name}">
          <div class="shop-card-content">
            <div>
              <div class="shop-card-header">
                <h3 class="shop-card-title">${item.shop.name}</h3>
                <button class="icon-button delete-item-btn" data-type="history" data-id="${item.shop.id}" title="기록 삭제" style="color:var(--danger)">
                  <i data-lucide="trash-2" style="width:14px;height:14px"></i>
                </button>
              </div>
              <div class="shop-card-address" style="margin: 2px 0;"><span class="badge" style="background:#eef6f0;color:var(--primary-light)">📅 ${item.date} 방문 완료</span></div>
              <div class="shop-card-menu" style="font-weight:600;margin-top:4px;">주문: ${item.menu || "대표 메뉴"}</div>
              ${item.notes ? `<div style="font-size:11px;color:var(--text-muted);font-style:italic;margin-top:2px;">"${item.notes}"</div>` : ""}
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="shop-card" data-shop-id="${item.shop.id}">
        <img class="shop-card-img" src="${item.shop.photo || 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=300'}" alt="${item.shop.name}">
        <div class="shop-card-content">
          <div>
            <div class="shop-card-header">
              <h3 class="shop-card-title">${item.shop.name}</h3>
              <button class="icon-button delete-item-btn" data-type="${item.type}" data-id="${item.shop.id}" title="제거" style="color:var(--text-muted)">
                <i data-lucide="trash-2" style="width:14px;height:14px"></i>
              </button>
            </div>
            <div class="shop-card-address">${item.shop.address}</div>
            <div class="shop-card-rating" style="margin-top: 4px;">⭐ ${metrics.average > 0 ? metrics.average.toFixed(1) : "0.0"} (${metrics.total}개)</div>
          </div>
          <div class="shop-card-footer">
            <span class="shop-card-menu">대표: ${item.shop.menu}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();

  // Add click listener to card content (excluding delete button)
  container.querySelectorAll(".shop-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // If clicked on delete button, do not open detail
      if (e.target.closest(".delete-item-btn")) return;
      
      const id = card.getAttribute("data-shop-id");
      const chosenShop = db.getShops().find(s => s.id === id);
      if (chosenShop) {
        showShopDetail(id);
        focusMapOnShop(chosenShop.lat, chosenShop.lng, 16);
      }
    });
  });

  // Add delete confirmation popup trigger (PRD: "즐겨찾기/방문예정을 취소할 경우, 안내 메시지를 한 번 띄운 뒤...")
  container.querySelectorAll(".delete-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-type");
      const id = btn.getAttribute("data-id");
      
      let title = "즐겨찾기 삭제";
      let msg = "정말 즐겨찾기 리스트에서 삭제하시겠습니까?";
      let callback = () => {
        db.removeFavorite(id);
        showToast("💖 즐겨찾기가 해제되었습니다.");
        renderMyLists();
        updateDetailButtonsIfOpen(id);
      };

      if (type === "plan") {
        title = "방문 예정 취소";
        msg = "정말 방문 예정 목록에서 이 매장을 제외하시겠습니까?";
        callback = () => {
          db.removePlan(id);
          showToast("🗓️ 방문 예정 목록에서 삭제되었습니다.");
          renderMyLists();
          updateDetailButtonsIfOpen(id);
        };
      } else if (type === "history") {
        title = "방문 완료 기록 삭제";
        msg = "이 매장의 방문 완료 기록(주문 메뉴 및 날짜)을 삭제하시겠습니까? (작성하신 리뷰는 유지됩니다)";
        callback = () => {
          db.removeHistory(id);
          showToast("🦖 방문 완료 기록이 삭제되었습니다.");
          renderMyLists();
        };
      }

      openConfirmModal(title, msg, callback);
    });
  });
}

function updateDetailButtonsIfOpen(shopId) {
  const panel = document.getElementById("shop-detail-panel");
  if (panel.classList.contains("open")) {
    const currentId = panel.querySelector("[data-detail-shop-id]")?.getAttribute("data-detail-shop-id");
    if (currentId === shopId) {
      // Re-render detail panel quietly to keep button states accurate
      showShopDetail(shopId, true);
    }
  }
}

// Renders MY PROFILE / USER STATISTICS
function renderProfile() {
  const user = db.getUser();
  const loggedOutView = document.getElementById("profile-logged-out");
  const loggedInView = document.getElementById("profile-logged-in");
  const authHeaderBtn = document.getElementById("auth-header-btn");

  if (!user) {
    loggedOutView.classList.remove("hidden");
    loggedInView.classList.add("hidden");
    authHeaderBtn.innerHTML = `<i data-lucide="user"></i><span class="btn-text">로그인</span>`;
  } else {
    loggedOutView.classList.add("hidden");
    loggedInView.classList.remove("hidden");
    authHeaderBtn.innerHTML = `<img class="header-avatar" src="${user.avatar}" alt="user" style="width:20px;height:20px;border-radius:50%;object-fit:cover;margin-right:4px;"> <span>로그아웃</span>`;

    // Dynamic nickname and avatar
    document.getElementById("user-nickname").textContent = user.name;
    document.getElementById("user-avatar").src = user.avatar;
    document.getElementById("user-email").textContent = `${user.type === 'kakao' ? '카카오' : '네이버'} 연동계정`;

    // Count user activities
    const favsCount = db.getFavorites().length;
    const plansCount = db.getPlans().length;
    
    // Count reviews written by this mock user
    const userReviews = db.getReviews().filter(r => r.userName === user.name);
    const reviewsCount = userReviews.length;

    document.getElementById("stat-favorites-count").textContent = favsCount;
    document.getElementById("stat-plans-count").textContent = plansCount;
    document.getElementById("stat-reviews-count").textContent = reviewsCount;
    
    document.getElementById("stat-favorites-count").parentElement.style.cursor = "pointer";
    document.getElementById("stat-favorites-count").parentElement.onclick = () => {
      switchTab("favorites");
      document.getElementById("subtab-favs-btn").click();
    };
    document.getElementById("stat-plans-count").parentElement.style.cursor = "pointer";
    document.getElementById("stat-plans-count").parentElement.onclick = () => {
      switchTab("favorites");
      document.getElementById("subtab-plans-btn").click();
    };

    // Calculate Rank Title (Dinosaur scales from PRD request "막 공룡만해")
    let rankTitle = "아기 도마뱀급 말차입문자";
    let progressPercent = 10;
    let nextLevelText = "다음 등급(새끼 공룡급 말차덕후)까지 리뷰 1개 필요";

    if (reviewsCount >= 1 && reviewsCount < 3) {
      rankTitle = "새끼 공룡급 말차덕후 🦖";
      progressPercent = 40;
      nextLevelText = `다음 등급(티라노급 말차왕)까지 리뷰 ${3 - reviewsCount}개 필요`;
    } else if (reviewsCount >= 3 && reviewsCount < 5) {
      rankTitle = "티라노급 말차왕 👑";
      progressPercent = 75;
      nextLevelText = `다음 등급(전설의 말차 드래곤)까지 리뷰 ${5 - reviewsCount}개 필요`;
    } else if (reviewsCount >= 5) {
      rankTitle = "전설의 말차 드래곤 🐉 (공룡 대왕)";
      progressPercent = 100;
      nextLevelText = "최고 등급에 도달하셨습니다! 당신은 우주 최강의 녹차 매니아!";
    }

    document.getElementById("user-rank-title").textContent = rankTitle;
    document.getElementById("user-rank-progress").style.width = `${progressPercent}%`;
    document.getElementById("user-rank-next").textContent = nextLevelText;
  }
  lucide.createIcons();
}

// Renders SHOP DETAIL PANEL DRAWER
// isSilent: if true, does not trigger transitions, just updates content (useful for updating buttons)
function showShopDetail(shopId, isSilent = false) {
  const panel = document.getElementById("shop-detail-panel");
  const content = document.getElementById("detail-content");
  
  const shop = db.getShops().find(s => s.id === shopId);
  if (!shop) return;

  const metrics = calculateRatingMetrics(shopId);
  const user = db.getUser();
  const isFav = db.getFavorites().includes(shopId);
  const isPlan = db.getPlans().includes(shopId);

  // Core information injection
  let htmlContent = `
    <div data-detail-shop-id="${shop.id}"></div>
    <!-- Main Hero Image -->
    <div class="detail-image-hero">
      <img src="${shop.photo || 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600'}" alt="${shop.name}">
      <div class="detail-badge-group">
        <span class="badge" style="background:var(--accent-light);color:var(--primary);font-weight:700">⭐ ${metrics.average > 0 ? metrics.average.toFixed(1) : "0.0"} (${metrics.total}개)</span>
        <span class="badge" style="background:#eef6f0;color:var(--primary-light)">${shop.address.split(' ')[0]} 맛집</span>
      </div>
    </div>

    <!-- Details Content -->
    <div class="detail-body">
      
      <!-- Shop Title & Basic Actions -->
      <div class="detail-title-row">
        <div>
          <h2>${shop.name}</h2>
          <div class="shop-card-address" style="margin-top:4px">${shop.address}</div>
        </div>
      </div>

      <!-- Action buttons: Favorite, Plan to Visit, Register Visit -->
      <div class="detail-actions-row">
        <button id="detail-fav-btn" class="detail-action-btn ${isFav ? 'active' : ''}">
          <i data-lucide="heart" style="${isFav ? 'fill:var(--secondary)' : ''}"></i>
          <span>즐겨찾기</span>
        </button>
        <button id="detail-plan-btn" class="detail-action-btn ${isPlan ? 'plan-active' : ''}">
          <i data-lucide="calendar"></i>
          <span>방문 예정</span>
        </button>
        <button id="detail-visit-btn" class="detail-action-btn">
          <i data-lucide="check-circle2"></i>
          <span>직접 방문등록</span>
        </button>
      </div>

      <!-- Introduction paragraph -->
      <div class="detail-desc-box">
        ${shop.desc}
      </div>

      <!-- Specific info listing -->
      <div class="detail-info-list">
        ${shop.phone ? `
        <div class="info-item">
          <i data-lucide="phone"></i>
          <div class="info-item-content">
            <span class="info-item-label">연락처:</span>${shop.phone}
          </div>
        </div>` : ''}
        <div class="info-item">
          <i data-lucide="cup-soda"></i>
          <div class="info-item-content">
            <span class="info-item-label">대표 메뉴:</span>${shop.menu}
          </div>
        </div>
        <div class="info-item">
          <i data-lucide="navigation"></i>
          <div class="info-item-content">
            <span class="info-item-label">위치 좌표:</span>위도 ${shop.lat.toFixed(5)}, 경도 ${shop.lng.toFixed(5)}
          </div>
        </div>
      </div>

      <!-- Keywords distribution bar charts -->
      <div class="detail-keywords-summary">
        <div class="section-title-row">
          <h3>매장 맽차력 키워드 요약</h3>
          <span style="font-size:11px;color:var(--text-muted)">리뷰 ${metrics.total}건 기준</span>
        </div>
        
        <div class="kw-chart-list">
          ${metrics.total === 0 ? `
            <div style="font-size:12px;color:var(--text-muted);text-align:center;padding:10px 0;">아직 작성된 키워드 리뷰가 없습니다.</div>
          ` : Object.entries(metrics.keywords)
              .sort((a, b) => b[1] - a[1])
              .map(([kw, percent]) => `
                <div class="kw-chart-row">
                  <span class="kw-chart-name"># ${kw}</span>
                  <div class="kw-chart-bar-bg">
                    <div class="kw-chart-bar-fg" style="width: ${percent}%"></div>
                  </div>
                  <span class="kw-chart-percent">${percent}%</span>
                </div>
              `).join("")
          }
        </div>
      </div>

      <!-- Reviews list section -->
      <div class="detail-reviews-section">
        <div class="section-title-row">
          <h3>방문자 리뷰 목록 (${metrics.total})</h3>
          <button id="add-review-btn" class="btn btn-outline" style="font-size:11px;padding:4px 10px;border-radius:var(--radius-sm)">
            <i data-lucide="edit-3" style="width:12px;height:12px"></i> 리뷰 작성
          </button>
        </div>

        <div class="reviews-list">
          ${metrics.total === 0 ? `
            <div class="empty-state" style="padding:20px 0">
              <div class="empty-state-icon" style="font-size:24px">📝</div>
              <p style="font-size:11.5px">첫 리뷰를 작성해 보시겠습니까?</p>
            </div>
          ` : db.getReviews().filter(r => r.shopId === shopId).map(rev => {
                const starsHtml = "★".repeat(Math.floor(rev.rating)) + (rev.rating % 1 !== 0 ? "½" : "") + "☆".repeat(5 - Math.ceil(rev.rating));
                const kwBadges = (rev.keywords || []).map(kw => `<span class="shop-card-kw-badge" style="font-size:9.5px;padding:1px 4px"># ${kw}</span>`).join(" ");
                const userLiked = user ? getReviewLikeState(rev.id) : false;

                return `
                  <div class="review-item-card">
                    <div class="review-user-row">
                      <div class="review-user-left">
                        <img class="review-user-pic" src="${rev.userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50'}" alt="user">
                        <div>
                          <div class="review-user-name">${rev.userName}</div>
                          <div class="review-date">${rev.date}</div>
                        </div>
                      </div>
                      <span class="review-stars">${starsHtml} <span style="font-weight:700;font-size:11px">${rev.rating.toFixed(1)}</span></span>
                    </div>
                    ${kwBadges ? `<div class="review-keywords-list">${kwBadges}</div>` : ""}
                    <div class="review-text-content">${rev.text}</div>
                    ${rev.photo ? `<img class="review-item-img" src="${rev.photo}" alt="리뷰사진">` : ""}
                    <div class="review-item-footer">
                      <button class="review-like-btn ${userLiked ? 'liked' : ''}" data-review-id="${rev.id}">
                        <i data-lucide="thumbs-up"></i>
                        <span>좋아요 <span class="like-count">${rev.likes || 0}</span></span>
                      </button>
                    </div>
                  </div>
                `;
              }).join("")
          }
        </div>
      </div>

    </div>
  `;

  content.innerHTML = htmlContent;
  lucide.createIcons();

  if (!isSilent) {
    panel.classList.add("open");
  }

  // ----------------------------------------
  // EVENT LISTENERS FOR DETAIL INTERACTIONS
  // ----------------------------------------
  
  // A. Toggle Favorite (PRD: 즐겨찾기 취소할 때 팝업)
  document.getElementById("detail-fav-btn").addEventListener("click", () => {
    if (!db.getUser()) {
      openAuthModal();
      return;
    }
    
    if (isFav) {
      // Favorite is already active, trigger confirmation before deleting (PRD requirement)
      openConfirmModal(
        "즐겨찾기 삭제",
        `정말 <strong>[${shop.name}]</strong> 매장을 즐겨찾기 리스트에서 해제하시겠습니까?`,
        () => {
          db.toggleFavorite(shop.id);
          showToast("💖 즐겨찾기가 해제되었습니다.");
          showShopDetail(shop.id, true);
          renderMyLists();
        }
      );
    } else {
      db.toggleFavorite(shop.id);
      showToast("💖 즐겨찾는 매장으로 추가되었습니다!");
      showShopDetail(shop.id, true);
      renderMyLists();
    }
  });

  // B. Toggle Plan to Visit (PRD: 방문예정 취소할 때 팝업)
  document.getElementById("detail-plan-btn").addEventListener("click", () => {
    if (!db.getUser()) {
      openAuthModal();
      return;
    }
    
    if (isPlan) {
      openConfirmModal(
        "방문 예정 취소",
        `정말 <strong>[${shop.name}]</strong> 매장의 방문 예정 일정을 취소하시겠습니까?`,
        () => {
          db.togglePlan(shop.id);
          showToast("🗓️ 방문 예정 목록에서 취소되었습니다.");
          showShopDetail(shop.id, true);
          renderMyLists();
        }
      );
    } else {
      db.togglePlan(shop.id);
      showToast("🗓️ 방문 예정 매장으로 추가되었습니다!");
      showShopDetail(shop.id, true);
      renderMyLists();
    }
  });

  // C. Directly register visit 완료
  document.getElementById("detail-visit-btn").addEventListener("click", () => {
    if (!db.getUser()) {
      openAuthModal();
      return;
    }
    // Simple custom input dialog mocking
    const today = new Date().toISOString().split('T')[0];
    const orderMenu = prompt("주문하신 메뉴를 적어주세요:", shop.menu.split(',')[0]);
    if (orderMenu === null) return; // Cancelled
    
    const visitNotes = prompt("간단한 방문 한줄평을 써보세요:", "정말 진하고 맛있어요!");
    if (visitNotes === null) return;
    
    db.addVisitHistory({
      shopId: shop.id,
      date: today,
      menu: orderMenu,
      notes: visitNotes
    });
    
    showToast("🦖 방문 완료 기록이 저장되었습니다!");
    renderMyLists();
  });

  // D. Write Review Button
  document.getElementById("add-review-btn").addEventListener("click", () => {
    if (!db.getUser()) {
      openAuthModal();
      return;
    }
    openReviewModal(shopId);
  });

  // E. Like Reviews
  content.querySelectorAll(".review-like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!db.getUser()) {
        openAuthModal();
        return;
      }
      const revId = btn.getAttribute("data-review-id");
      toggleReviewLike(revId, btn);
    });
  });
}

// Review Likes Persistence in memory for this session
const likedReviewIds = new Set();
function getReviewLikeState(revId) {
  return likedReviewIds.has(revId);
}

function toggleReviewLike(revId, btnElement) {
  const reviews = db.getReviews();
  const rev = reviews.find(r => r.id === revId);
  if (!rev) return;

  const countSpan = btnElement.querySelector(".like-count");

  if (likedReviewIds.has(revId)) {
    likedReviewIds.delete(revId);
    rev.likes = Math.max(0, (rev.likes || 0) - 1);
    btnElement.classList.remove("liked");
    showToast("👍 좋아요를 취소했습니다.");
  } else {
    likedReviewIds.add(revId);
    rev.likes = (rev.likes || 0) + 1;
    btnElement.classList.add("liked");
    showToast("👍 리뷰가 유익하셨군요!");
  }
  
  countSpan.textContent = rev.likes;
  localStorage.setItem("matcha_reviews", JSON.stringify(reviews));
}

// ==========================================
// 6. FORM & DIALOGS CONTROL
// ==========================================

// Custom Toast Alerts
function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🍵</span> <span>${message}</span>`;
  container.appendChild(toast);
  
  // Slide out after 3 seconds, remove from DOM
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Social Authentication Dialog (Mocked)
function openAuthModal() {
  document.getElementById("auth-modal").classList.add("open");
}
function closeAuthModal() {
  document.getElementById("auth-modal").classList.remove("open");
}

function handleSocialLogin(type) {
  const user = db.login(type);
  closeAuthModal();
  showToast(`🦖 로그인 완료! 반갑습니다, ${user.name}님!`);
  renderProfile();
  renderMyLists();
  
  // Re-render detail button states if opened
  const panel = document.getElementById("shop-detail-panel");
  if (panel.classList.contains("open")) {
    const shopId = panel.querySelector("[data-detail-shop-id]")?.getAttribute("data-detail-shop-id");
    if (shopId) showShopDetail(shopId, true);
  }
}

// Review Registration Form Modal
let activeReviewShopId = null;

function openReviewModal(shopId) {
  const shop = db.getShops().find(s => s.id === shopId);
  if (!shop) return;
  activeReviewShopId = shopId;
  
  document.getElementById("review-shop-name").textContent = shop.name;
  
  // Reset Form
  document.getElementById("review-form").reset();
  document.getElementById("rating-slider").value = 5.0;
  document.getElementById("rating-val-display").textContent = "5.0";
  renderInteractiveStars(5.0);

  document.getElementById("review-modal").classList.add("open");
}

function closeReviewModal() {
  document.getElementById("review-modal").classList.remove("open");
  activeReviewShopId = null;
}

function renderInteractiveStars(rating) {
  const starsContainer = document.getElementById("stars-row");
  let starsHtml = "";
  
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      starsHtml += "★"; // Full star
    } else if (rating === i - 0.5) {
      starsHtml += "½"; // Half star character
    } else {
      starsHtml += "☆"; // Empty star
    }
  }
  starsContainer.textContent = starsHtml;
}

// Custom Confirm Dialog (P0 Cancel-Confirmation requirement)
let confirmCallback = null;

function openConfirmModal(title, message, okCallback) {
  document.getElementById("confirm-title").innerHTML = title;
  document.getElementById("confirm-msg").innerHTML = message;
  confirmCallback = okCallback;
  document.getElementById("confirm-modal").classList.add("open");
}

function closeConfirmModal() {
  document.getElementById("confirm-modal").classList.remove("open");
  confirmCallback = null;
}

// ==========================================
// 7. INITIALIZATION & BINDING EVENTS
// ==========================================

function switchTab(tabName) {
  // Navigation button toggle
  document.querySelectorAll(".nav-tab").forEach(tab => {
    if (tab.getAttribute("data-tab") === tabName) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Pane toggle
  document.querySelectorAll(".tab-pane").forEach(pane => {
    if (pane.id === `tab-${tabName}`) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });

  // Specific tab render updates
  if (tabName === "favorites") {
    renderMyLists();
  } else if (tabName === "profile") {
    renderProfile();
  }
  
  // On Mobile, close sidebar after switching if it was open (except when clicking search/favorites first)
  if (window.innerWidth <= 900) {
    // Keep sidebar open, but adjust height/views
  }
}

function initEventHandlers() {
  // Navigation Tabs switching
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("data-tab");
      switchTab(tabName);
    });
  });

  // Subtabs within Favorites (Favorites, Visit Plan, Visit Completed)
  document.querySelectorAll(".sub-tab").forEach(subtab => {
    subtab.addEventListener("click", () => {
      document.querySelectorAll(".sub-tab").forEach(st => st.classList.remove("active"));
      subtab.classList.add("active");
      activeMySubtab = subtab.getAttribute("data-subtab");
      renderMyLists();
    });
  });

  // Main Header login button
  document.getElementById("auth-header-btn").addEventListener("click", () => {
    if (db.getUser()) {
      // Logout
      db.logout();
      showToast("👋 로그아웃 되었습니다.");
      renderProfile();
      renderMyLists();
      // Update details panel if open
      const panel = document.getElementById("shop-detail-panel");
      if (panel.classList.contains("open")) {
        const currentId = panel.querySelector("[data-detail-shop-id]")?.getAttribute("data-detail-shop-id");
        if (currentId) showShopDetail(currentId, true);
      }
    } else {
      openAuthModal();
    }
  });

  // Modals closing
  document.getElementById("auth-close-btn").addEventListener("click", closeAuthModal);
  document.getElementById("review-close-btn").addEventListener("click", closeReviewModal);
  document.getElementById("confirm-cancel-btn").addEventListener("click", closeConfirmModal);
  document.getElementById("detail-close-btn").addEventListener("click", () => {
    document.getElementById("shop-detail-panel").classList.remove("open");
  });

  // Confirm Ok action
  document.getElementById("confirm-ok-btn").addEventListener("click", () => {
    if (confirmCallback) confirmCallback();
    closeConfirmModal();
  });

  // Social Auth Triggers
  document.getElementById("login-kakao-btn").addEventListener("click", () => handleSocialLogin("kakao"));
  document.getElementById("login-naver-btn").addEventListener("click", () => handleSocialLogin("naver"));
  document.getElementById("profile-login-btn").addEventListener("click", openAuthModal);

  // Review Slider Stars update
  const slider = document.getElementById("rating-slider");
  slider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    document.getElementById("rating-val-display").textContent = val.toFixed(1);
    renderInteractiveStars(val);
  });

  // Keyword Accordion toggle
  const kwToggle = document.getElementById("keyword-toggle");
  kwToggle.addEventListener("click", () => {
    kwToggle.parentElement.classList.toggle("active");
  });

  // Interactive Keyword Filter Badges (Includes / Excludes)
  // Inclusion tag selection
  document.querySelectorAll("#include-keywords .tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
      const kw = chip.getAttribute("data-keyword");
      if (chip.classList.contains("selected")) {
        selectedIncludeKeywords.push(kw);
      } else {
        selectedIncludeKeywords = selectedIncludeKeywords.filter(k => k !== kw);
      }
      renderShopList();
    });
  });

  // Exclusion tag selection
  document.querySelectorAll("#exclude-keywords .tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
      const kw = chip.getAttribute("data-keyword");
      if (chip.classList.contains("selected")) {
        selectedExcludeKeywords.push(kw);
      } else {
        selectedExcludeKeywords = selectedExcludeKeywords.filter(k => k !== kw);
      }
      renderShopList();
    });
  });

  // Search input typing (Fuzzy search delay)
  let searchTimeout;
  document.getElementById("search-input").addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      renderShopList();
    }, 250);
  });

  // Region dropdown change
  document.getElementById("region-select").addEventListener("change", () => {
    renderShopList();
  });

  // Sort buttons clicking
  document.getElementById("sort-rating-btn").addEventListener("click", () => {
    document.getElementById("sort-rating-btn").classList.add("active");
    document.getElementById("sort-distance-btn").classList.remove("active");
    activeSort = "rating";
    renderShopList();
  });

  document.getElementById("sort-distance-btn").addEventListener("click", () => {
    if (!userLocation) {
      // Trigger Geolocation search first if location is null
      document.getElementById("gps-btn").click();
      return;
    }
    document.getElementById("sort-rating-btn").classList.remove("active");
    document.getElementById("sort-distance-btn").classList.add("active");
    activeSort = "distance";
    renderShopList();
  });

  // Preset Photo URL chips in Register tab
  document.querySelectorAll(".preset-img-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      document.getElementById("reg-photo").value = url;
      showToast("📸 대표 이미지 사진 프리셋이 적용되었습니다!");
    });
  });

  // Shop Registration Form Submit
  document.getElementById("shop-register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("reg-name").value.trim();
    const address = document.getElementById("reg-address").value.trim();
    const lat = parseFloat(document.getElementById("reg-lat").value);
    const lng = parseFloat(document.getElementById("reg-lng").value);
    const phone = document.getElementById("reg-phone").value.trim();
    const menu = document.getElementById("reg-menu").value.trim();
    const photo = document.getElementById("reg-photo").value.trim();
    const desc = document.getElementById("reg-desc").value.trim();

    if (!name || !address || isNaN(lat) || isNaN(lng) || !menu || !desc) {
      showToast("❌ 필수 항목(*)을 모두 입력해 주세요.");
      return;
    }

    const newShopId = `shop-${Date.now()}`;
    const newShop = {
      id: newShopId,
      name,
      address,
      lat,
      lng,
      phone,
      menu,
      photo: photo || "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600",
      desc
    };

    // Save to database
    db.saveShop(newShop);

    // If active registration marker was added on map, clear it
    if (window.tempRegMarker) {
      map.removeLayer(window.tempRegMarker);
      window.tempRegMarker = null;
    }

    // Refresh UI
    plotMarkers();
    showToast(`🌱 '${name}' 맛집이 신규 등록되었습니다!`);
    
    // Switch to search tab and focus on this new shop
    document.getElementById("shop-register-form").reset();
    switchTab("search");
    renderShopList();
    showShopDetail(newShopId);
    focusMapOnShop(lat, lng, 16);
  });

  // Review Form Submit
  document.getElementById("review-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!activeReviewShopId) return;

    const user = db.getUser();
    if (!user) {
      openAuthModal();
      return;
    }

    const rating = parseFloat(document.getElementById("rating-slider").value);
    const text = document.getElementById("review-text").value.trim();
    const photoUrl = document.getElementById("review-photo-url").value.trim();
    
    // Get Selected Keywords
    const checkedKeywords = [];
    document.querySelectorAll("input[name='review-keywords']:checked").forEach(checkbox => {
      checkedKeywords.push(checkbox.value);
    });

    if (text.length < 5) {
      showToast("❌ 평가는 최소 5자 이상 작성해 주세요.");
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    
    const newReview = {
      id: `rev-${Date.now()}`,
      shopId: activeReviewShopId,
      userName: user.name,
      userAvatar: user.avatar,
      rating: rating,
      keywords: checkedKeywords,
      text: text,
      photo: photoUrl || null,
      date: today,
      likes: 0
    };

    // Save review
    db.saveReview(newReview);
    
    // Automatically add this shop to VISIT HISTORY if not already added (PRD requirement 4.5.3)
    const history = db.getHistory();
    const hasVisited = history.some(item => item.shopId === activeReviewShopId);
    if (!hasVisited) {
      const shop = db.getShops().find(s => s.id === activeReviewShopId);
      db.addVisitHistory({
        shopId: activeReviewShopId,
        date: today,
        menu: shop ? shop.menu.split(',')[0] : "말차 디저트",
        notes: "리뷰 작성으로 자동 연동"
      });
      showToast("📝 리뷰 작성 완료! 방문 완료 기록에 자동 등록되었습니다.");
    } else {
      showToast("📝 리뷰가 소중하게 등록되었습니다.");
    }

    // Refresh detail screen & profile stats
    showShopDetail(activeReviewShopId, true);
    closeReviewModal();
    renderShopList();
    renderProfile();
    renderMyLists();
    plotMarkers(); // Refreshes average ratings on map popups
  });

  // Profile Logout Button
  document.getElementById("profile-logout-btn").addEventListener("click", () => {
    db.logout();
    showToast("👋 로그아웃 되었습니다.");
    renderProfile();
    renderMyLists();
    
    // Update detail button states if opened
    const panel = document.getElementById("shop-detail-panel");
    if (panel.classList.contains("open")) {
      const currentId = panel.querySelector("[data-detail-shop-id]")?.getAttribute("data-detail-shop-id");
      if (currentId) showShopDetail(currentId, true);
    }
  });

  // Floating Sidebar toggler (Mobile layout)
  const mobileToggle = document.getElementById("mobile-sidebar-toggle");
  mobileToggle.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
      mobileToggle.innerHTML = `<i data-lucide="x"></i>`;
      mobileToggle.style.backgroundColor = "var(--danger)";
    } else {
      mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
      mobileToggle.style.backgroundColor = "var(--primary)";
    }
    lucide.createIcons();
  });
}

// Window Load Handler
window.addEventListener("DOMContentLoaded", () => {
  initMap();
  initGPS();
  initEventHandlers();
  
  // Render default components
  renderShopList();
  renderProfile();
  
  // Hide Distance sorting until user activates GPS
  document.getElementById("sort-distance-btn").classList.add("hidden");
  
  // Load Lucide Icons
  lucide.createIcons();
});
