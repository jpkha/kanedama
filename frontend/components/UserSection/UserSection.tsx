import {AcronymBullet} from '@/components/UserSection/AcronymBullet';
import {UserTitle} from '@/components/UserSection/UserTitle';
import {useEffect, useState} from 'react';
import {User} from '../../models/user';
import {UserContainer} from '@/components/UserSection/UserContainer';
import {RandomUserService} from '../../services/randomUserService';
import {RandomUserResponse} from '../../models/api/randomUserResponse';
import {ParseUser} from '../../utils/parseUser';
import {AxiosResponse} from 'axios';
import {Section} from '@/components/common/Section';

const initUser: User = {
  gender: '',
  location: {
    street: '',
    city: '',
    state: '',
    country: '',
    postCode: 0,
  },
  email: '',
  phone: '',
  cell: '',
  title: '',
  first: '',
  last: ''
};

export const UserSection = () => {

  const [user, setUser] = useState<User>(initUser);
  const randomUserService = new RandomUserService();

  const getUser = () => {
    randomUserService.getRandomUser()
      .then(({data}: AxiosResponse<RandomUserResponse>) => {
        if (data.info.results > 0) {
          setUser(ParseUser.parseRandomUserToUser(data.results[0]))
        }
      })
  }

  useEffect(() => {
    getUser();
  }, []);

  return (<Section>
    <UserContainer>
      <AcronymBullet first={user.first} last={user.last}/>
      <UserTitle>{user.first} {user.last}</UserTitle>
    </UserContainer>
  </Section>)
}
