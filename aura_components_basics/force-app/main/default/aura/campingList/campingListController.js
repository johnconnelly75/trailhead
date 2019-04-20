




({
    clickCreateItem: function(component, event, helper) {
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new item
            var newItem1 = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem1));
            // helper.createItem(component, newItem);

            var theItem = component.get("v.items");
            var newItem2 = JSON.parse(JSON.stringify(newItem1));

            theItem.push(newItem2);
            component.set("v.items", theItem);

            component.set("v.newItem",
                          {'sobjectType' : 'Camping_Item__c',
                          'Name' : '',
                          'Quantity__c' : 0,
                          'Price__c' : 0,
                          'Packed__c' : false});


        }
    }
})

