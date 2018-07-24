const state = {
  graphList: []
};


const render = lState => {

  const topBar = document.createElement('div');
  topBar.className = 'topbar';
 
  let graphs = document.createElement('ul');
  graphs.className = 'graphs';

  const addBtn = document.createElement('button');
  addBtn.className = 'addbutton';
  addBtn.innerHTML = 'Generar';

  let graphInput = document.createElement('input');
  graphInput.className = 'graphinput';
  graphInput.setAttribute("type", "text");

  let number = graphInput.value
  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }
  
  // Main rendering
  
  root.appendChild(topBar);
  root.appendChild(graphs);
  topBar.appendChild(graphInput);
  topBar.appendChild(addBtn);


  // para cada grafica del array
  for(let u = 0; u<lState.graphList.length; u++){
    console.log("grafica"+u+lState.graphList[u]);
    const graphs = document.createElement('ul');
    // crear una linea de barras
    for(let i = 0; i<lState.graphList[u]; i++){
      console.log('cuadrito');
      const cuadrito = document.createElement('li');
      graphs.appendChild(cuadrito);
    }
  }

  
  // --------------------- Events ------------------------

  addBtn.onclick = () => {  
    number = graphInput.value;
    console.log(number);
    // Delete input box content
    graphInput.value = '';
    // Add limit value (graph) to array
    lState.graphList.push(number);
    console.log(lState.graphList);

    render(lState);
  };


}
render(state);


