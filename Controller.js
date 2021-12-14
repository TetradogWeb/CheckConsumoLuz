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
        return this.GetHtml().then(htmlContent=>{
                                                if(atTop){
                                                    $('#'+this.Parent).append(htmlContent);
                                                }else{
                                                    $('#'+this.Parent).prepend(htmlContent);
                                                }
                                                //pongo los eventos
    
         });
    
    }
    Remove(){
        if(this.HasParent){
            $('#'+this.IdContainer).remove();
            //si no se quitan los eventos los quito aqui
        }
    }
    GetHtml(){
        var contentPromise=this.GetContent();
        if(!(contentPromise instanceof Promise))
        contentPromise=Promise.resolve(contentPromise);

        return contentPromise.then(content=> '<div id="'+this.IdContainer+'">'+content+'</div>');
    }
    GetContent(){
        throw new Error("You must override this method");
    }
    Refresh(){
        var contentPromise;
        var result;
        if(this.HasParent){
            contentPromise=this.GetContent();
            if(!(contentPromise instanceof Promise))
                contentPromise=Promise.resolve(contentPromise);
            $("#"+this.IdContainer).empty();
          result=contentPromise.then(content=>{  $("#"+this.IdContainer).append(content)});
        }else{
            result=Promise.resolve();
        }
        return result;
    }



}