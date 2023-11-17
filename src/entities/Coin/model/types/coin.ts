enum Network {
  'ERC20' = 1,
  'BEP20' = 2,
  'TRC20' = 3,
}

enum Status {
  'Доступна' = 1,
  'В обработке' = 2,
  'Недоступна' = 3,
}

export interface ICoin {
  id: number;
  title: string;
  network: Network;
  status: Status;
}
