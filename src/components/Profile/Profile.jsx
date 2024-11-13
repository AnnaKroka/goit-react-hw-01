import s from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={s.profile}>
  <div className={s.user}>
    <img 
      className={s.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.tag}>{location}</p>
  </div>

  <ul className={s.list}>
    <li className={s.stat}>
      <span>Followers</span>
      <span className={s.value}>{stats.followers}</span>
    </li>
    <li className={s.stat}>
      <span>Views</span>
      <span className={s.value}>{stats.views}</span>
    </li>
    <li className={s.stat}>
      <span>Likes</span>
      <span className={s.value}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
};

export default Profile;