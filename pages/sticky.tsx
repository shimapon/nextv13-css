import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sticky: React.FC = () => {
  return (
    <div>
      <Link href={"/"}>
        <div className="rounded p-4 bg-gray-700 text-gray-300 block">
          Topへ戻る
        </div>
      </Link>

      <Image
        className="bg-black object-contain relative w-full"
        src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0825224a649c4490aea8a0c4dbe577cc"
        alt={""}
        width={1080}
        height={618}
      />
      <div style={{ height: "200vh" }}>
        <Image
          className="sticky top-0 object-contain w-full"
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ff9ca7731e2a140dda63aaa8177a392ab"
          alt={""}
          width={1746}
          height={1500}
        />
      </div>
      <Image
        className="bg-black object-contain relative w-full"
        style={{ marginTop: "-100vh" }}
        src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8cdc4e6e12914874a5fdcec9a06f9cba"
        alt={""}
        width={1080}
        height={618}
      />
      <Image
        className="bg-black object-contain relative w-full"
        src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F64e0d5ce361240b2a4c951b5e876692e"
        alt={""}
        width={1080}
        height={618}
      />
    </div>
  );
};

export default Sticky;
