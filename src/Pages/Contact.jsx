import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
function Contact() {


  return (
    <>
      <header>
          <Nav />
      </header>

      <main>
          <div className='container-form'>
            <h2>Contact</h2>
              <Form />
          </div>
      </main>
        
      <footer>
        <Footer />
      </footer>
    </>
    
  );
}

export default Contact;
