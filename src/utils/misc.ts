import dayjs from '@/utils/dayjs';

export function addOpacity(color: string, opacity: number) {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};

export const formatTime = (date: string) => (
  dayjs(date).format('DD/MM/YYYY')
);

export const relativeTime = (date: string) => (
  dayjs(date).fromNow()
);