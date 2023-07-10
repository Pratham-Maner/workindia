import React, { useEffect } from "react";
import "./Home.scss";
import { getCandidates } from "../../apis/candidates";
import CandidateCard from "../../components/Cards/CandidateCard/CandidateCard";

const Home = () => {
  const [candidates, setCandidates] = React.useState({
    accepted: [],
    rejected: [],
    applied: [],
  });

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    const response = await getCandidates();
    const resCandidates = response.data.data;
    if (response.status === 200) {
      const applied = resCandidates.filter(
        (candidate) => candidate.status.toLowerCase() === "applied"
      );
      const accepted = resCandidates.filter(
        (candidate) => candidate.status.toLowerCase() === "accepted"
      );
      const rejected = resCandidates.filter(
        (candidate) => candidate.status.toLowerCase() === "rejected"
      );

      setCandidates({
        applied,
        accepted,
        rejected,
      });
    }
  };

  console.log(candidates);
  return (
    <div className="Home_container container">
      <div className="content_container">
        {Object.keys(candidates).map((key) => {
          return (
            <div className="content_item">
              <div className="header_title">{key}</div>
              <div className="card_container">
                {candidates[key].map((candidate) => {
                  return (
                    <React.Fragment key={candidate.id}>
                      <CandidateCard
                        name={candidate.name}
                        gender={candidate.gender}
                        time={candidate.last_updated_at}
                        location={candidate.location}
                        
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
