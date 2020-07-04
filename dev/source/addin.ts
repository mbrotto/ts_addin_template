//Typescript source site project

interface Geotab {
    addin: {
        //Name of the add-in
        addinName: Function
    };
}

declare const geotab: Geotab;

//class to be initialized at the start of the geotab addin lifecycle - initialize
class Addin {
    private readonly api;
    //Build the DOM
    private readonly displayButton: HTMLElement = document.getElementById("displayButton");
    private readonly hideButton: HTMLElement = document.getElementById("hideButton");
    // public displayOutput: HTMLElement = document.getElementById('displayOutput');

    //initialize addin 
    constructor (api) {
        this.api = api;
    }

    private showOutput(){
        let displayOutput = document.getElementById('displayOutput');
        displayOutput.innerHTML = 'Output text to display';
    }

    private hideOutput(){
        let displayOutput = document.getElementById('displayOutput');
        displayOutput.innerHTML = '';
    }

    //render addin
    render () {

    }

    //add any event handlers
    addEventHandlers() {
        this.displayButton.addEventListener('click', this.showOutput, false);
        this.hideButton.addEventListener('click', this.hideOutput, false);
    }

    private removeEventHandlers(){
        this.displayButton.removeEventListener('click', this.showOutput, false);
        this.hideButton.removeEventListener('click', this.hideOutput, false);
    }

    //blur actions - de-initialize actions
    unload () {
        //this.abortCurrentTask();
        //remove event listeners
        this.removeEventHandlers();
    }
};

geotab.addin.addinName = function () {
    let addin: Addin;

    return {
        initialize: (api, state, callback) => {
            addin = new Addin(api);
            api.getSession(function(session, server) {
                var userName = session.userName;
                console.log(`userName: ${userName}`);
                console.log(`server: ${server}`);
            })
            
            callback();
        },
        focus: () => {
            addin.render();
            addin.addEventHandlers();
        },
        blur: () => {
            addin.unload();
        }
    };
};