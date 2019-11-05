import { useState, useEffect, useCallback } from "react";

export const useUsersList = () => {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isSomethingSelected, setIsSomethingSelected] = useState(false);

  const fetchData = useCallback(num => {
    fetch(`https://randomuser.me/api/?results=${num}&inc=name`)
      .then(resp => resp.json())
      .then(resp => {
        let currentData = [];
        resp.results.forEach((el, index) => {
          currentData.push({
            key: index,
            first: el.name.first,
            isChecked: false,
          });
        });
        setUsers(currentData.slice());
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetchData(10);
  }, [fetchData]);

  const handleInput = useCallback(value => {
    setUserInput(value);
  }, []);

  const onAdd = useCallback(() => {
    let currentData = [...users];
    let text = userInput;
    let key =
      currentData.length > 0 ? currentData[currentData.length - 1].key + 1 : 0;
    setUsers(prevState => [
      ...prevState,
      { first: text, key: key, isChecked: false },
    ]);
    setUserInput("");
  }, [userInput, users]);

  const onDelete = useCallback(() => {
    let currentData = [...users];
    let selectedItems = currentData.filter(el => el.isChecked !== true);

    setUsers(selectedItems);
    setIsSomethingSelected(false);
  }, [users]);

  const handleCheckbox = useCallback(
    (val, key) => {
      let currentData = [...users];
      let selectedItemIndex = currentData.findIndex(el => el.key === key);
      currentData[selectedItemIndex].isChecked = val;

      setUsers(currentData);
      setIsSomethingSelected(true);
    },
    [users]
  );

  return {
    users,
    userInput,
    isSomethingSelected,
    fetchData,
    handleInput,
    handleCheckbox,
    onAdd,
    onDelete,
  };
};
