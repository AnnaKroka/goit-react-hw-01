import FriendListItem from "../FriendListItem/FriendListItem"
import s from "./FriendList.module.css"

const FriendList = ({friends}) => {
  return (
    <div className={s.container}>
    <ul className={s.list}>
        {friends.map((friends) => (
            <li className={s.listFriends} key={friends.id}>
            <FriendListItem friends={friends} />
            </li>
        ))}
	
    </ul>
    </div>
  );
};

export default FriendList;