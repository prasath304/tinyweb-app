export interface UrlModel {
  id: number;
  originalUrl: string;
  shortCode: string;
  createdAt: string;   // ISO date string
  clickCount: number;
  isPrivate: boolean;
}
