import Nweet from "components/Nweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
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
  const onSubmit = async (event) => {
    event.preventDefault();

    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    console.log(theFile);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="what's on your mind?"
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nwit"></input>
        {/** preview */}
      </form>
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
