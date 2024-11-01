
export function setSelectedProductDocumentId(id){
    try{
        localStorage.setItem("id",id);
    }catch(e){
        console.log("Error in setSelectedProductDocumentId",e)
    }
    
}
