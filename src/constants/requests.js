export default {
  HEARTBEAT: '1',
  LOGIN: 'BE',
  LOGOUT: 'BE',
  CHANGE_PASSWORD: 'BE',

  MARKET_DATA_FULL_REFRESH: 'V',
  MARKET_DATA_UNSUBSCRIBE: 'V',

  ORDER_SEND: 'D',
  ORDER_CANCEL: 'F',

  SECURITY_LIST: 'x',
  SECURITY_STATUS: 'e',
  BALANCE: 'U2',
  ORDER_LIST: 'U4',
  BROKER_LIST: 'U28',
  TRADE_HISTORY: 'U32',
  PROFILE_UPDATE: 'U38',

  REQUEST_DEPOSIT: 'U18',
  REQUEST_DEPOSIT_LIST: 'U30',
  REQUEST_DEPOSIT_METHODS: 'U20',
  REQUEST_WITHDRAW: 'U6',
  REQUEST_WITHDRAW_LIST: 'U26',

  REQUEST_LEDGER: 'U34',

  CONFIRM_WITHDRAW: 'U24',
  CANCEL_WITHDRAW: 'U70',
};
