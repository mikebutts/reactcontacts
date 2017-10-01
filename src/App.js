import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts : [{
      "id": 1,
      "name": "Bartolemo McBoyle",
      "avatarURL": "https://robohash.org/utrepellendusperferendis.jpg?size=50x50&set=set1",
      "email": "bmcboyle0@cnn.com"
    }, {
      "id": 2,
      "name": "Roxana Colleck",
      "avatarURL": "https://robohash.org/abomnisquisquam.jpg?size=50x50&set=set1",
      "email": "rcolleck1@naver.com"
    }, {
      "id": 3,
      "name": "Ravi Sibley",
      "avatarURL": "https://robohash.org/repudiandaedignissimosesse.bmp?size=50x50&set=set1",
      "email": "rsibley2@wikispaces.com"
    }, {
      "id": 4,
      "name": "Editha Kassidy",
      "avatarURL": "https://robohash.org/eiusquipossimus.bmp?size=50x50&set=set1",
      "email": "ekassidy3@blogger.com"
    }, {
      "id": 5,
      "name": "Ailee Marriage",
      "avatarURL": "https://robohash.org/nihilutnisi.jpg?size=50x50&set=set1",
      "email": "amarriage4@columbia.edu"
    }, {
      "id": 6,
      "name": "Dukey Holsall",
      "avatarURL": "https://robohash.org/ipsaquidemautem.png?size=50x50&set=set1",
      "email": "dholsall5@nih.gov"
    }, {
      "id": 7,
      "name": "Sinclare McClary",
      "avatarURL": "https://robohash.org/atauteum.png?size=50x50&set=set1",
      "email": "smcclary6@ox.ac.uk"
    }, {
      "id": 8,
      "name": "Basile Silwood",
      "avatarURL": "https://robohash.org/ullamiuredignissimos.bmp?size=50x50&set=set1",
      "email": "bsilwood7@army.mil"
    }, {
      "id": 9,
      "name": "Marigold Varney",
      "avatarURL": "https://robohash.org/eaquevelitincidunt.png?size=50x50&set=set1",
      "email": "mvarney8@indiegogo.com"
    }, {
      "id": 10,
      "name": "Bibbye Pawlowicz",
      "avatarURL": "https://robohash.org/aspernaturaliquamtenetur.png?size=50x50&set=set1",
      "email": "bpawlowicz9@google.com.hk"
    }]
  }

    removeContact = (contact) => {
      this.setState((state)=> ({
        contacts: state.contacts.filter((c) => c.id !== contact.id)
      }))
    }
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
      </div>
    )
  }
}

export default App;