import Header from './component/Header/index'
import Card from './component/Card';

import './App.css';

function App() {
  const dados = [
    {
      name: 'Allan Matheus',
      function: 'Developer Jr.',
      level: 'Junior',
      url: 'http://google.com'
    },
    {
      name: 'Mateus Santana',
      function: 'Developer Sr.',
      level: 'Senior',
      url: 'http://google.com'
    },
    {
      name: 'Thais Cristine',
      function: 'Tester',
      level: 'Junior',
      url: 'http://google.com'
    },
    {
      name: 'Suzane Barbosa',
      function: 'UX/UI Design',
      level: 'Junior',
      url: 'http://google.com'
    },
  ];

  return (
    <div className="App">
      <Header />

      <div className="container flex">
        {
          dados.map(item => {
            return (
              <div className="col">
                <Card user={item}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
