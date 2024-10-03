import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <h1 className="title">Vancouver Webpage</h1>
            <p className="description">
                Vancouver is home to over 1 million people, and is considered by many to be the most beautiful city in Canada. Take a look at these pictures and judge for yourself!
            </p>

            <div className="pictures-div">
                <h2 className="image-header">1. Sunset Beach</h2>
                <p>A pleasant, sandy beach in the West End, with spectacular views of the sunset.</p>
                <p>
                    Read more about Sunset Beach <a href="https://vancouver.ca/parks-recreation-culture/sunset-beach.aspx"> here</a>
                </p>
                <img src="/Vancouver1.jpg" alt="Vancouver 1" />

                <h2 className="image-header">2. The North Shore</h2>
                <p>Ferry travel from Gastown via the SeaBus.</p>
                <p>
                    Check the schedule <a href="https://www.translink.ca/schedules-and-maps/seabus"> here</a>
                </p>
                <img src="/Vancouver2.jpg" alt="Vancouver 2" />

                <h2 className="image-header">3. Coal Harbour</h2>
                <p>A high-end neighborhood with modern skyscrapers.</p>
                <p>
                    Read more <a href="https://en.wikipedia.org/wiki/Coal_Harbour#:~:text=Coal%20Harbour%20is%20a%20section%20of%20Burrard"> here</a>
                </p>
                <img src="/Vancouver3.jpg" alt="Vancouver 3" />

                <h2 className="image-header">4. Stanley Park</h2>
                <p>The biggest and most famous park in BC.</p>
                <p>
                    Read more <a href="https://vancouver.ca/parks-recreation-culture/stanley-park.aspx"> here</a>
                </p>
                <img src="/Vancouver4.jpg" alt="Vancouver 4" />

                <h2 className="image-header">5. Grouse Mountain</h2>
                <p>Climb to the top via the Grouse Grind trail, or ride the Grouse Mountain Gondola!</p>
                <p>
                    Check the hours of operation <a href="https://www.grousemountain.com/skyride"> here </a>
                </p>
                <img src="/Vancouver5.jpg" alt="Vancouver 5" />
            </div>
        </div>
    );
}

export default App;
