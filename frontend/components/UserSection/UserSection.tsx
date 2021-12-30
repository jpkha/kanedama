import {AcronymBullet} from '@/components/UserSection/AcronymBullet';
import {UserTitle} from '@/components/UserSection/UserTitle';
import {User} from '../../models/user';
import {UserContainer} from '@/components/UserSection/UserContainer';
import {RandomUserResponse} from '../../models/api/randomUserResponse';
import {ParseUser} from '../../utils/parseUser';
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

export const UserSection = ({dataUser}: { dataUser: RandomUserResponse }) => {

  const user: User = dataUser.info?.results > 0 ?
    ParseUser.parseRandomUserToUser(dataUser.results[0])
    :
    initUser;

  return (<Section>
    <UserContainer>
      <AcronymBullet first={user.first} last={user.last}/>
      <UserTitle>{user.first} {user.last}</UserTitle>
    </UserContainer>
  </Section>)
}
