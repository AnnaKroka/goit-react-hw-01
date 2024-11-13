import s from "./FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className="profile">
  <img src="" alt={avatar} width="48" />
  <p>{name}</p>
  <p>{isOnline}</p>
    </div>
  )
};

export default FriendListItem