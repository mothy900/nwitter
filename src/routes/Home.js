import Nweet from "components/Nweet";
import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      //snapshot은 db를 바라보면서 변화가 감지되면 실행
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id, // 배열 생긴 모습
        ...doc.data(),
      }));
      setNweets(nweetArray); // array 에 배열을 넣는다
    });
  }, []);

  return (
    <div>
      <NweetFactory userObj={userObj} />
      {console.log(userObj.uid)}
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;

/**const getNweets = async () => {
    const dbnweets = await dbService.collection("nweets").get();
    dbnweets.forEach((document) => {
      const nweetObject = {
        ...document.data(), // ...은 data의 내용물, 단순히 풀어서 보여준다.
        id: document.id,
      };
      setNweets((prev) => [nweetObject, ...prev]);
    });
  }; */
