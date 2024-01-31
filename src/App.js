import Navigations from './navigations';
import TestimonialCard from './components/cards/testimonial';
import Img from './assests/images/logo1.png'

function App() {
  return (
    <div className="bg-orange-1">
      {/* <Navigations /> */}
      <div className="flex">
        <TestimonialCard image={Img} name='lorem' designation='lorem' content='lorem' />
      </div>
    </div>
  );
}

export default App;
