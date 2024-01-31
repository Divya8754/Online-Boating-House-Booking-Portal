import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Footer from './Footer';

function BoatDetails(){
    return(
        <div>
        <Navbar2/>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://i0.wp.com/bluejellycruises.com/blog/wp-content/uploads/2023/05/vembanad-lake-trip-to-kerala3.webp?fit=768%2C527&ssl=1"
              className="card-img-top"
              alt="Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Alleppey</h5>
              <p className="card-text">
              Known as the "Venice of the East," Alleppey is famous for its backwaters and houseboat cruises. Boathouses in Alleppey offer a unique experience as they navigate through the interconnected waterways, providing glimpses of rural life and lush landscapes.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://media.istockphoto.com/id/177447843/photo/house-boat-in-backwaters.jpg?s=612x612&w=0&k=20&c=9RnNr22SKJiNKuOukgfo82TtSgvSLMIZALXNf4m_VPM="
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">  Karnataka</h5>
              <p className="card-text">
               Kabini, located in the southern state of Karnataka, is known for its wildlife and scenic beauty. Boathouses on the Kabini River offer a chance to explore the Nagarhole National Park and enjoy the tranquility of the surroundings.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbts7kK7OJZUWc07IA-xMcQI1bdJgKyukBkyFELKfnzg&s"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Jammu and Kashmir</h5>
              <p className="card-text">
               Dal Lake, Srinagar, Houseboats on Dal Lake in Srinagar are a famous attraction. These houseboats, often referred to as "floating palaces," provide a unique stay experience. They are intricately decorated and offer stunning views of the surrounding mountains.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/27/17/26/water-1283199_640.jpg"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Goa</h5>
              <p className="card-text">
              Chapora River,Boathouses can be found on the Chapora River in Goa. These provide a different perspective of the state known for its beaches and vibrant culture.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/144061361.jpg?k=231879bc11e6d53508de828f556594af1f39b684ab43b7a002f3a300544797c0&o=&hp=1"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">West Bengal</h5>
              <p className="card-text">
              Sundarbans Delta,The Sundarbans, a UNESCO World Heritage Site, is home to the largest mangrove forest. Boathouses here allow visitors to explore the diverse flora and fauna, including the Bengal tiger.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxhcHB1emhhfGVufDB8fDB8fHww"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Tamilnadu</h5>
              <p className="card-text">
              Kodaikanal,While not known for traditional boathouses, Kodaikanal in Tamil Nadu offers charming rowboats and pedal boats on its serene lakes, providing a delightful experience.              
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://thumbs.dreamstime.com/b/houseboat-3236731.jpg"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Andaman and Nicobar Islands</h5>
              <p className="card-text">
              Havelock Island,Boathouses and houseboats are available in the Andaman Islands, particularly in Havelock. They offer a unique way to explore the crystal-clear waters and coral reefs.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://wallpaperaccess.com/full/9210592.jpg"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Assam</h5>
              <p className="card-text">
              Brahmaputra River,In Assam, particularly along the Brahmaputra River, you can find traditional houseboats known as 'floating hotels.' These houseboats provide a unique way to experience the beauty of the river and its surroundings. The slow-paced cruise allows you to enjoy the scenic landscapes and observe local life along the riverbanks.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://plus.unsplash.com/premium_photo-1697729432049-caca66a1dab6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWxhcHB1emhhfGVufDB8fDB8fHww"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Rajasthan</h5>
              <p className="card-text">
              Lake Pichola, Udaipur,While Rajasthan is known for its deserts and palaces, Udaipur offers a different experience with its beautiful lakes. Lake Pichola, in particular, is known for its boat rides and houseboats. Staying on a houseboat on Lake Pichola allows you to enjoy the majestic views of Udaipur's palaces and the Aravalli Hills.
              </p>
            </div>
            <div className="card-footer">
            <Link to="/book"><button>Book Now</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>

    )
}
export default BoatDetails