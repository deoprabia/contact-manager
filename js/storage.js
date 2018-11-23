function getData(){

    let firstname=$("#firstname").val();
    let lastname=$("#lastname").val();
    let phone=$("#phone").val();
    let email=$("#email").val();
    return{
        firstname,lastname,phone,email
    }


}

function removeContact(person){

    let contacts= JSON.parse(localStorage.getItem("contacts"))

    if (contacts){
        contacts = contacts.filter((contact)=>{
            return contact.firstname !== person;
        });
        localStorage.setItem("contacts",JSON.stringify(contacts));
    }
}