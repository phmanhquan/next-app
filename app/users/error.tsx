"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const UserErrorPage = ({ error, reset }: Props) => {
  console.log("Error: ", error);
  return (
    <>
      <div>UserErrorPage</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default UserErrorPage;
