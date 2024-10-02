export interface User {
  dateCreated: string;
  role: 'buyer' | 'seller' | 'lawyer';
}

export interface MonthlyUserCount {
  month: string;
  buyers: number;
  sellers: number;
}



