export type UserSetting = {
  id: string;
  userId: string;
  key: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
};

export const normalizeSettingKey = (key: string): string => key.trim().toLowerCase();
