import ZoomOut from "./ZoomOut";
import ZoomIn from "./ZoomIn";


function App() {

  var link = "https://challenge-tiler.services.propelleraero.com/tiles/"; //first part of the link
  var token = "?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2hhaW1hLXpvdWJpIiwiaWF0IjoxNjM4NzU5NjE4fQ.0jxv_k-3prygVKfVFqxL1SU9VWIpq1mL3gIg1DLO70k"; //token the last part of the link
  var level = -1; 

  function ZoomIn() {
    level+=1;
    const elements=[];
    var chunck = Math.pow(4, level); //number of chuncks for each level
    var len = Math.pow(2, level); //number of chuncks in x, y axis
    for (var x=0; x<len; x++){ //generate a link for each chunck
      for (var y=0; y<len; y++){
        var chunckUrl = link+level+'/'+y+'/'+x+token;
            elements.push(<img src={chunckUrl} alt="chuncks"/>);
          }
        elements.push(<br></br>);
    }
    return elements;
  }

  function ZoomOut() {
    const elements=[];
    if (level < 3){
      level-=1;
      var chunck = Math.pow(4, level); //number of chuncks for each level
      var len = Math.pow(2, level); //number of chuncks in x, y axis
      for (var x=0; x<len; x++){ //generate a link for each chunck
          for (var y=0; y<len; y++){
              var chunckUrl = link+level+'/'+y+'/'+x+token;
                elements.push(<img src={chunckUrl} alt="chuncks" />);
          }
          elements.push(<br></br>);
      }  
    }
    return elements;
  }

  return (
    <div className="App">
      <button onClick={ZoomIn}>+</button>
      <button onClick={ZoomOut}>-</button>
    </div>
  );
}

export default App;
