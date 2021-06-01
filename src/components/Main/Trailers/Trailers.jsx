import React, {useEffect} from 'react';
import {apiConfig} from "../../../config";
import TrailersItem from "../Trailers/Trilers-Item/Trailers-Item";
import {ApiService} from "../../../api/apiService";

const Trailers = ({setActiveModal, activeModal, getTrailerVideo}) => {
  const getData = new ApiService();
  /////Sets the background to the trailers block
  const [trailerBlockBackground, setTrailerBlockBackground] = React.useState([]);
  const mouseSpyHandler = (evt) => {
    setTrailerBlockBackground(evt.target.src);
  }

  //////Sets the preview to the trailers block
  const [trailersData, setTrailersData] = React.useState([]);
  useEffect(() => {
    getData.getTrailers().then(response => setTrailersData(response.results));
  }, []);
  const img = trailersData[0] && trailersData[0].backdrop_path
  console.log(apiConfig.image.w1280ImgURL + img)



  return (
    <>
      <div className="cover" style={{backgroundImage: `url(${!trailerBlockBackground && trailerBlockBackground
          ? apiConfig.image.w1280ImgURL + img
          : trailerBlockBackground })`, backgroundSize: 'cover'}}>
        <div className="background" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}}>
          <h1 className="showcase-heading">Трейлеры</h1>
          <ul className="showcase-box-wrapper">
            {trailersData.map(trailer => <TrailersItem key={trailer.id} {...trailer}
                                                       mouseSpyHandler={mouseSpyHandler}
                                                       setActiveM={setActiveModal}
                                                       activeM={activeModal}
                                                       getTrailerVideo={getTrailerVideo}

            />)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Trailers;