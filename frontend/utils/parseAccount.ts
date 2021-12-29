import {AccountCompany} from '../models/accountCompany';
import {AccountResponse} from '../models/api/accountReponse';

export class ParseAccount {

  static parseAccountResponseToAccountCompany = ({
                                                   account_number,
                                                   current,
                                                   currency
                                                 }: AccountResponse): AccountCompany => {
    return {
      accountNumber: account_number,
      balance: current,
      currency
    }
  }
}
