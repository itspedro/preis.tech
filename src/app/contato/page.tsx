import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import ContactContent from '@/contents/contact/contact';

function Contact() {
  return(
    <main>
      <Header />
      <div>
        <ContactContent />
      </div>
      <Footer />
    </main>
   );
};

export default Contact;
