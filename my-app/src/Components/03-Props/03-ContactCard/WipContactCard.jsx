const WipContactCard = ({name,phone,email,imgUrl,altTag}) => {
  return (
    <div className="contact-card">
      <img src={imgUrl} alt={altTag} />
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default WipContactCard;
