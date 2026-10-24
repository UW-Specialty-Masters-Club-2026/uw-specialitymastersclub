const Events = () => {
  return (
    <section id="events" className="section-container bg-lavender">
      <div className="text-center slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <p className="mb-6 text-foreground/80">
          You can also{" "}
          <a
            href="https://slender-rook-3da.notion.site/Event-Calendar-Specialty-Masters-Committee-UW-Foster-742649d2cebd8211a02c814a33eb7dd6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            open the event calendar in a new tab
          </a>.
        </p>

        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://slender-rook-3da.notion.site/ebd/742649d2cebd8211a02c814a33eb7dd6"
            width="100%"
            height="1200"
            frameBorder="0"
            allowFullScreen
            title="Events"
            className="w-full min-h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
