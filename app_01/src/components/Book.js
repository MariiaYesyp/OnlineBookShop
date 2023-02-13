export default function Book() {
  // ========== Початок зони редагування ==============
return (
  <div className="book">
    <img
      className="book__cover"
      alt={arguments[0].data.title}
      src={arguments[0].data.coverUrl}
    />
    <div className="book__summary">
      <span className="book__title">{arguments[0].data.title}</span>
      <span className="book__year">{arguments[0].data.year}</span>
      <span className="book__author">{arguments[0].data.author}</span>
    </div>
    <div className="book__actions">
      <button>Купити</button>
      <button>До списку бажань</button>
    </div>
  </div>
);

  // ========== Кінець зони редагування ===============
}
