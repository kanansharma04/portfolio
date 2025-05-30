interface TextHighlighterProps {
  text: string;
  searchQuery: string;
}

const TextHighlighter = ({ text, searchQuery }: TextHighlighterProps) => {
  if (!searchQuery) return <>{text}</>;

  const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <mark key={i} className="highlighted-text">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

export default TextHighlighter;
