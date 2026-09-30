import { Mail, Linkedin, Instagram } from "lucide-react";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const Contact = () => {
  const { data } = useWordPressHomepageQuery();
  const contact = data?.contact;
  return (
    <section id="contact" className="section-container bg-background">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Get in Touch
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="max-w-xl mx-auto slide-up">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">
          Contact Information
        </h3>
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <a
                href={`mailto:${contact?.email || ""}`}
                className="text-gold hover:underline"
              >
                {contact?.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">LinkedIn</p>
              <a
                href={contact?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Specialty Masters Club
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Instagram className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Instagram</p>
              <a
                href={contact?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                @smclub_uw
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
