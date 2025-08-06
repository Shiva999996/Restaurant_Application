import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            our team of chefs is more than just a group of cooks — they are culinary artists with a passion for flavors and a devotion to every dish they prepare.
            With years of experience in Indian regional cuisines, street food, and tandoori grilling, our chefs bring a perfect blend of tradition, innovation, and soul to every plate.
            They believe cooking is not just about ingredients — it’s about emotions. That’s why every dish served at Shiva’s Kitchen is made with care, creativity, and consistency, just like you’d expect at home.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
