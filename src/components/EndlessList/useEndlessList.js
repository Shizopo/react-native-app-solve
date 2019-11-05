// @flow

import { useState, useEffect, useCallback } from "react";

export const useEndlessList = () => {
  const [users, setUsers] = useState([]);

  const fetchData = useCallback((num: number) => {
    fetch(`https://randomuser.me/api/?results=${num}&inc=name,picture`)
      .then(resp => resp.json())
      .then((resp: { results: [] }) => {
        let data = [];
        resp.results.forEach(
          (
            el: {
              key: number,
              name: { first: string, last: string },
              picture: { medium: string },
            },
            index: number
          ) => {
            data.push({
              key: index,
              first: el.name.first,
              last: el.name.last,
              photo: el.picture.medium,
            });
          }
        );
        setUsers(data.slice());
      })
      .catch((err: string) => console.log(err));
  }, []);

  useEffect(() => {
    fetchData(10);
  }, []);

  return users;
};
