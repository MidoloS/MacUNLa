import { useRouter } from "next/router";

const BackArrow = () => {
  const router = useRouter();

  const handleIndex = () => {
    router.push("/");
  };
  return (
    <svg
      onClick={handleIndex}
      className="h-9 w-9 cursor-pointer"
      stroke="rgba(0, 0, 0, 0.6)"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export default BackArrow;
