const Statistics = ({ icon, bigText, content, grayText }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <h1 className="text-5xl font-semibold mt-2">{bigText}</h1>
      <div className="h-4" />
      <strong>{content}</strong>
      <p className="text-gray-500">{grayText}</p>
    </div>
  );
};

export default Statistics;
