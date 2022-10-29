import React, { useState, useEffect } from 'react';

export default function Competitions() {
  // указываем переменную в которую будет записываться состояние 
  // указываем метод с помощью которого будем обновлять состояние
  const [competitions, setCompetitions] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
    fetch('http://api.football-data.org/v2/competitions/', {
      headers: {
        'X-Auth-Token': '41a08e4eeaf8433abcc9bac537ac1fe0',
      },
      mode: 'cors',
    })
      .then(resp => resp.json())
      .then(({ competitions, count  }) => {
        setCompetitions(competitions);
        setCount(count);
      });
  }, []);

  return 'competitions';
}