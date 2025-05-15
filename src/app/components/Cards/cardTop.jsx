import './cardTop.css';

export default function CardTop() {
  return (
    <section>
      <div className="container">
        <div data-text="Github" style={{ "--r": "-15" }} className="glass">
          <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.9 397.4c0 2..." />
          </svg>
        </div>

        <div data-text="Code" style={{ "--r": "5" }} className="glass">
          <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M392.8 1.2c-17-4.9..." />
          </svg>
        </div>

        <div data-text="Earn" style={{ "--r": "25" }} className="glass">
          <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 64C28.7 64..." />
          </svg>
        </div>
      </div>
    </section>
  );
}
