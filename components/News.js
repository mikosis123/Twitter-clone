export default function News({ article }) {
  return (
    <div>
      <a href={article.url} target="_blank">
        <div>
          <div>
            <h6>{article.title}</h6>
            <p>{article.source.name}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
