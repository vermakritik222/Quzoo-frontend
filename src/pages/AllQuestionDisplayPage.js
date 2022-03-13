import React, { useEffect, useState } from "react";
import axios from "../http/axios";
import Nav from "../components/Nav";
import SetCard from "../components/SetCard";
import requests from "../util/request";
import "./sass/AllQuestionDisplayPage.scss";

function AllQuestionDisplayPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const headers = {
    //   withCredentials: true,
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2VjYmQ3Y2RlNTY0ZjcyZGZhMjlhYSIsImlhdCI6MTY0MTExODcyMywiZXhwIjoxNjQ4ODk0NzIzfQ.IpJuxN1xBxWivAOxxa4wdnQgB_QIUgGJrUblgAliqdI",
    // };
    axios.get(requests.allSets).then((res) => {
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
