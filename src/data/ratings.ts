export interface GamePurchaseData {
  gameId: number;
  purchaseDate: string;
  price: number;
}

export const mockPurchaseData: GamePurchaseData[] = [
  { gameId: 1, purchaseDate: "2020-02-15", price: 34.99 },
  { gameId: 2, purchaseDate: "2020-05-20", price: 49.99 },
  { gameId: 3, purchaseDate: "2021-06-18", price: 14.99 },
  { gameId: 4, purchaseDate: "2022-03-25", price: 59.99 },
  { gameId: 5, purchaseDate: "2022-11-12", price: 39.99 },
  { gameId: 6, purchaseDate: "2020-08-10", price: 29.99 },
  { gameId: 7, purchaseDate: "2020-09-10", price: 19.99 },
  { gameId: 8, purchaseDate: "2021-10-04", price: 24.99 },
  { gameId: 9, purchaseDate: "2021-03-12", price: 9.99 },
  { gameId: 10, purchaseDate: "2023-10-27", price: 59.99 },
];
