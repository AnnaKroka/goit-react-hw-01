import s from "./FriendListItem.module.css"

const FriendListItem = ({friends}) => {
  const { avatar, name, isOnline } = friends;
  return (
    <div>
  <img className={s.av} src={avatar} alt="avatar" width="48" />
  <p className={s.name}>{name}</p>
  {isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p>}
    </div>
  );
};

export default FriendListItem;