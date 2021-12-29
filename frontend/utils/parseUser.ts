import {RandomUserResult, Street} from '../models/randomUserResponse';
import {User} from '../models/user';

export class ParseUser {

  static parseRandomUserToUser = ({cell, email, location, name, phone, gender }: RandomUserResult): User => {
    return {
      cell,
      email,
      gender,
      phone,
      location : {
        city: location.city,
        country: location.country,
        postCode: location.postcode,
        state: location.state,
        street: ParseUser.parseStreetToString(location.street)
      },
      first : name.first,
      last : name.last,
      title: name.title,
    }
  }

  private static parseStreetToString = (street: Street): string => {
    return `${street.number.toString()} ${street.name}`
  }
}
