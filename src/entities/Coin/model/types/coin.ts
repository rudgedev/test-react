export const Network = {
  1: 'ERC20',
  2: 'BEP20',
  3: 'TRC20',
} as const;

export const Status = {
  1: 'Доступна',
  2: 'В обработке',
  3: 'Недоступна',
} as const;

export interface ICoin {
  id: number;
  title: string;
  network: keyof typeof Network;
  status: keyof typeof Status;
}
