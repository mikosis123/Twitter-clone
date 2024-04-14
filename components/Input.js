import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import picture from "../public/isk.jpg";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef } from "react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function Input() {
  const { data: session } = useSession();
  const [Input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const addref = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      name: session.user.name,
      username: session.user.name,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
      text: Input,
    });
    const imageref = ref(storage, `posts/${addref.id}/image`);
    if (selectedFile) {
      await uploadString(imageref, selectedFile, "data_url").then(async () => {
        const downloadurl = await getDownloadURL(imageref);
        await updateDoc(doc(db, "posts", addref.id), {
          image: downloadurl,
        });
      });
    }

    setInput("");
    setSelectedFile(null);
    setLoading(false);
  };
  const filepickerRef = useRef(null);

  const addimagetopost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 space-x-">
          <Image
            className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95"
            height={50}
            onClick={signOut}
            src={session?.user.image}
            width={50}
          ></Image>

          <div className="w-full divide-y divide-gray-200">
            <div>
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gay-700 tracking-wide min-h-[50px] text-gray-700"
                rows={2}
                value={Input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's hapening"
              ></textarea>
            </div>
            {selectedFile && (
              <div className="relative">
                <XIcon
                  onClick={() => setSelectedFile(null)}
                  className="border h-7 text-black absolute cursor-pointer shadow-md border-white m-1 rounded-full"
                />
                <img
                  src={selectedFile}
                  className={`${loading && "animate-pulse"}`}
                  alt="image "
                />
              </div>
            )}

            <div className=" flex item-center justify-between p-2.5">
              {!loading && (
                <>
                  <div className="flex">
                    <div onClick={() => filepickerRef.current.click()}>
                      <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
                      <input
                        type="file"
                        hidden
                        ref={filepickerRef}
                        onChange={addimagetopost}
                      />
                    </div>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
                  </div>
                  <button
                    onClick={sendPost}
                    disabled={!Input.trim()}
                    className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-medium hover:brightness-95 "
                  >
                    Tweet
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
