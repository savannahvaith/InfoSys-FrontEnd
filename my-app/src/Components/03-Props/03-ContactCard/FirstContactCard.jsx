import WipContactCard from "./WipContactCard";

const FirstContactCard = () => {


    

  return (
    <div className="Contact-card-list">
        <WipContactCard
            altTag ="this is a of a dog"
            imgUrl = "https://placedog.net/samples/2.jpg"
            name = "Harry Pawter"
            phone ={+4477777777}
            email ="harry@pawter.pup"
        />
        <WipContactCard
            altTag ="this is a of a dog"
            imgUrl = "https://placedog.net/samples/7.jpg"
            name = "jimmy chew"
            phone ={+4477777777}
            email =" jimmy@chew.pup"
        />
        <WipContactCard
            altTag ="this is a of a dog"
            imgUrl = "https://placedog.net/samples/5.jpg"
            name = "Bark Wahlberg"
            phone ={+4477777777}
            email ="Bark@Wahlberg.pup"
        />
        <WipContactCard
            altTag ="this is a of a dog"
            imgUrl = "https://placedog.net/samples/15.jpg"
            name = "Indiana Bones"
            phone ={+4477777777}
            email ="Indiana@Bones.pup"
        />
    </div> 
  );
};

export default FirstContactCard;
