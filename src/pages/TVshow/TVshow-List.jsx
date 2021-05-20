import React, { useEffect, useState } from 'react'
import TVshowItem from './TVshow-Item'
import { ApiService } from '../../api/apiService'
import './TVshow-List.css'

const TVshowList = () => {
  const shows = new ApiService()

  const [tvshow, setTvshow] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  console.log(tvshow);

  useEffect(() => {
    setIsLoading(true);
    shows.getShows().then(data => setTvshow(data));
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="tvshow-heading">
        <h2>TV Shows</h2>
      </div>
      <section id="tvshow-list">
        { isLoading ? 'loading...' :
          tvshow.map(show => <TVshowItem key={show.id} {...show} />)
        }
      </section>
    </>
  )
}

export default TVshowList