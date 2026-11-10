import React from "react";
import "./App.css";

const github = "https://github.com/Chart5893";
const siteRepo = github + "/Chart5893.github.io/tree/main";

function Tags({ items }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Christian Hart, home">CH<span>Christian Hart</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="intro">
          <div>
            <p className="eyebrow"><span className="status-dot" /> Software developer · North Georgia</p>
            <h1 id="intro">Practical problems.<br /><em>Thoughtful software.</em></h1>
            <p className="intro">I'm Christian Hart. I build web applications, Android tools, and interactive prototypes—connecting useful ideas with the code that makes them work.</p>
            <div className="actions"><a className="button" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a className="text-link" href="https://www.linkedin.com/in/christianhartcs/">Connect on LinkedIn ↗</a></div>
          </div>
          <aside className="hero-note" aria-label="Professional focus">
            <p className="eyebrow">From idea to implementation</p>
            <p className="note-title">Curious by nature.<br />Practical by experience.</p>
            <p>A computer science foundation, hands-on project work, and years of experience helping teams get things done.</p>
            <div className="note-footer"><span>B.S. Computer Science</span><span>SNHU · 2025</span></div>
          </aside>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Building beyond the classroom.</h2></div><p>Independent projects, experiments, and the engineering decisions behind them.</p></div>
          <article className="featured project">
            <div className="project-copy">
              <p className="eyebrow">Independent Android project</p>
              <h3>Handy Farmer</h3>
              <p className="project-lead">A practical toolkit for the small farm.</p>
              <p>Drawing on my small-farm background, I developed an Android app that brings field work and livestock records into one place. The project connects mobile interfaces, local data storage, mapping, and weather information around everyday farm tasks.</p>
              <Tags items={["Kotlin", "Jetpack Compose", "Room", "Maps"]} />
              <details><summary>Explore the project</summary><div className="detail-body"><h4>The problem</h4><p>Small farms need a manageable way to keep track of field activity and animal records while working outside.</p><h4>My implementation</h4><p>Built workflows for GPS spray coverage, saved fields, livestock births, vaccinations, sales, and breeding reminders. Integrated weather information to support planning.</p><h4>Engineering focus</h4><p>Connecting location-based workflows with structured records and a mobile interface designed around farm tasks.</p><p className="muted">Independent development project. Source code and a public download are not linked here.</p></div></details>
            </div>
            <div className="farm-panel" aria-label="Handy Farmer feature overview">
              <p className="eyebrow">Built around the work</p>
              <div className="farm-row"><span className="feature-number">01</span><div><h4>In the field</h4><p>Field mapping & GPS spray coverage</p></div></div>
              <div className="farm-row"><span className="feature-number">02</span><div><h4>With the herd</h4><p>Livestock records & breeding reminders</p></div></div>
              <div className="farm-row"><span className="feature-number">03</span><div><h4>Planning ahead</h4><p>Weather information & farm reports</p></div></div>
              <p className="panel-caption">Domain knowledge → useful workflows</p>
            </div>
          </article>
          <div className="project-grid">
            <article className="project secondary">
              <p className="eyebrow">Android · Active development</p><h3>Sprinter</h3>
              <p>An offline-first workout tracker designed for fast, distraction-free use in the gym. Create reusable routines, organize exercises, and track workout sets with rest timers and local persistence.</p>
              <Tags items={["Kotlin", "Jetpack Compose", "Material 3", "Room"]} />
              <details><summary>Engineering decisions</summary><div className="detail-body"><p>Designed around reusable exercise and routine data, per-set tracking, and an interface that stays practical during workouts. Local storage keeps core functionality independent of a network connection.</p><p>Actively developed; account-linked subscriptions and optional AI-assisted workout reviews are planned features, not released capabilities.</p></div></details>
              <a className="text-link project-link" href={github + "/Sprinter"}>Explore Sprinter on GitHub ↗</a>
            </article>
            <article className="project secondary">
              <p className="eyebrow">Spatial interaction · Prototype</p><h3>Floor-anchored WebAR</h3>
              <p>Place a virtual object on a real-world floor through a mobile browser. A preview-and-confirm workflow combines surface detection, drag adjustment, height locking, and transform freezing to reduce placement drift.</p>
              <Tags items={["TypeScript / JavaScript", "8th Wall", "Three.js", "ECS"]} />
              <details><summary>Engineering decisions</summary><div className="detail-body"><p>Separated interaction coordination, UI guidance, and placement utilities into modular components. The public showcase replaces client-owned assets with a programmatic cube and excludes licensed SDK files.</p><p>This is a code and architecture showcase, not a standalone runnable application.</p></div></details>
              <a className="text-link project-link" href={github + "/web-ar-floor-anchored-experience"}>Explore code & architecture ↗</a>
            </article>
            <article className="project secondary">
              <p className="eyebrow">Simulation · Experimental foundation</p><h3>Pokémon Team Selector</h3>
              <p>A Python battle-simulation backend exploring team comparison. A FastAPI endpoint accepts two teams, runs a series of battles through a local Pokémon Showdown server, and returns wins and ties.</p>
              <Tags items={["Python", "FastAPI", "Pydantic", "poke-env"]} />
              <details><summary>Engineering decisions</summary><div className="detail-body"><p>Separated the request layer, simulation engine, and policy logic. Requests use typed models and clamp battle counts to 1–2,000.</p><p>The current policy chooses random moves. Learned policies and optimal team selection are future goals, not completed capabilities.</p></div></details>
              <a className="text-link project-link" href={github + "/PokemonOptimalTeamSelector"}>Explore the source ↗</a>
            </article>
          </div>
        </section>

        <section className="section academic" aria-labelledby="academic-title">
          <div className="section-heading"><div><p className="eyebrow">02 / Academic foundation</p><h2 id="academic-title">Where the foundations took shape.</h2></div><p>Selected CS capstone work in full-stack development, algorithms, and data processing.</p></div>
          <div className="academic-list">
            <article><span className="project-index">01</span><div><h3>Company Offices App</h3><p>Rebuilt a company-data application with a MongoDB database, Express API, and React interface. Charts and tables explore founding years and office locations.</p><Tags items={["React", "Node.js / Express", "MongoDB", "Recharts"]} /><div className="inline-links"><a href="/company-results.html">View results & case study ↗</a><a href={siteRepo + "/company-offices-app"}>Source code ↗</a></div></div></article>
            <article><span className="project-index">02</span><div><h3>Treasure Hunt AI</h3><p>A maze-solving reinforcement learning project enhanced with a custom guidance algorithm to support the agent's learning. Explores pathfinding, reward-driven behavior, and algorithm design.</p><Tags items={["Python", "Reinforcement learning", "Pathfinding"]} /><div className="inline-links"><a href="/TreasureHuntGame/">View project & narrative ↗</a><a href={siteRepo + "/TreasureHuntGame"}>Source code ↗</a></div></div></article>
            <article><span className="project-index">03</span><div><h3>Grocery Frequency Tracker</h3><p>A text-data analysis tool with terminal and Tkinter interfaces. Counts grocery items, supports case-insensitive searches, visualizes frequencies, and exports results.</p><Tags items={["Python", "Tkinter", "File processing"]} /><div className="inline-links"><a href="/HistogramProject/">View project & narrative ↗</a><a href={siteRepo + "/HistogramProject"}>Source code ↗</a></div></div></article>
          </div>
          <details className="archive"><summary>Capstone review & original self-assessment</summary><div className="detail-body"><p>For a deeper look at the academic work, explore the original code review and the reflection written before graduation.</p><div className="inline-links"><a href="https://www.youtube.com/watch?v=2M2WEjkR7k0">Watch the code review ↗</a><a href="/capstone-assessment.html">Read the archived self-assessment ↗</a></div></div></details>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div><p className="eyebrow">03 / About me</p><h2 id="about-title">A developer with<br /><em>an operations mindset.</em></h2></div>
          <div className="about-copy"><p className="large-copy">I bring a practical approach to software: understand the problem, break it into manageable pieces, and build something people can use.</p><p>I earned my B.S. in Computer Science from Southern New Hampshire University in 2025. Since graduating, I've continued building independently across Android development, web-based augmented reality, and Python simulation tooling.</p><p>Before and alongside that technical work, I held retail leadership roles managing teams of 15 or more people. That experience taught me to communicate clearly, coordinate competing priorities, and stay accountable when plans change—habits I bring to development work.</p><p>I'm looking for a software development team where I can contribute to useful products, collaborate on technical decisions, and keep growing through hands-on work and feedback.</p><div className="skills"><div><h3>Application development</h3><p>React · JavaScript · Kotlin · Jetpack Compose</p></div><div><h3>Data & backend</h3><p>Python · FastAPI · Node.js · Express · MongoDB · Room</p></div></div></div>
        </section>
        <section id="contact" className="contact" aria-labelledby="contact-title"><div><p className="eyebrow">04 / Let's connect</p><h2 id="contact-title">Have a useful problem<br />to work on?</h2><p>Open to software development opportunities and conversations with thoughtful engineering teams.</p></div><div className="contact-links"><a className="button" href="https://www.linkedin.com/in/christianhartcs/">Connect on LinkedIn ↗</a><a className="text-link" href={github}>See more on GitHub ↗</a></div></section>
      </main>
      <footer><span>Christian Hart · Software Developer</span><span>Built with React. Grounded in practical work.</span></footer>
    </>
  );
}

export default App;
