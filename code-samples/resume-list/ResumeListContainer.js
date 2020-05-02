import React, { useEffect, useState } from "react";
import ResumeListContext from "./ResumeListContext";
import ResumeList from "./ResumeList";
import axios from "axios";

const ResumeListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(data);
    };

    fetchData();
  }, []);

  const handleCompleted = ({ id, value }) => {
    console.log(id, value);
    try {
      const result = async () => {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          completed: value,
        });
      };
      result();

      setData(
        data.map((item) => {
          if (item.id === id) {
            item.completed = value;
          }
          return item;
        })
      );
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <ResumeListContext.Provider value={{ data }}>
      <ResumeList onCompleted={handleCompleted} />
    </ResumeListContext.Provider>
  );
};

export default ResumeListContainer;
