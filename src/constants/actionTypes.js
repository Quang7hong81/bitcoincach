export const BALANCE = 'BALANCE';

export const ORDER_BOOK = 'OB';
export const ORDER_BOOK_TRADE_NEW = 'TRADE_NEW';
export const ORDER_BOOK_NEW_ORDER = 'NEW_ORDER';
export const ORDER_BOOK_UPDATE_ORDER = 'UPDATE_ORDER';
export const ORDER_BOOK_DELETE_ORDER = 'DELETE_ORDER';
export const ORDER_BOOK_DELETE_ORDERS_THRU = 'DELETE_ORDERS_THRU';

export const EXECUTION_REPORT = 'EXECUTION_REPORT';
export const EXECUTION_REPORT_NEW = 'NEW';
export const EXECUTION_REPORT_PARTIAL = 'PARTIAL';
export const EXECUTION_REPORT_EXECUTION = 'EXECUTION';
export const EXECUTION_REPORT_CANCELED = 'CANCELED';
export const EXECUTION_REPORT_REJECTED = 'REJECTED';

export const DEPOSIT_REFRESH = 'DEPOSIT_REFRESH';
export const WITHDRAW_REFRESH = 'WITHDRAW_REFRESH';

/* eslint-disable quote-props */
export const EVENTS = {
  ORDERBOOK: {
    '0': ORDER_BOOK_NEW_ORDER,
    '1': ORDER_BOOK_UPDATE_ORDER,
    '2': ORDER_BOOK_DELETE_ORDER,
    '3': ORDER_BOOK_DELETE_ORDERS_THRU,
  },
  TRADES: {
    '0': ORDER_BOOK_TRADE_NEW,
  },
  EXECUTION_REPORT: {
    '0': EXECUTION_REPORT_NEW,
    '1': EXECUTION_REPORT_PARTIAL,
    '2': EXECUTION_REPORT_EXECUTION,
    '4': EXECUTION_REPORT_CANCELED,
    '8': EXECUTION_REPORT_REJECTED,
  },
};
