import { authService, dbService, storageService } from "fbase";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [profilePic, setProfilePic] = useState("");
  const [picture, setPicture] = useState(null);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
    refreshUser();
  };
  const getMyNweets = async () => {
    await dbService
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
    let profilePicUrl = "";
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
    }
    refreshUser();

    if (profilePic !== "") {
      //사진 storage로 업로드, 경로는 profile/userUid 로 업로드! 덮어쓰기 가능
      const profilePicREf = storageService
        .ref()
        .child(`profilePic/${userObj.uid}`);
      const respons = await profilePicREf.putString(profilePic, "data_url");
      profilePicUrl = await respons.ref.getDownloadURL();

      const profileObj = {
        createdAt: Date.now(),
        creatorId: userObj.uid,
        profilePicUrl,
      };

      // 저장한 뒤엔 원래 있던 사진을 삭제해야함.

      try {
        await dbService
          .collection("profilePic")
          .doc(`IRQoXujxtcv93a8yILOQ`)
          .delete(); // 기존에 있던 프로필 사진 삭제
        //console.log();
        await dbService
          .collection("profilePic")
          .doc(`${userObj.uid}`)
          .set(profileObj); //db collection 없으면 생성
        setProfilePic("");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const watchProfilePic = async () => {
    const changePicture = dbService
      .collection("profilePic")
      .doc(`${userObj.uid}`);

    const doc = await changePicture.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
    }
    setPicture(doc.data().profilePicUrl);
  };
  useEffect(() => {
    //변화가 감지될 때 마다 실행
    getMyNweets();
    watchProfilePic();
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
      setProfilePic(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setProfilePic("");
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <div className="profile_Img">
          <img src={`${picture}`}></img>
        </div>
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
          //onClick={onClearAttachment}
          // submit 하면 프로파일의 사진 미리보기 삭제
        />
        <div className="profile-pic-upload">
          <label htmlFor="profile-pic" className="profilePic_input">
            <span>Add photos</span>
            <FontAwesomeIcon icon={faPlus} />
          </label>
        </div>
        <input
          id="profile-pic"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{
            opacity: 0,
            height: 0,
          }}
        />
        {/** preview */}
        {profilePic && (
          <div className="factoryForm__profilePic">
            <img
              src={`${profilePic}`}
              style={{
                backgroundImage: profilePic,
              }}
            />
            <div className="factoryForm__clear" onClick={onClearAttachment}>
              <span>Remove</span>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        )}
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};

////////////////////////////////////////////////////
//collection 자체를 삭제하는 코드 -> collection 내부 요소를 모두 삭제한 뒤 진행한다.
/*async function deleteCollection(db, collectionPath, batchSize) {
    const collectionRef = db.collection(collectionPath);
    const query = collectionRef.orderBy('__name__').limit(batchSize);
  
    return new Promise((resolve, reject) => {
      deleteQueryBatch(db, query, resolve).catch(reject);
    });
  }
  
  async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();
  
    const batchSize = snapshot.size;
    if (batchSize === 0) {
      // When there are no documents left, we are done
      resolve();
      return;
    }
  
    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
  
    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(db, query, resolve);
    });
  }*/
////////////////////////////////////////////////////
