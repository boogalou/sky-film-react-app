import React, { useEffect, useState } from 'react'
import TVshowItem from './TVshow-Item'
import { ApiService } from '../../api/apiService'
import './TVshow-List.css'

const TVshowList = () => {

  const shows = new ApiService()
  const [tvshows, setTvshows] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    shows.getTvshows().then(data => setTvshows(data))
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="tvshow-heading">
        <h2>Сериалы</h2>
      </div>
      <section id="tvshow-list">
        {isLoading ? 'loading...' :
          tvshows.map(show => <TVshowItem key={show.id} {...show} />)
        }
      </section>
    </>
  )
}

export default TVshowList