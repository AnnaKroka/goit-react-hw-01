import FriendListItem from "./FriendListItem"

const FriendList = ({friends}) => {
  return (
    <div>
        <ul>
	<li>
		<FriendListItem />
	</li>
    <li>
		<FriendListItem />
	</li>
    <li>
		<FriendListItem />
	</li>
    <li>
		<FriendListItem />
	</li>
    <li>
		<FriendListItem />
	</li>
</ul>
    </div>
  )
}

export default FriendList