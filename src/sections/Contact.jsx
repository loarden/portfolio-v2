import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 sm:py-32 md:py-40 w-full bg-background"
    >
      <div className="max-w-7xl px-4 mx-auto text-center">
        <SectionTitle title="Get in touch!" />
        <p className="mt-6">Let's create your next application together!</p>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
