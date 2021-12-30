import {RANDOM_USER_URL_API} from './constants';
import {RandomUserResponse} from '../../models/api/randomUserResponse';

export const getRandomUser = async ():Promise<RandomUserResponse> => await fetch(RANDOM_USER_URL_API + '/?nat=fr')
  .then(
    (res) => res.json(),
  ).catch(() => ({
      notFound: true,
    })
  );
