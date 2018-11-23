



/* UI AUTHOR RABIATASKIN

--STEPS
- USER INFO INPUTS
- STORAGE WITH SAVE BUTTON
-GETTING DATA WILL SEE IN TABLE
-UNNECESSARY DATA WILL BE DELETED TO TABLE TO USER USER


STATES

-DISPLAY EMPTY
-INPUTS FULL
-TABLE ADDED NEW CONTACT
-TABLE SCREEN WRITTEN
*/




function renderContacts(contacts){
	
	if(!contacts){
		contacts = JSON.parse(localStorage.getItem("contacts"));
		contacts = contacts ? contacts : [];
	}
 
let head =`
<table>
<thead>
   
    <th> Firstname</th>
    <th> Lastname</th>
    <th> Phone</th>
    <th> E-mail</th>
</thead>
<tbody>`;
	
    let body = "";
    for (let contact of contacts){
        body+= `<tr>
<td>${contact.firstname}</td>
<td>${contact.lastname}</td>
<td>${contact.phone}</td>
<td>${contact.email}</td>
<td> <sup class="deleteContactBtn" data-id=${contact.firstname}>x</sup></td>

 </tr>`
    }

    let foot=`

</tbody>
</table> `;


return head + body + foot;

}


