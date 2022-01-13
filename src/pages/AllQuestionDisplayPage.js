import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import SetCard from "../components/SetCard";
import "./sass/AllQuestionDisplayPage.scss";
import requests from "../util/request";
function AllQuestionDisplayPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const headers = {
      withCredentials: true,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2VjYmQ3Y2RlNTY0ZjcyZGZhMjlhYSIsImlhdCI6MTY0MTExODcyMywiZXhwIjoxNjQ4ODk0NzIzfQ.IpJuxN1xBxWivAOxxa4wdnQgB_QIUgGJrUblgAliqdI",
    };
    axios.get(requests.allSets, { headers }).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);
  return (
    <div className="allQuestionDisplayPage">
      <Nav practicePage />
      <div className="section">
        {data.length === 0 ? (
          <>
            <SetCard skeleton />
            <SetCard skeleton />
            <SetCard skeleton />
            <SetCard skeleton />

            <SetCard skeleton />
            <SetCard skeleton />
            <SetCard skeleton />
            <SetCard skeleton />
          </>
        ) : (
          data?.map((el) => {
            return (
              <SetCard
                key={el._id}
                img={`/img/${el.SetBackgroundImg}`}
                title={el.SetTitle}
                link={`/question/${el.SetYear}`}
                description={el.SetDescription}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default AllQuestionDisplayPage;
