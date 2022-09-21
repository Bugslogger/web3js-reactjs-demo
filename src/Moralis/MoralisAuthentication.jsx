import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Card from "../Component/Card";

const MoralisAuthentication = () => {
  const [loginStatus, setloginStatus] = useState("");
  const [authUserdata, setauthUserdata] = useState({});
  const { authenticate, isAuthenticated, logout } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      setloginStatus("user is logged in using moralis..");
    }
    return () => {
      setloginStatus("");
    };
  }, [isAuthenticated]);

  const LoginWithMoralis = async () => {
    let auth = await authenticate({
      signingMessage: "Logging in using moralis",
    });
    console.log(auth);
    // setauthUserdata(auth);
    setauthUserdata({
      id: auth.id,
      className: auth.className,
      _objCount: auth._objCount,
      USER: auth.attributes.accounts,
      Moralis_Eth_id: auth.attributes.authData.moralisEth.id,
      Moralis_Eth_data: auth.attributes.authData.moralisEth.data,
      Moralis_Eth_signature: auth.attributes.authData.moralisEth.signature,
      ethAddress: auth.attributes.ethAddress,
      sessionToken: auth.attributes.sessionToken,
      username: auth.attributes.username,
      readPerms: auth.attributes.ACL.permissionsById[auth.id].read
        ? "true"
        : "false",
      writePerms: auth.attributes.ACL.permissionsById[auth.id].write
        ? "true"
        : "false",
      createdAt: Formatedate(auth.createdAt),
      updatedAt: Formatedate(auth.updatedAt),
    });
  };

  const LogOut = async () => {
    await logout();
    setloginStatus("you have been logged out from moralis..");
    setauthUserdata();
  };

  const Formatedate = (dateString) => {
    let x = new Date(dateString);

    let y = `${x.getDate()}-${x.getMonth()}-${x.getFullYear()} ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`;

    return y;
  };

  return (
    <div className="my-2">
      <h4 className="">Moralis Authentication</h4>
      <div className="my-3">
        <button onClick={LoginWithMoralis} className="btn btn-outline-success">
          Moralis Login
        </button>
        <button onClick={LogOut} className="btn btn-outline-warning mx-3">
          Moralis Logout
        </button>
        <div className="my-2 status border p-2 rounded">
          <code className="d-flex">
            {" "}
            Status:{" "}
            <p className="ms-1">
              {loginStatus
                ? loginStatus
                : "you will see your acttivity status here..."}
            </p>
          </code>
        </div>
        <div className="my-3">
          <Card object={authUserdata} cn={""} />
        </div>
      </div>
    </div>
  );
};

export default MoralisAuthentication;

// {
// className
// :
// "_User",
// id
// :
// "Um8Hz2ZXPDL1rnbDNvQO66qI",
// _objCount
// :
// 1,
// ACL
// :
// ParseACL,
// permissionsById
// :
// Um8Hz2ZXPDL1rnbDNvQO66qI,
// :
// {read: true, write: true},
// accounts
// :
// ['0xc604bc2bf73691253172550c7568ec5ed1f037e7'],
// authData
// :
// moralisEth
// :
// {id: '0xc604bc2bf73691253172550c7568ec5ed1f037e7', signature: '0x54fffcbc885c0b3330d4fbc06adcc45867a189f72818b17e…f09a548380286598c61dcdaca00923f555e163bd91c8fb11c', data: 'Logging in using moralis\n\nId: 5IzU3yTJiIEBiBMzZuMyigczSsvmCvEQ4hZcay4Z:1663741411593'}
// createdAt
// :
// Wed Sep 21 2022 11:45:00 GMT+0530 (India Standard Time) {}
// ethAddress
// :
// "0xc604bc2bf73691253172550c7568ec5ed1f037e7"
// sessionToken
// :
// "r:533fe7f6b88b502d5231e7c89d3bab31"
// updatedAt
// :
// Wed Sep 21 2022 11:53:36 GMT+0530 (India Standard Time) {}
// username
// :
// "RYyX5wI7mERqeqX1ZnjH7APuX"
// createdAt
// :
// Wed Sep 21 2022 11:45:00 GMT+0530 (India Standard Time)
// updatedAt
// :
// Wed Sep 21 2022 11:53:36 GMT+0530 (India Standard Time)}
