$(document).ready(() => {

            renderContacts();

            function refreshOutput(contacts) {

                if (!contacts) {
                    contacts = JSON.parse(localStorage.getItem("contacts"))

                }
                if (contacts) {
                    let newDOM = renderContacts(contacts);
                    $("#output").html(newDOM);
                    refreshListeners();
                } else {
                    $("#output").html("")
                }
            }


            $("#saveBtn").click(function () {
                    let contact = getData();
                    if (localStorage.getItem("contacts") != null) {
                        let contacts = JSON.parse(localStorage.getItem("contacts"));
                        contacts.push(contact);
                        localStorage.setItem("contacts", JSON.stringify(contacts));

                    } else {
                        localStorage.setItem("contacts", JSON.stringify([contact]));
                    }
					refreshOutput();
			});
            

                $("#clearBtn").click(function () {
                    localStorage.clear();
                
                    refreshOutput();
                });
                


                $("#searchInput").on("input", function () {
                    let searchTerm = $("#searchInput").val();
                    let contacts = JSON.parse(localStorage.getItem("contacts"))
                    contacts = contacts.filter((person) => {
                        return person.firstname.match(searchTerm)
                    });
                    refreshOutput(contacts);
                });

                function refreshListeners(){
                    $(".deleteContactBtn").click(function(event){
                        removeContact($(event.target).data("id"));
                        refreshOutput();
                    });
                }

			refreshOutput();
			getData();
            
});