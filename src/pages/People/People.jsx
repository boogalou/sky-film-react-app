import React, { useEffect, useState } from 'react'
import './People.css'
import { ApiService } from '../../api/apiService'
import PeopleItem from './People-Item'

const People = () => {

  const people = new ApiService();

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    people.getActors()
      .then(data => setPeoples(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="people-heading">
        <h2>Актеры</h2>
      </div>
      <section id="people-list">

        {peoples.map(people => <PeopleItem key={people.id} {...people} /> ) }

      </section>
    </>
  )
}

export default People;