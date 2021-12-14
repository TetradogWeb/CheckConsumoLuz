class Controller{

    constructor(prefix='controller'){
        this.Id=prefix+new Date().getTime();
        this.Parent=null;
    }
    get HasParent(){
        return this.Parent != null;
    }
    get IdContainer(){
        return 'container'+this.Id;
    }
    SetParent(idParent,atTop=true){
        this.Remove();
        this.Parent=idParent;
        if(atTop){
            $('#'+this.Parent).append(this.GetHtml());
        }else{
            $('#'+this.Parent).prepend(this.GetHtml());
        }
        //pongo los eventos
    }
    Remove(){
        if(this.HasParent){
            $('#'+this.IdContainer).remove();
            //si no se quitan los eventos los quito aqui
        }
    }
    GetHtml(){
        return '<div id="'+this.IdContainer+'">'+this.GetContent()+'</div>';
    }
    GetContent(){
        throw new Error("You must override this method");
    }
    Refresh(){
        if(this.HasParent){
            $("#"+this.IdContainer).empty();
            $("#"+this.IdContainer).append(this.GetContent());
        }
    }



}