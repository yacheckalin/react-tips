import React, { useEffect, useState } from "react";
import ResumeListContext from "./ResumeListContext";
import ResumeList from "./ResumeList";
import axios from "axios";

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const ResumeListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(
        data.map((item) => {
          return { ...item, priority: getRandomInt(3), editable: false };
        })
      );
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    try {
      const remove = async () => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      };
      remove();

      setData(data.filter((item) => item.id != id));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleEdit = ({ id, ...rest }) => {
    try {
      const result = async () => {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          ...rest,
        });
      };
      result();

      setData(
        data.map((item) => {
          if (item.id === id) {
            for (let prop in rest) {
              item[prop] = rest[prop];
            }
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
      <ResumeList onDelete={handleDelete} onEdit={handleEdit} />
    </ResumeListContext.Provider>
  );
};

export default ResumeListContainer;
