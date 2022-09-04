import type { NextApiRequest, NextApiResponse } from "next";

interface SandwichType {
  id: number;
  calorie: number;
  eng_name: string;
  img: string;
  name: string;
  summary: string;
}

const sandwich = (
  req: NextApiRequest,
  res: NextApiResponse<SandwichType[]>
) => {
  res.status(200).json([
    {
      id: 0,
      calorie: 384,
      eng_name: "Rotisserie BBQ Chicken Avocado",
      img: "https://www.subway.co.kr//upload/menu/앱용_로티세리_바비큐_치킨_아보카도_15cm_단품_20220228055941893.png",
      name: "로티세리 바비큐 치킨 아보카도",
      summary:
        "촉촉한 바비큐 치킨의 풍미가 가득! \r아보카도와 손으로 찢어 부드러운 <br>치킨의 완벽한 조화!",
    },
    {
      id: 1,
      calorie: 327,
      eng_name: "Rotisserie Barbecue Chicken",
      img: "https://www.subway.co.kr//upload/menu/Rotisserie-Barbecue-Chicken_20211231023137878.png",
      name: "로티세리 바비큐 치킨",
      summary:
        "촉촉한 바비큐 치킨의 풍미가득. <br>손으로 찢어 더욱 부드러운 치킨의 혁명",
    },
    {
      id: 2,
      calorie: 388,
      eng_name: "Italian B.M.T.™",
      img: "https://www.subway.co.kr//upload/menu/Italian_B.M.T_20211231094910899.png",
      name: "이탈리안 비엠티",
      summary:
        "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! \r전세계가 사랑하는 써브웨이의 베스트셀러!",
    },
    {
      id: 3,
      calorie: 445,
      eng_name: "Italian B.M.T.™",
      img: "https://www.subway.co.kr//upload/menu/이탈리안-비엠티-15cm+아보카도-추가_20220103100401390.png",
      name: "이탈리안비엠티 아보카도",
      summary:
        "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화!\r전세계가 사랑하는 써브웨이의 베스트셀러!",
    },
    {
      id: 4,
      calorie: 595,
      eng_name: "Italian B.M.T.™",
      img: "https://www.subway.co.kr//upload/menu/이탈리안-비엠티-15cm+에그마요-추가_20220103100121269.png",
      name: "이탈리안비엠티 에그마요",
      summary:
        "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화!\r전세계가 사랑하는 써브웨이의 베스트셀러!",
    },
    {
      id: 5,
      calorie: 229,
      eng_name: "Shrimp",
      img: "https://www.subway.co.kr//upload/menu/Shrimp_20211231095411189.png",
      name: "쉬림프",
      summary:
        "탱글한 식감이 그대로 살아있는 통새우가\r들어가 먹을 때 마다\r진짜 새우의 풍미가 가득",
    },
    {
      id: 6,
      calorie: 300,
      eng_name: "Roasted Chicken",
      img: "https://www.subway.co.kr//upload/menu/Roasted-Chicken_20211231095032718.png",
      name: "로스트 치킨",
      summary: "오븐에 구워 담백한 저칼로리 <br>닭가슴살의 건강한 풍미",
    },
    {
      id: 7,
      calorie: 416,
      eng_name: "Egg Mayo",
      img: "https://www.subway.co.kr//upload/menu/Egg-Mayo_20211231094817112.png",
      name: "에그마요",
      summary: "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
    },
    {
      id: 8,
      calorie: 372,
      eng_name: "K-BBQ",
      img: "https://www.subway.co.kr//upload/menu/K-BBQ_20211231094930225.png",
      name: "K-바비큐",
      summary:
        "써브웨이 최초의 코리안 스타일 샌드위치! \r마늘, 간장 그리고 은은한 불맛까지!",
    },
    {
      id: 9,
      calorie: 327,
      eng_name: "Pulled Pork Barbecue",
      img: "https://www.subway.co.kr//upload/menu/Pulled-Pork+cheese_20211231095012512.png",
      name: "풀드 포크 바비큐",
      summary: "미국 스타일의 풀드 포크 바비큐가 가득 들어간 샌드위치",
    },
    {
      id: 10,
      calorie: 300,
      eng_name: "B.L.T.",
      img: "https://www.subway.co.kr//upload/menu/B.L.T_20211231094744175.png",
      name: "비엘티",
      summary: "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~",
    },
    {
      id: 11,
      calorie: 446,
      eng_name: "Meatball",
      img: "https://www.subway.co.kr//upload/menu/Meatball_20211231094946983.png",
      name: "미트볼",
      summary:
        "이탈리안 스타일 비프 미트볼에 <br>써브웨이만의 풍부한 토마토 향이<br>살아있는 마리나라소스를 듬뿍",
    },
    {
      id: 12,
      calorie: 262,
      eng_name: "Ham",
      img: "https://www.subway.co.kr//upload/menu/Ham_20211231094833168.png",
      name: "햄",
      summary: "풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연",
    },
    {
      id: 13,
      calorie: 316,
      eng_name: "Tuna",
      img: "https://www.subway.co.kr//upload/menu/Tuna_20211231095535268.png",
      name: "참치",
      summary:
        "남녀노소 좋아하는 담백한 참치와 <br>고소한 마요네즈의 완벽한 조화",
    },
    {
      id: 14,
      calorie: 293,
      eng_name: "Subway Club™",
      img: "https://www.subway.co.kr//upload/menu/Subway-Club™_20211231095518589.png",
      name: "써브웨이 클럽",
      summary: "명실공히 시그니처 써브! 터키, 햄, <br>베이컨의 완벽한 앙상블",
    },
    {
      id: 15,
      calorie: 259,
      eng_name: "Turkey",
      img: "https://www.subway.co.kr//upload/menu/Turkey_20211231095552061.png",
      name: "터키",
      summary: "슬림하게 즐기는 오리지날 터키 샌드위치",
    },
    {
      id: 16,
      calorie: 209,
      eng_name: "Veggie Delite",
      img: "https://www.subway.co.kr//upload/menu/Veggie-Delite_20211231095658375.png",
      name: "베지",
      summary: "갓 구운 빵과 신선한 7가지 야채로 <br>즐기는 깔끔한 한끼",
    },
    {
      id: 17,
      calorie: 355,
      eng_name: "Steak & Cheese",
      img: "https://www.subway.co.kr//upload/menu/Steak-&-Cheese_20211231095455613.png",
      name: "스테이크 & 치즈",
      summary: "육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득",
    },
    {
      id: 18,
      calorie: 349,
      eng_name: "Turkey Bacon Avocado",
      img: "https://www.subway.co.kr//upload/menu/Turkey-Bacon-Avocado_20211231095615613.png",
      name: "터키 베이컨 아보카도",
      summary:
        "담백한 터키와 바삭한 베이컨 환상조합에 부드러운 아보카도는 신의 한수",
    },
    {
      id: 19,
      calorie: 464,
      eng_name: "Spicy Italian",
      img: "https://www.subway.co.kr//upload/menu/spicy_italian_20211231095435532.png",
      name: "스파이시 이탈리안",
      summary: "살라미, 페퍼로니가 입안 한가득!\r쏘 핫한 이탈리아의 맛",
    },
    {
      id: 20,
      calorie: 314,
      eng_name: "Chicken Teriyaki",
      img: "https://www.subway.co.kr//upload/menu/Chicken-Teriyaki_20211231094803381.png",
      name: "치킨 데리야끼",
      summary:
        "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 <br>환상적인 만남",
    },
  ]);
};

export default sandwich;
