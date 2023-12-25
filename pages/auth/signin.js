import React from "react";
import { getProviders } from "next-auth/react";

function Signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftechcrunch.com%2F2022%2F08%2F01%2Fuse-twitters-ios-app-without-signing-up-for-an-account-in-twitters-latest-test%2F&psig=AOvVaw2fUmhR1NsplgTJKha11kgF&ust=1703585428429000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCTovusqoMDFQAAAAAdAAAAABAD"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
      />
      <h1>heloo sign in </h1>
      <div className="">
        {Object.values(providers).map((provider) => {
          <div key={provider.username} className="flex flex-col items-center">
            <img
              className="w-36 object-cover"
              src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
              alt="twitter logo"
            />
            <p className="text-center text-sm italic my-10">
              This app is created for learning purposes
            </p>
            <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
              Sign in with Google{console.log(provider)}
            </button>
          </div>;
        })}
      </div>
    </div>
  );
}
export default Signin;
export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
