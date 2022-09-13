// Card Type
export interface MapType {
  id: number;
  name: string;
  eng_name: string;
  img: string;
  map?: any;
}

// 상세 페이지 Type
export interface ProductType {
  calorie: number;
  img: string;
  name: string;
  eng_name: string;
  summary?: string;
  id?: number;
}

export interface MenuType {
  img: string;
  name: string;
  eng: string;
  summary?: string;
  calorie: number;
}

// 모두 string
export interface StringType {
  [key: string]: string;
}

// Storage Type
export interface ReduxType {
  sandwich: string;
  bread: string;
  cheese: string;
  sauce: string[];
}
