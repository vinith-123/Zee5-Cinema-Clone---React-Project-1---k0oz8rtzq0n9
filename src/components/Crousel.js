import "../style/crousel.css";
const Crousel = () => {
  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="item w-100 active">
          <img
            src="https://www.w3schools.com/bootstrap/chicago.jpg"
            alt="Los Angeles"
          />
          <img
            src="https://www.w3schools.com/bootstrap/chicago.jpg"
            alt="Los Angeles"
          />
          <img
            src="https://www.w3schools.com/bootstrap/chicago.jpg"
            alt="Los Angeles"
          />
          <img
            src="https://www.w3schools.com/bootstrap/chicago.jpg"
            alt="Los Angeles"
          />
          <img
            src="https://www.w3schools.com/bootstrap/chicago.jpg"
            alt="Los Angeles"
          />
          <img
            src="https://www.w3schools.com/bootstrap/chicago.jpg"
            alt="Los Angeles"
          />
        </div>

        <div class="item w-100">
          <img
            src="https://www.w3schools.com/bootstrap/ny.jpg"
            alt="Chicago"
            className="w-100"
          />
        </div>

        <div class="item w-100">
          <img
            src="https://www.w3schools.com/bootstrap/la.jpg"
            alt="New York"
          />
        </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};
export default Crousel;
