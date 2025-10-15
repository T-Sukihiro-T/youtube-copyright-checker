export default function ResultCard({ data }) {
  if (data.error) return <p className="text-red-600">{data.error}</p>;
  const { title, channel, license, score, risk, thumbnail, id } = data;

  const color =
    score < 30 ? "text-green-600" : score < 60 ? "text-yellow-500" : "text-red-600";

  return (
    <div className="mt-6 border rounded-lg shadow-md bg-white p-4">
      <img src={thumbnail} alt={title} className="rounded mb-4 w-full" />
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 mb-2">Channel: {channel}</p>
      <p className="text-gray-500">License: {license}</p>
      <p className={`mt-2 font-semibold ${color}`}>
        Risk Score: {score} ({risk})
      </p>
      <div className="mt-4 rounded overflow-hidden">
        <iframe
          width="100%"
          height="240"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

