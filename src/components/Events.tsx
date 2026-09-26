const Events = () => {
  return (
    <section id="events" className="section-container bg-lavender">
      <div className="text-center slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Upcoming Q2 Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://smcfoster.notion.site/ebd//30c0984ab5b68025b895da1ead5577a6"
            width="100%"
            height="1200"
            frameBorder="0"
            allowFullScreen
            title="Upcoming Events"
            className="w-full min-h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;