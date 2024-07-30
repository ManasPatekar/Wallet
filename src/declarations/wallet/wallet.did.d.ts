import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'wallet_api_version' : () => Promise<string>,
  'withdrawl' : (arg_0: number) => Promise<undefined>,
}
