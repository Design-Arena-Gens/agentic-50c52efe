import Link from "next/link";

const featureHighlights = [
  {
    title: "Быстрый старт",
    description: "Бросьте взгляд, нажмите кнопку и начните знакомство."
  },
  {
    title: "Дружественный интерфейс",
    description: "Визуально чисто и тепло — как первое приветствие."
  },
  {
    title: "Готово к расширению",
    description: "Добавьте свои секции и превратите приветствие в полноценный сайт."
  }
];

export default function HomePage() {
  return (
    <main>
      <article className="hero">
        <p className="hero__eyebrow">Добро пожаловать</p>
        <h1 className="hero__headline">
          Привет, мир! <span>С теплом из Next.js</span>
        </h1>
        <p className="hero__text">
          Это лёгкое приветствие на русском языке, созданное, чтобы моментально
          подарить ощущение заботы и вдохновения. Страница полностью готова к
          публикации на Vercel и может стать стартовой точкой для вашего нового
          проекта.
        </p>
        <Link className="hero__cta" href="#features">
          Начать знакомство
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <section id="features" className="hero__meta" aria-label="Особенности">
          {featureHighlights.map((feature) => (
            <div key={feature.title}>
              <strong>{feature.title}</strong>
              <div>{feature.description}</div>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
