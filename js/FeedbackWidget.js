class FeedbackWidget{
    constructor(elementId) {
        this._elementId = elementId;
    }
  
    get elementId() {
        return this._elementId;
    }

    set elementId(elementId) {
        return this._elementId = elementId;
    }
    
    show(){
        document.getElementById(this._elementId).style.display = "block"
    }

    hide(){
        document.getElementById(this._elementId).style.display = "none"
    }

    toggle(){
        if(document.getElementById(this._elementId).style.display == "none")
        {
            document.getElementById(this._elementId).style.display = "block";
            return;
        }
        document.getElementById(this._elementId).style.display = "none";
    }
}