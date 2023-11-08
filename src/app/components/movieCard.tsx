interface movieCardProps {
  title: string;
  overview: string;
  posterPath: string;
}

const movieCard = ({ title, overview, posterPath }: movieCardProps) => {
  const imageUrl = posterPath
    ? "https://image.tmdb.org/t/p/w500 ${posterPath}"
    : "/no-image-availaable.png";

  return <div className="bg-white rounded shadow p-4">
    <img className="w-full h-64 rounded  mb-4 "  src={imageUrl} alt=""/>
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-sm  text-gray-500">{overview.substring(0,150)}</p>
};

export default movieCard;
