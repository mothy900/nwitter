import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [profilePic, serProfilePic] = useState("");
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid) //user를 필터링 하는 방법 creatorID 와 userObj.uid가 일치하는지 검증
      .orderBy("createdAt")
      .get();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
    }
    refreshUser();
  };
  useEffect(() => {
    getMyNweets();
  });

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
    };
    reader.readAsDataURL(theFile);
  };
  const onSubmitPic = (event) => {};
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Setting Profile" onSubmit={onSubmitPic} />
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};
